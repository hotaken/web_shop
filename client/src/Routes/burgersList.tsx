import React from 'react';
import { IRouterObject } from '.';

const index: IRouterObject = {
    name: 'list/index',
    path: '/list',
    exact: true,
    RenderFn: (): JSX.Element => {
        return <h1>Burger list</h1>;
    },
};

export default [index];
