import React from 'react';
import '../src/styles.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Users } from './pages/usersPage/index';
import { Albums } from './pages/albumsPage/index';
import { Posts } from './pages/postsPage/index';
import { Todos } from './pages/todosPage/index'
import { UserContextProvider } from './context/userContext';
import { Album } from './pages/albumsPage/album';

function App() {
  return (
      <UserContextProvider>
        <Router>
          <div className="App">
            <ul className='NavBar'>
              <li><a href='/albums'>Albums</a></li>
              <li><a href='/users'>Artist</a></li>
              <li><a href='/todos'>Todos</a></li>
              <li><a href='/posts'>Posts</a></li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/albums/album/:id" component={Album} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/todos" component={Todos} />
            <Route exact path="/posts" component={Posts} />
          </Switch>
        </Router>
      </UserContextProvider>
  );
}
export default App;