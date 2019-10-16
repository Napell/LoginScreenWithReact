import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form.js'

class App extends Component {
  render(){
    return (
       <div className="ui container" id="bodyContent">
         <Form />
     
       </div>
    );
  }

}
export default App;
