import React from 'react';
import '../src/styles.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UsersList } from './pages/usersPage/index';
import { Albums } from './pages/AlbomsPage/index';
import { Posts } from './pages/postsPage/index';
import { Todos } from './pages/todosPage/index'
import { UserContextProvider } from './context/userContext';



export const Routes = () => {
  return (
<div></div>
  )
}
function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
        <div className="App">
      <ul className='NavBar'>
        <li><a href='/albums'>albums</a></li>
        <li><a href='/users'>users</a></li>
        <li><a href='/todos'>todos</a></li>
        <li><a href='/posts'>posts</a></li>
      </ul>
    </div>
    <Switch>
        <Route exact path="/albums" component={ Albums }  />
        <Route exact path="/users" component={ UsersList } />
        <Route exact path="/todos" component={ Todos } />
        <Route exact path="/posts" component={ Posts } />
      </Switch>
        </Router>
      </UserContextProvider>
      </>
  );

  }

export default App;