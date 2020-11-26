import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import FormGenerator from './components/FormGenerator';
import FormCreated from './components/FormCreated';
import FormInfo from './components/FormInfo';

import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={FormGenerator} />
          <Route path="/form-to-fill" component={FormCreated} />
          <Route path="/form-filled" component={FormInfo} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
