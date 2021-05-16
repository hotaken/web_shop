// *** NPM ***
import React from 'react';

// *** OTHER ***
import { IRouterObject } from './index';

const index: IRouterObject = {
    name: 'home/index',
    path: '/',
    exact: true,
    RenderFn: (): JSX.Element => {
        return <h1>Home</h1>;
    },
};

export default [index];
