/* eslint-disable react/jsx-props-no-spreading */
import { Button, createStyles, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';

import Burger from '../components/Burger/Burger';
// import useLocalStorage from '../hooks/useLocalStorage';
import { StoreType, StoreDispatchType } from '../store';
import {
    addIngredientAction,
    addIngredientActionType,
    deleteIngredientAction,
    deleteIngredientActionType,
    resetIngredientsAction,
    resetIngredientsActionType,
} from '../store/ingredients';
import { addOrderAction, addOrderActionType } from '../store/orders';

type IngredientType = 'bacon' | 'cheese' | 'cucumber';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: '20px',
            boxSizing: 'border-box',
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
        baconButton: {
            color: '#b33e10',
            border: '2px solid #b33e10',
            marginRight: '10px',
        },
        cheeseButton: {
            color: '#f5c451',
            border: '2px solid #f5c451',
            marginRight: '10px',
        },
        cucumberButton: {
            color: '#36b310',
            border: '2px solid #36b310',
            marginRight: '10px',
        },
        resetButton: {
            color: 'red',
            border: '2px solid red',
            marginRight: '10px',
        },
        output: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        },
        orderForm: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '600px',
            marginTop: '20px',
            border: `3px solid ${theme.palette.primary.main}`,
            borderRadius: '10px',
            padding: '20px',
        },
        orderField: {
            width: '400px',
            margin: '10px auto',
        },
    }),
);

interface IProps {
    ingredients: StoreType['ingredients'];
    addIngredient: addIngredientActionType;
    deleteIngredient: deleteIngredientActionType;
    resetIngredients: resetIngredientsActionType;
    addOrder: addOrderActionType;
}

const BurgerContainer = (props: IProps): JSX.Element => {
    const classes = useStyles();

    // const [ingredients, setIngredients] = useState<IngredientType[]>([]);
    // const [ingredientsStorage, setIngredientsStorage] = useLocalStorage<IngredientType[]>(
    //     'ingredients',
    //     [],
    // );

    // PROPS
    const { ingredients, addIngredient, deleteIngredient, resetIngredients, addOrder } = props;

    const { handleSubmit, control, formState, reset } = useForm();

    const onAddIngredientHandler = (ingredient: IngredientType) => {
        addIngredient({ ingredient });
    };

    const onDeleteIngredientHandler = (ingredientIndex: number) => {
        deleteIngredient({ ingredientIndex });
    };
    const onResetIngredientsHandler = () => {
        resetIngredients();
    };
    const onSubmitHandler = (data: { amount: number }) => {
        console.log(data);

        addOrder({ ingredients, amount: data.amount });

        resetIngredients();

        reset();
    };

    const orderForm =
        ingredients.length > 0 ? (
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className={classes.orderForm}>
                    <Typography variant="h5" component="h2" color="primary">
                        ORDER
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
                Choose ingredients
            </Typography>
            <div className={classes.management}>
                <Button
                    className={classes.baconButton}
                    onClick={() => onAddIngredientHandler('bacon')}
                >
                    Bacon
                </Button>

                <Button
                    className={classes.cheeseButton}
                    onClick={() => onAddIngredientHandler('cheese')}
                >
                    Cheese
                </Button>

                <Button
                    className={classes.cucumberButton}
                    onClick={() => onAddIngredientHandler('cucumber')}
                >
                    Cucumber
                </Button>

                <Button className={classes.resetButton} onClick={() => onResetIngredientsHandler()}>
                    Reset
                </Button>
            </div>

            <div className={classes.output}>
                <Burger
                    ingredients={ingredients}
                    onIngredientClick={(index) => onDeleteIngredientHandler(index)}
                />
            </div>

            {orderForm}
        </div>
    );
};

// REDUX STORE
const mapStateToProps = (state: StoreType) => {
    return {
        ingredients: state.ingredients,
    };
};
const mapDispatchToProps = (dispatch: StoreDispatchType) => {
    return {
        addIngredient: ({ ingredient }: { ingredient: IngredientType }) =>
            dispatch(addIngredientAction({ ingredient })),
        deleteIngredient: ({ ingredientIndex }: { ingredientIndex: number }) =>
            dispatch(deleteIngredientAction({ ingredientIndex })),
        resetIngredients: () => dispatch(resetIngredientsAction()),

        addOrder: ({ ingredients, amount }: { ingredients: IngredientType[]; amount: number }) =>
            dispatch(addOrderAction({ ingredients, amount })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer);
