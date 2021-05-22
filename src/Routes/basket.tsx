import React from 'react';
import { IRouterObject } from '.';

const index: IRouterObject = {
    name: 'basket/index',
    path: '/basket',
    exact: true,
    RenderFn: (): JSX.Element => {
        return <h1>Basket</h1>;
    },
};

export default [index];
