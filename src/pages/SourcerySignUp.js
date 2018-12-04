import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Congrats from './Congrats';
import axios from 'axios';

class SourcerySignUp extends Component {
  constructor() {
    super();

    this.state = {
        email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({

      [name]: value

    });
}

async handleSubmit(e) {
    e.preventDefault();

    //console.log('The form was submitted with the following data:');
    //console.log(this.state);
    let result = await axios.post('https://api-sourcery.herokuapp.com/addLead', this.state);
    console.log('RESULT: ', result);


}
  render() {
    return(

      <div className="FormCenter">
        < form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">Email</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Email Here" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="Formfield">
              <button className="FormField__Button mr-20" >Sign Up</button>
          </div>
        </form>
      </div>

    );

  }


}

export default SourcerySignUp;
