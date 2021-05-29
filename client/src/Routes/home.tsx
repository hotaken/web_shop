import React from 'react';
import { IRouterObject } from '.';
import HomePage from '../components/HomePage/HomePage';

const index: IRouterObject = {
    name: 'home/index',
    path: '/',
    exact: true,
    RenderFn: (): JSX.Element => {
        return <HomePage />;
    },
};

export default [index];
