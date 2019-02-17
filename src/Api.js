import React,{Component} from 'react';

class Api extends Component {
  state = {
    provider_url : "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=",
    keyword: ''
  };

  // constructor() {
  //   super();
    // var list_items = '';
  // }


  initiateSearch = () => {
    const {provider_url,keyword} = this.state;
    if (keyword !== '') {
    const completeURL = provider_url+keyword;
    // console.log(completeURL);
    fetch(completeURL).then(
      response => response.json()
    ).then(
      response => {
        console.log("Populating results");
        this.list_items = response.map((item,index) => {
          return <li key={index}>{item}</li>;
        });
        this.setState({
          keyword: this.state.keyword
        });
      });
    }
  }

  updateKeyword = e => {
    this.setState({
      keyword: e.target.value
    });
  }

  render () {
    const containerStyling = {
      paddingTop: '50px'
    };
    return(
      <div className="container text-center" style={containerStyling}>
        <input type="text" name="keyword" value={this.state.keyword} onChange={this.updateKeyword}/>
        <button onClick={this.initiateSearch}>Search Wiki</button>
        <br/>
        <br/>
        <ul>
          {this.list_items}
          {this.bleh}
        </ul>
      </div>
    );
  }

}

export default Api;
