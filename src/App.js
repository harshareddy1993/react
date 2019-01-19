import React, {Component} from 'react';
import Table from './Table';
import './App.css';

class App extends Component {
  render(){
    const characterData = [
      {
        'name':'Kevin',
        'job':'Chauffeur'
      },
      {
        'name':'Tom',
        'job':'Chef'
      },
      {
        'name':'Stuart',
        'job':'Plumber'
      },
      {
        'name':'Bob',
        'job':'Builder'
      }
    ];
    const characterHeader = ["Name","Job"];
    return <Table characterHeader={characterHeader} characterData={characterData}/>;
  }
}

export default App;