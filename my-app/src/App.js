import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      helloObject: 0,
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
    this.setState({helloObject: 1})
  }

  render() {
    return (
      <div className="App">
        my first app
        <Projects test = "this is the test property"/>
        <Projects projects = {this.state.projects}/>
        <br/>
        <AddProject/>
      </div>
    );
  }
}

export default App;
