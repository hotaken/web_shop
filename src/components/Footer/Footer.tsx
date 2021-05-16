import { Typography, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.palette.secondary.main,
            color: 'black',
            padding: '10px',
        },
    }),
);

const Footer = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>All Rights Reserved</Typography>
        </div>
    );
};

export default Footer;
