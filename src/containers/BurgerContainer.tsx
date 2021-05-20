/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, createStyles, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Bacon from '../components/Ingredients/Bacon';
import Bread from '../components/Ingredients/Bread';
import Cheese from '../components/Ingredients/Cheese';
import Cucumber from '../components/Ingredients/Cucumber';

type IngredientType = 'bacon' | 'cheese' | 'cucumber';

const ingredientsMap: { [key in IngredientType]: JSX.Element } = {
    bacon: <Bacon />,
    cheese: <Cheese />,
    cucumber: <Cucumber />,
};

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
        output: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        },
    }),
);

const BurgerContainer = (): JSX.Element => {
    const classes = useStyles();

    const [ingredients, setIngredients] = useState<IngredientType[]>([]);

    const onAddIngredientHandler = (ingredient: IngredientType) => {
        setIngredients((currentState) => {
            const newState = [...currentState];
            newState.unshift(ingredient);
            return newState;
        });
    };

    const onDeleteIngredientHandler = (ingredientNumber: number) => {
        setIngredients((currentState) => {
            const newState = [...currentState];
            newState.splice(ingredientNumber, 1);
            return newState;
        });
    };

    const IngredientsArray: JSX.Element[] = [];
    ingredients.forEach((ingredient, index) => {
        const ingredientComp = (
            <div key={`${ingredient + index}`} onClick={() => onDeleteIngredientHandler(index)}>
                {ingredientsMap[ingredient]}
            </div>
        );
        IngredientsArray.push(ingredientComp);
    });

    return (
        <div className={classes.root}>
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
            </div>

            <div className={classes.output}>
                <Bread />

                {IngredientsArray}

                <Bread />
            </div>
        </div>
    );
};

export default BurgerContainer;
