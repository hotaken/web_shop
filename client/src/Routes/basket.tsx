import React from 'react';
import { IRouterObject } from '.';
import Orders from '../components/Orders/Orders';

const index: IRouterObject = {
    name: 'basket/index',
    path: '/basket',
    exact: true,
    RenderFn: (): JSX.Element => {
        return <Orders />;
    },
};

export default [index];
