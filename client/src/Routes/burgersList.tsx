import React from 'react';
import { IRouterObject } from '.';
import BurgerList from '../containers/BurgerList';

const index: IRouterObject = {
    name: 'list/index',
    path: '/list',
    exact: true,
    RenderFn: (): JSX.Element => {
        // return <h1>Burger list</h1>;
        return <BurgerList />;
    },
};

export default [index];
