/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Cucumber from './Ingredients/Cucumber';
import Bacon from './Ingredients/Bacon';
import Cheese from './Ingredients/Cheese';
import Bread from './Ingredients/Bread';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        },
    }),
);

export type IngredientType = 'bacon' | 'cheese' | 'cucumber';

const ingredientsMap: { [key in IngredientType]: JSX.Element } = {
    bacon: <Bacon />,
    cheese: <Cheese />,
    cucumber: <Cucumber />,
};

interface IProps {
    ingredients: IngredientType[];
    onIngredientClick?: (ingredientIndex: number) => void;
}

const Burger = (props: IProps): JSX.Element => {
    const classes = useStyles();

    const { ingredients, onIngredientClick = () => null } = props;

    const IngredientsArray: JSX.Element[] = [];

    ingredients.forEach((ingredient, index) => {
        const ingredientComponent = (
            <div key={`${ingredient + index}`} onClick={() => onIngredientClick(index)}>
                {ingredientsMap[ingredient]}
            </div>
        );

        IngredientsArray.push(ingredientComponent);
    });

    return (
        <div className={classes.root}>
            {/* TOP BREAD */}
            <Bread />

            {/* INGREDIENTS */}
            {IngredientsArray.length > 0 ? (
                IngredientsArray
            ) : (
                <Typography color="primary" variant="h4" component="span">
                    No ingredients yet
                </Typography>
            )}

            {/* BOTTOM BREAD */}
            <Bread />
        </div>
    );
};

Burger.defaultProps = {
    onIngredientClick: () => null,
};

export default Burger;
