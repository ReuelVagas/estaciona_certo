import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import store from './src/store/redux';
import Router from './src/router/router';
import { blue } from './src/themes';

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={blue}>
            <Router />
        </ThemeProvider>
    </Provider>
);

export default App;