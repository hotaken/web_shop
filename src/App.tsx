import React from 'react';

import Layout from './HOC/Layout/Layout';

const App = (): JSX.Element => {
    return (
        <div className="App">
            <Layout>
                <h1>Content</h1>
            </Layout>
        </div>
    );
};

export default App;
