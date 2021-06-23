import { HashRouter ,Switch,Route,Redirect} from 'react-router-dom';
import CallPage from './views/callPage';
import HomePage from './views/homePage';

export default function App() {
    return (
      <HashRouter>
        <div className="App">

            <Switch>
              <Route exact path='/' component={() => <HomePage/>} />
              <Route exact path='/home' component={() => <HomePage/>} />
              <Route exact path='/call' component={() => <CallPage/>} />
              <Redirect to='/'/>
            </Switch>
        </div>
      </HashRouter>
  
    ); 
}
