import { Button, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import Bread from '../components/Ingredients/Bread';

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
    return (
        <div className={classes.root}>
            <div className={classes.management}>
                <Button
                    className={classes.baconButton}
                    // onClick={() => onAddIngredientHandler('bacon')}
                >
                    Bacon
                </Button>

                <Button
                    className={classes.cheeseButton}
                    // onClick={() => onAddIngredientHandler('cheese')}
                >
                    Cheese
                </Button>

                <Button
                    className={classes.cucumberButton}
                    // onClick={() => onAddIngredientHandler('cheese')}
                >
                    Cucumber
                </Button>
            </div>

            <div className={classes.output}>
                <Bread />
                <Bread />
            </div>
        </div>
    );
};

export default BurgerContainer;
