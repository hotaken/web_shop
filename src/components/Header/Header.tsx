import React from 'react';
import { Button, createStyles, makeStyles, Theme, Typography, useTheme } from '@material-ui/core';
import { HomeOutlined, ShoppingBasketOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import constants from '../../common/constants';
import { StoreType } from '../../store';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.primary.main,
            width: '100%',
        },
        content: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: constants.CONTENT_WIDTH,
            margin: '0 auto',
            padding: '10px 20px',
            boxSizing: 'border-box',
        },
    }),
);

interface IProps {
    orders: StoreType['orders'];
}

const Header = (props: IProps): JSX.Element => {
    const classes = useStyles();

    const { orders } = props;

    const theme = useTheme();
    const history = useHistory();

    let ordersAmount = null;
    if (Object.keys(orders).length > 0) {
        ordersAmount = (
            <Typography variant="body1" component="span" color="primary">
                {Object.keys(orders).length}
                &nbsp; &nbsp;
            </Typography>
        );
    }

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                {/* HOME */}
                <Button color="secondary" variant="contained" onClick={() => history.push('/')}>
                    <HomeOutlined style={{ color: theme.palette.primary.light }} />
                </Button>
                {/* BASKET */}
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => history.push('/basket')}
                >
                    {ordersAmount}
                    <ShoppingBasketOutlined style={{ color: theme.palette.primary.light }} />
                </Button>
            </div>
        </div>
    );
};

const mapStateToProps = (state: StoreType) => {
    return {
        orders: state.orders,
    };
};

export default connect(mapStateToProps)(Header);
