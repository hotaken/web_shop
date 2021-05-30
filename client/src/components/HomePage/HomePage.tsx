import React from 'react';
import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import mainBurger from './mainBurger.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
        content: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            // width: constants.CONTENT_WIDTH,

            height: '100%',
            width: '100%',
            // margin: '0 auto',
            // padding: '10px 20px',
            boxSizing: 'border-box',
        },

        mainText1: {
            fontSize: '75px',
            fontWeight: 'bold',
        },
        mainText2: {
            fontSize: '150px',
            fontWeight: 'bold',
            color: '#F47500',
            marginTop: '-8%',
        },
        mainText3: {
            fontSize: '75px',
            fontWeight: 'bold',
            marginTop: '-8%',
        },
        mainText: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            marginTop: '8%',
            marginLeft: '5%',
        },
        mainButton: {
            fontWeight: 'bold',
            marginTop: '3%',
            backgroundColor: '#F47500',
            width: '60%',
            height: '70px',
            borderRadius: '40px',
            borderColor: '#F47500',
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                borderColor: '#F47500',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#F47500',
                borderColor: '#F47500',
            },
            '&:hover': {
                backgroundColor: '#F47500',
                boxShadow: 'none',
                borderColor: '#F47500',
            },
        },
        blackRect: {
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            width: '100%',
            opacity: '0.85',
            clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 20% 100%)',
        },

        mainCircle: {
            backgroundColor: '#F47500',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            width: '40%',
            height: '40%',
            marginRight: '-40%',
            marginLeft: '10%',
            marginTop: '12%',

            borderRadius: '50%',
            border: '30px solid white',

            zIndex: 1,
        },
        mainImage: {
            position: 'absolute',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            width: '50%',
            height: '50%',
            marginLeft: '38%',
            zIndex: 2,
            marginTop: '8%',
        },
    }),
);

const HomePage = (): JSX.Element => {
    const classes = useStyles();

    const history = useHistory();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.mainText}>
                    <Typography className={classes.mainText1}>ANY TIME</Typography>
                    <Typography className={classes.mainText2}>BURGERS</Typography>
                    <Typography className={classes.mainText3}>ANY PLACE</Typography>
                    <Button
                        variant="outlined"
                        className={classes.mainButton}
                        color="primary"
                        onClick={() => history.push('/list')}
                    >
                        <Typography
                            style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}
                        >
                            TRY OUT
                        </Typography>
                    </Button>
                </div>
                <div className={classes.mainCircle} />
                <div className={classes.mainImage}>
                    <img
                        src={mainBurger}
                        alt=""
                        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className={classes.blackRect} />
            </div>
        </div>
    );
};

export default HomePage;
