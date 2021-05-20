import React, { useEffect } from 'react';

import Layout from './HOC/Layout/Layout';
import Routes from './routes';

const App = (): JSX.Element => {
    useEffect(() => {
        console.log('[App] componentDidMount');
    }, []);

    return (
        <div className="App">
            <Layout>
                {/* Routes */}
                {Routes()}
            </Layout>
        </div>
    );
};

export default App;
