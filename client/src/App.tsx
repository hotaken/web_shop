import React, { useEffect } from 'react';

import Layout from './HOC/Layout/Layout';
import Routes from './Routes';
import mainBurger from './mainBurger.png';

const App = (): JSX.Element => {
    useEffect(() => {
        console.log('[App] componentDidMount');
    }, []);

    return (
        <div
            className="App"
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'bottom right',
                backgroundImage: `linear-gradient(rgba(255,255,255,0.5),
            rgba(255,255,255,0.5)), url(${mainBurger})`,
                backgroundSize: '40%',
            }}
        >
            <Layout>
                {/* Routes */}
                {Routes()}
            </Layout>
        </div>
    );
};

export default App;
