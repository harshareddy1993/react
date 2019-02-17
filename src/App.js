import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Api from './Api';

class App extends Component {
  state = {
    inflowMetrics: [
      {
        'product': 'SDP',
        'inflow': 4
      },
      {
        'product': 'CCN',
        'inflow': 2
      },
      {
        'product': 'OCC',
        'inflow': 2
      },
      {
        'product': 'LUVA',
        'inflow': 1
      },
      {
        'product': 'MM',
        'inflow': 5
      }
    ]
  };

  removeMetrics = (index) => {
    const {inflowMetrics} = this.state;

    this.setState({
      inflowMetrics: inflowMetrics.filter((data,i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = (metric) => {
    this.setState({
      inflowMetrics: [...this.state.inflowMetrics,metric]
    })
  };

  render() {
    return(
      <div className="container">
        <Table inflowMetrics={this.state.inflowMetrics} removeMetrics={this.removeMetrics} />
        <Form addMetrics={this.handleSubmit}/>
        <Api />
      </div>
    );
  }
}

export default App;
