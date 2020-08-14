import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import createLoading from 'dva-loading';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { injectIntl, IntlProvider, FormattedRelative, useIntl } from 'react-intl';
import Home from './pages/Home';

const rootRouter = [
  { path: '/about', exact: true, component: Home },
  { path: '/', exact: true, component: ()=> 'Home2' },
  { path: '/dasbashd', exact: true, component: ()=> 'Home3' }
];


const Router = () => (
  <IntlProvider locale='en'>
      <BrowserRouter>
        <div className="mian-content">
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于我们</Link></li>
            <li><Link to="/dasbashd">个人主页</Link></li>
          </ul>
          <Switch>
            {
              rootRouter.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  exact={item.exact}
                  component={item.component}
                />))
              }
            <Route component={() => '404页面'} />
          </Switch>
        </div>
      </BrowserRouter>
    </IntlProvider>
  )

const app = dva({
  history: createBrowserHistory()
});

app.router(Router)
app.use(createLoading());
app.start('#root')


// ReactDOM.render(
//   <Example />,
//   document.getElementById('root'),
// );