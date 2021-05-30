import React, { useEffect, useState } from 'react';
import { Button, createStyles, makeStyles, Theme, Typography, useTheme } from '@material-ui/core';
import { AccountCircleSharp } from '@material-ui/icons';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
// import constants from '../../common/constants';
import { StoreType } from '../../store';
// import { ReactComponent as Logo } from './burger_logo.svg';
import burgerLogo from './burger_logo.png';
import { pricingType } from '../../containers/BurgerContainer';

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
    const [priceList, setPriceList] = useState<pricingType>();

    useEffect(() => {
        fetch('/api/getIngredientPrices')
            .then((res) => res.json())
            .then((data) => {
                setPriceList(data);
                console.log(data);
            });
    }, []);
    let ordersAmount = null;
    console.log(orders);
    if (priceList !== undefined && Object.keys(orders).length > 0) {
        const values = Object.values(orders);
        let allSumm = 0;
        for (let i = 0; i < values.length; i += 1) {
            let summ = 0;
            for (let j = 0; j < values[i].ingredients.length; j += 1) {
                summ += priceList[values[i].ingredients[j]];
            }
            allSumm += summ * values[i].amount;
        }
        ordersAmount = (
            <Typography variant="body1" component="span" color="primary">
                {allSumm / 100} $ &nbsp; &nbsp;
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
