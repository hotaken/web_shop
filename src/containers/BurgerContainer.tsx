import { Button, createStyles, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Burger from '../components/Burger/Burger';

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
            color: theme.palette.secondary.main,
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

export default BurgerContainer;
