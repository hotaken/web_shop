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
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            width: '800px',
        },
        amount: {
            marginTop: '10px',
        },
        deleteButton: {
            color: 'red',
            borderColor: 'red',
            marginTop: '10px',
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
            <Burger ingredients={ingredients} />

            <Typography className={classes.amount} variant="h6" component="span" color="secondary">
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
