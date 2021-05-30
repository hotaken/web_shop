/* eslint-disable react/jsx-props-no-spreading */
import { Button, createStyles, makeStyles, TextField, Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';

import Burger, { IngredientType } from '../components/Burger/Burger';
// import useLocalStorage from '../hooks/useLocalStorage';
import { StoreDispatchType } from '../store';
import { addOrderAction, addOrderActionType } from '../store/orders';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: '20px',
            boxSizing: 'border-box',
            border: `3px solid ${theme.palette.primary.main}`,
            borderRadius: '20px',
            padding: '10px',
        },
        title: {
            color: theme.palette.primary.main,
            marginBottom: '15px',
        },
        management: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '600px',
            marginBottom: '10px',
        },
        output: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '800px',
        },
        orderForm: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '600px',
            marginTop: '20px',
            padding: '20px',
        },
        orderField: {
            width: '400px',
            margin: '10px auto',
        },
    }),
);

interface IProps {
    ingredients: IngredientType[];
    name: string;
    description: string;
    addOrder: addOrderActionType;
}

const BurgerListElem = (props: IProps): JSX.Element => {
    const classes = useStyles();
    const { ingredients, name, description, addOrder } = props;

    const { handleSubmit, control, formState, reset } = useForm();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const onSubmitHandler = (data: { amount: number }) => {
        console.log(data);

        addOrder({ ingredients, amount: data.amount });

        reset();

        const snackbarNotification = enqueueSnackbar('Check your order in the basket', {
            variant: 'success',
            anchorOrigin: { horizontal: 'right', vertical: 'top' },
            onClick: () => closeSnackbar(snackbarNotification),
        });
    };

    const orderForm =
        ingredients.length > 0 ? (
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className={classes.orderForm}>
                    <Typography variant="h5" component="h2" color="primary">
                        {description}
                    </Typography>
                    <Controller
                        render={({ field }) => {
                            return (
                                <TextField
                                    className={classes.orderField}
                                    variant="outlined"
                                    label="Amount"
                                    error={!!formState.errors?.amount?.message}
                                    helperText={formState.errors?.amount?.message}
                                    {...field}
                                />
                            );
                        }}
                        name="amount"
                        control={control}
                        rules={{
                            required: { value: true, message: 'Required' },
                            max: {
                                value: 100,
                                message: 'The value should be less or equal to 100',
                            },
                            min: {
                                value: 1,
                                message: 'The value should be greater than 0',
                            },
                            pattern: {
                                value: /^\d+$/g,
                                message: 'The value should be number',
                            },
                        }}
                        defaultValue=""
                    />

                    <Button variant="contained" color="secondary" type="submit">
                        ADD TO CART
                    </Button>
                </div>
            </form>
        ) : null;

    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h1" className={classes.title}>
                {name}
            </Typography>

            <div className={classes.output}>
                <Burger ingredients={ingredients} />
            </div>

            {orderForm}
        </div>
    );
};

// REDUX STORE
const mapDispatchToProps = (dispatch: StoreDispatchType) => {
    return {
        addOrder: ({ ingredients, amount }: { ingredients: IngredientType[]; amount: number }) =>
            dispatch(addOrderAction({ ingredients, amount })),
    };
};

export default connect(undefined, mapDispatchToProps)(BurgerListElem);
