import * as React from 'react';
import Counter from './components/Counter';
import Profile from './components/Profile';
import TodoList from './components/TodoList';

class App extends React.Component {
  public render() {
      return (
          <div className="App">
              <Profile
                  name="Joeun"
                  job="Developer"
              />
              <Counter />
              <TodoList/>
          </div>
    );
  }
}

export default App;
