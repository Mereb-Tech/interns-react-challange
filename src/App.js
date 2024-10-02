import React from 'react';
import { Provider } from 'react-redux';
import { store } from './api/store';
import ActorList from './components/ActorList';

// import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ActorList />
      </div>
    </Provider>
  );
}

export default App;


