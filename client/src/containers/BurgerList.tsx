/* eslint-disable react/jsx-props-no-spreading */
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { IngredientType } from '../components/Burger/Burger';
import BurgerListElem from './BurgerListElem';

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
            marginBottom: '15px',
        },
        management: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginLeft: '5%',
            // width: '100%',
            marginBottom: '100px',
        },
    }),
);
type burgerType = { name: string; ingredients: IngredientType[]; description: string };

const BurgerList = (): JSX.Element => {
    const classes = useStyles();
    const [burgerList, setBurgerList] = useState<burgerType[]>([]);

    useEffect(() => {
        fetch('/api/getBurgerList?burger=All')
            .then((res) => res.json())
            .then((data) => {
                setBurgerList(data);
                console.log(data);
            });
    }, []);

    const burgerListOutput: JSX.Element[] = [];

    if (burgerList !== undefined && burgerList.length > 0) {
        burgerList.forEach((obj) => {
            const burgerOutput = (
                <BurgerListElem
                    key={obj.name}
                    name={obj.name}
                    ingredients={obj.ingredients}
                    description={obj.description}
                />
            );
            burgerListOutput.push(burgerOutput);
        });
    }
    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h1" className={classes.title}>
                Choose your burger
            </Typography>

            <div className={classes.management}>
                {burgerListOutput.length > 0 ? (
                    burgerListOutput
                ) : (
                    <Typography variant="h6" component="span" color="secondary">
                        Loading...
                    </Typography>
                )}
            </div>
        </div>
    );
};

export default BurgerList;
