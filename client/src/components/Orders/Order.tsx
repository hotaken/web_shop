import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Burger, { IngredientType } from '../Burger/Burger';
import { StoreDispatchType } from '../../store';
import { deleteOrderAction, deleteOrderActionType } from '../../store/orders';

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
        amount: {
            marginTop: '10px',
        },
        deleteButton: {
            color: 'red',
            borderColor: 'red',
            marginTop: '10px',
        },
        downTab: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    }),
);

interface IProps {
    orderID: string;
    ingredients: IngredientType[];
    amount: number;
    deleteOrder: deleteOrderActionType;
}
const Order = (props: IProps): JSX.Element => {
    const classes = useStyles();

    const { orderID, amount, ingredients, deleteOrder } = props;

    return (
        <div className={classes.root}>
            <Burger ingredients={ingredients} heightElem="10px" />

            <div className={classes.downTab}>
                <Typography className={classes.amount} variant="h6" component="span">
                    Amount: {amount}
                </Typography>

                {/* DELETE BUTTON */}
                <Button
                    className={classes.deleteButton}
                    variant="outlined"
                    onClick={() => deleteOrder({ orderID })}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
};

// *** REDUX STORE ***
const mapDispatchToProps = (dispatch: StoreDispatchType) => {
    return {
        // orders
        deleteOrder: ({ orderID }: { orderID: string }) => dispatch(deleteOrderAction({ orderID })),
    };
};

export default connect(undefined, mapDispatchToProps)(Order);
