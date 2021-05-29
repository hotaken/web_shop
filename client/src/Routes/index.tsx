import React from 'react';
import { Switch, Route } from 'react-router-dom';

import homeRouter from './home';
import burgerListRouter from './burgersList';
import burgerConstructorRouter from './burgerConstructor';
import aboutUsRouter from './aboutUs';
import basketRouter from './basket';

export interface IRouterObject {
    name: string;
    path: string;
    exact: boolean;
    RenderFn: () => JSX.Element;
}

export const allRoutes = [
    ...homeRouter,
    ...burgerListRouter,
    ...burgerConstructorRouter,
    ...aboutUsRouter,
    ...basketRouter,
];

const Routes = (): JSX.Element => {
    return (
        <Switch>
            {/* ALL ROUTES */}
            {allRoutes.map(({ name, path, exact, RenderFn }) => (
                <Route exact={exact} path={path} key={name} render={() => <RenderFn />} />
            ))}

            {/* NOT FOUND */}
            <Route render={() => <h1>Not Found</h1>} />
        </Switch>
    );
};

export default Routes;
