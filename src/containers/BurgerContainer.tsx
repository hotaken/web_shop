import { Button, createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
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
    }),
);

interface IProps {
    ingredients: StoreType['ingredients'];
    addIngredient: addIngredientActionType;
    deleteIngredient: deleteIngredientActionType;
    resetIngredients: resetIngredientsActionType;
}

const BurgerContainer = (props: IProps): JSX.Element => {
    const classes = useStyles();

    // const [ingredients, setIngredients] = useState<IngredientType[]>([]);
    // const [ingredientsStorage, setIngredientsStorage] = useLocalStorage<IngredientType[]>(
    //     'ingredients',
    //     [],
    // );

    // PROPS
    const { ingredients, addIngredient, deleteIngredient, resetIngredients } = props;

    const onAddIngredientHandler = (ingredient: IngredientType) => {
        addIngredient({ ingredient });
        // setIngredientsStorage((currentState) => {
        //     const newState = [...currentState];
        //     newState.unshift(ingredient);
        //     return newState;
        // });
    };

    const onDeleteIngredientHandler = (ingredientIndex: number) => {
        deleteIngredient({ ingredientIndex });
        // setIngredientsStorage((currentState) => {
        //     const newState = [...currentState];
        //     newState.splice(ingredientIndex, 1);
        //     return newState;
        // });
    };
    const onResetIngredientsHandler = () => {
        resetIngredients();
    };

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

                <Button className={classes.resetButton} onClick={() => onResetIngredientsHandler}>
                    Reset
                </Button>
            </div>

            <div className={classes.output}>
                <Burger
                    ingredients={ingredients}
                    onIngredientClick={(index) => onDeleteIngredientHandler(index)}
                />
            </div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer);
