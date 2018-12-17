import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './components/App/App';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  // 可以配置颜色,间距等等
  palette: {
    primary: { main: '#88c33b' }
  },
  typography: {
    useNextVariants: true,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
