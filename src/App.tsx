import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './HOC/Layout/Layout';

const App = (): JSX.Element => {
    useEffect(() => {
        console.log('[App] componentDidMount');
    }, []);

    return (
        <div className="App">
            <Layout>
                <>
                    <h1>Content</h1>
                    <Switch>
                        <Route path="/" exact>
                            <h1>Home</h1>
                        </Route>
                        <Route path="/basket" exact>
                            <h1>Basket</h1>
                        </Route>
                        <Route path="/*">
                            <h1>Not found</h1>
                        </Route>
                    </Switch>
                </>
            </Layout>
        </div>
    );
};

export default App;
