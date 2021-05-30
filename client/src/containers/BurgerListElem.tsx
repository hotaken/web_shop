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
            justifyContent: 'space-between',
            width: '400px',
            marginTop: '20px',
            boxSizing: 'border-box',
            border: `3px solid black`,
            borderRadius: '20px',
            padding: '10px',
            margin: '1% 1% 1% 1%',
            backgroundColor: 'rgba(255,255, 255, 0.7)',
        },
        title: {
            marginBottom: '15px',
        },
        output: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '400px',
        },
        orderForm: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '400px',
            marginTop: '20px',
            padding: '20px',
        },
        orderField: {
            width: '300px',
            margin: '10px auto',
        },
        mainButton: {
            marginTop: '3%',
            color: 'white',
            backgroundColor: '#F47500',
            borderRadius: '7px',
            borderColor: '#F47500',
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                borderColor: '#F47500',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#F47500',
                borderColor: '#F47500',
            },
            '&:hover': {
                backgroundColor: '#F47500',
                boxShadow: 'none',
                borderColor: '#F47500',
            },
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
                    <Typography variant="h5" component="h2">
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

                    <Button className={classes.mainButton} type="submit">
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
                <Burger ingredients={ingredients} heightElem="10px" />
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
