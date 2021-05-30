import React from 'react';
import { IRouterObject } from '.';
import AboutUs from '../components/AboutUs/AboutUs';

const index: IRouterObject = {
    name: 'aboutUs/index',
    path: '/aboutUs',
    exact: true,
    RenderFn: (): JSX.Element => {
        return <AboutUs />;
    },
};

export default [index];
