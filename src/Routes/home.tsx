import React from 'react';
import { IRouterObject } from '.';

const index: IRouterObject = {
    name: 'home/index',
    path: '/',
    exact: true,
    RenderFn: (): JSX.Element => {
        return <h1>ANY TIME BURGERS ANY PLACE</h1>;
    },
};

export default [index];
