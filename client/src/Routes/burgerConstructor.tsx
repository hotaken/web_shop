import React from 'react';
import { IRouterObject } from '.';
import BurgerContainer from '../containers/BurgerContainer';

const index: IRouterObject = {
    name: 'constructor/index',
    path: '/constructor',
    exact: true,
    RenderFn: (): JSX.Element => {
        return <BurgerContainer />;
    },
};

export default [index];
