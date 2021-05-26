import React from 'react';
import { IRouterObject } from '.';

const index: IRouterObject = {
    name: 'aboutUs/index',
    path: '/aboutUs',
    exact: true,
    RenderFn: (): JSX.Element => {
        return <h1>About us</h1>;
    },
};

export default [index];
