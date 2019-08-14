import React, { Component } from "react";
import ReactDOM from "react-dom";
 
class FormComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formControls: {
        email: {
          value: ''
        },
        name: {
          value: ''
        },
        password: {
          value: ''
        }
    }
    }
  }
  
  changeHandler = event => {
    
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
        ...this.state.formControls[name],
        value
      }
    }
    });
  }

  render () {
    return (
      <form>
      <label>Email</label>  
      <input type="email" 
             name="email" 
             value={this.state.formControls.email.value} 
             onChange={this.changeHandler} 
      />
      <label>Name</label>
      <input type="text" 
             name="name" 
             value={this.state.formControls.name.value} 
             onChange={this.changeHandler} 
      />
  <label>Password</label>
      <input type="password" 
             name="password" 
             value={this.state.formControls.password.value} 
             onChange={this.changeHandler} 
      />

  </form> 
    );        
  }
}

export default FormComponent;

const rootElement = document.getElementById("root");
ReactDOM.render(<FormComponent />, rootElement);
