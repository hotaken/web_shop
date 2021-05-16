import React from 'react';
import { makeStyles } from '@material-ui/core';

import constants from '../../common/constants';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
    },
    content: {
        flex: '1',
        width: constants.CONTENT_WIDTH,
        margin: '0 auto',
    },
});

interface IProps {
    children: JSX.Element;
}

const Layout = (props: IProps): JSX.Element => {
    const { children } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />

            <main className={classes.content}>
                {/* ROUTES */}
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
