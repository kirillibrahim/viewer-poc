// import React from 'react';
// import type { AppProps } from 'next/app';
// import { Provider } from 'react-redux';
// import initStore from '../redux/store';
// import 'antd/dist/antd.css';
// import '@glidejs/glide/dist/css/glide.core.min.css';
// import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.core.css';
// import '../style/global.css';

// function CustomApp({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={initStore}>
//       <>
//         <Component {...pageProps} />
//       </>
//     </Provider>
//   );
// }

// export default CustomApp;

import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
//import ThemeProvider from '../containers/ThemeProvider';
import initStore from '../redux/store';
import 'antd/dist/antd.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import '../style/global.css';
import Head from 'next/head';

class CustomApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Provider store={store}>
          {/* <ThemeProvider> */}
          <Component {...pageProps} />
          {/* </ThemeProvider> */}
        </Provider>
      </>
    );
  }
}

export default withRedux(initStore)(CustomApp);
