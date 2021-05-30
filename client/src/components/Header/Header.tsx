import React from 'react';
import { Button, createStyles, makeStyles, Theme, Typography, useTheme } from '@material-ui/core';
import { AccountCircleSharp } from '@material-ui/icons';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
// import constants from '../../common/constants';
import { StoreType } from '../../store';
// import { ReactComponent as Logo } from './burger_logo.svg';
import burgerLogo from './burger_logo.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
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
            marginRight: '0%',
            direction: 'ltr',
        },
        LogoStyle: {
            height: '64px',
            width: '64px',
        },
        LeftLogo: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
        },
        LogoTextStyle: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            marginLeft: '25px',
            alignItems: 'center',
            fontSize: '30px',
            fontWeight: 'bold',
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
                {/* BURGER LOGO */}
                <div className={classes.LeftLogo}>
                    <img src={burgerLogo} alt="LogoStyle" className={classes.LogoStyle} />
                    {/* BurgerBro */}
                    <Typography
                        style={{ color: theme.palette.primary.light }}
                        className={classes.LogoTextStyle}
                    >
                        BurgerBro
                    </Typography>
                </div>

                <div className={classes.buttonsCont}>
                    {/* HOME */}
                    <Button color="secondary" onClick={() => history.push('/')}>
                        <Typography style={{ color: theme.palette.primary.light }}>Home</Typography>
                    </Button>

                    {/* BURGERS LIST */}
                    <Button color="secondary" onClick={() => history.push('/list')}>
                        <Typography style={{ color: theme.palette.primary.light }}>
                            Burgers
                        </Typography>
                    </Button>

                    {/* BURGER CONSTRUCTOR */}
                    <Button color="secondary" onClick={() => history.push('/constructor')}>
                        <Typography style={{ color: theme.palette.primary.light }}>
                            Custom <br /> burger
                        </Typography>
                    </Button>

                    {/* ABOUT US */}
                    <Button color="secondary" onClick={() => history.push('/aboutUs')}>
                        <Typography style={{ color: theme.palette.primary.light }}>
                            ABOUT US
                        </Typography>
                    </Button>

                    {/* ACCOUNT */}
                    <Button
                        color="secondary"
                        onClick={() => {
                            history.push('/');
                            // eslint-disable-next-line no-alert
                            alert('in development');
                        }}
                    >
                        <AccountCircleSharp style={{ color: theme.palette.primary.light }} />
                    </Button>

                    {/* BASKET */}
                    <Button color="secondary" onClick={() => history.push('/basket')}>
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
