// *** NPM ***
import React from 'react';
import BurgerContainer from '../containers/BurgerContainer';

// *** OTHER ***
import { IRouterObject } from './index';

const index: IRouterObject = {
    name: 'home/index',
    path: '/',
    exact: true,
    RenderFn: (): JSX.Element => {
        return <BurgerContainer />;
    },
};

export default [index];
