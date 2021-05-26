import React from 'react';
import { Button, createStyles, makeStyles, Theme, Typography, useTheme } from '@material-ui/core';
import { AccountCircleSharp, AddBoxOutlined, HomeOutlined } from '@material-ui/icons';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
// import constants from '../../common/constants';
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
            justifyContent: 'end',
            // width: constants.CONTENT_WIDTH,
            width: '100%',
            margin: '0 auto',
            padding: '10px 20px',
            boxSizing: 'border-box',
        },
        buttonsCont: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginLeft: '45%',
            marginRight: '15%',
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
                <div className={classes.buttonsCont}>
                    {/* HOME */}
                    <Button color="secondary" variant="contained" onClick={() => history.push('/')}>
                        <HomeOutlined style={{ color: theme.palette.primary.light }} />
                        <Typography style={{ color: theme.palette.primary.light }}>Home</Typography>
                    </Button>

                    {/* BURGERS LIST */}
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => history.push('/list')}
                    >
                        <ListOutlinedIcon style={{ color: theme.palette.primary.light }} />
                        <Typography style={{ color: theme.palette.primary.light }}>
                            Burgers
                        </Typography>
                    </Button>

                    {/* BURGER CONSTRUCTOR */}
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => history.push('/constructor')}
                    >
                        <AddBoxOutlined style={{ color: theme.palette.primary.light }} />
                        <Typography style={{ color: theme.palette.primary.light }}>
                            Custom <br /> burger
                        </Typography>
                    </Button>

                    {/* ABOUT US */}
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => history.push('/aboutUs')}
                    >
                        <Typography style={{ color: theme.palette.primary.light }}>
                            ABOUT US
                        </Typography>
                    </Button>

                    {/* ACCOUNT */}
                    <Button color="secondary" variant="contained" onClick={() => history.push('/')}>
                        <AccountCircleSharp style={{ color: theme.palette.primary.light }} />
                    </Button>

                    {/* BASKET */}
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => history.push('/basket')}
                    >
                        {ordersAmount}
                        <ShoppingCartOutlinedIcon style={{ color: theme.palette.primary.light }} />
                    </Button>
                </div>
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
