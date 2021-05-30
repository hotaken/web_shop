import React from 'react';
import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import mainBurger from './AboutUsBurger.png';

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
            justifyContent: 'space-between',
            // width: constants.CONTENT_WIDTH,

            height: '100%',
            width: '100%',
            // margin: '0 auto',
            // padding: '10px 20px',
            boxSizing: 'border-box',
        },

        mainText: {
            fontSize: '30px',
            fontWeight: 'bold',
        },

        mainT: {
            display: 'flex',
            flexDirection: 'column',
            // paddingRight: '10%',
            // marginRight: '5%',
            marginLeft: '8%',
            marginTop: '5%',
        },
        mainImage: {
            marginRight: '10%',
            // width: '200%',
            // height: '70%',
        },

        amogus: {
            display: 'flex',
            flexDirection: 'row',

            marginRight: '10%',
            marginTop: '5%',

            fontSize: '30px',
            fontWeight: 'bold',
        },
    }),
);

const AboutUs = (): JSX.Element => {
    const classes = useStyles();

    const history = useHistory();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div className={classes.mainT}>
                    <Typography className={classes.mainText}>
                        Every day, hundreds of thousands of people need to eat quickly, tasty and
                        high-quality. Therefore, we are launching our network of burger clubs, with
                        a distinctive feature, the client will have the opportunity to assemble a
                        burger on his own from scratch. We focus on the highest quality ingredients
                        at an affordable price. We are waiting for you in our beautiful burger club.
                    </Typography>
                    <Typography className={classes.amogus}>
                        Contact us: &nbsp;
                        <a href="mailto:asoldatov@lab-code.com">asoldatov@lab-code.com</a>
                    </Typography>
                </div>

                <div className={classes.mainImage}>
                    <img
                        src={mainBurger}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
