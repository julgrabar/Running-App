import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import App from './components/App';

const queryClient = new QueryClient();

const theme = {
  colors: {
    mainFontColor: '#ffffff',
    secondaryFontColor: '#1D1617',
    gradient: 'linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)',
  },
  loaderElement:
    'no-repeat radial-gradient(circle closest-side, #92A3FD 90%, #0000)',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter basename="/Running-App/">
            <App />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
