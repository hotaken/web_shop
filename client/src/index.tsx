import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
// primary main - header
// primary light - icons color
// secondary main - footer bg, buttons bg
// secondary light -

const theme = createMuiTheme({
    palette: {
        primary: { main: '#fc5404', light: '#132c33' },
        secondary: { main: '#d8e3e7', light: '#51c4d3' },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={1}>
                    <Router>
                        <App />
                    </Router>
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
