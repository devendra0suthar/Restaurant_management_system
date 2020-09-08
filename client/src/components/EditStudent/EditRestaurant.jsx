import React, { Component } from "react";
import './EditRestaurant.css';
import axios from "axios";
import { withRouter } from 'react-router'
import {toast, ToastContainer} from "react-toastify";
import NavBar from "../../Layout/NavBar/NavBar";

class EditRestaurant extends Component {

  state = {
    id: '',
    name: "",
    email: "",
    address: "",
    response: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });
  
  async componentDidMount() {
    try {
    let search =  this.props.location.search,
      id = search.substring(1, search.length);
    const updateStudent = await axios(`/api/restaurant/${id}`);
    const { name, email, address } = updateStudent.data.restaurant;
    this.setState({ id, name, email, address  });
    console.log(name)
    } catch (err) {
      this.setState({ response: "Restaurant not found!" })
    }
  };
  
  updateStudentHandler = async (e) => {
    e.preventDefault();
    try {
      const student = await axios.put(`/api/restaurant/${this.state.id}`, {
        name: this.refs.name.value,
        email: this.refs.email.value,
        address: this.refs.address.value
      });
      toast(student.data.message ,{ type: toast.TYPE.INFO, autoClose: 3000 });

    } catch (err) {
      toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
    }

  };

  render() {
    if (this.state.response === "Student not found!")
      return <h1>Student not found!</h1>
    return (
      <div>
        <NavBar />
      <div className="Edit-Student-Wrapper">
        <h1>Edit page</h1>
        <form onSubmit={this.updateStudentHandler}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name..."
            value={ this.state.name }
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            required
            className="Edit-Student-Input"
            id="name"
          />
          <label htmlFor="email">Email: <b>(must be a valid email)</b></label>
          <input
            type="email"
            placeholder="Enter your email here"
            value={ this.state.email }
            name="email"
            required
            onChange={this.onChangeHandler}
            ref="email"
            className="Edit-Student-Input"
            id="email"
          />
          <label htmlFor="address">Enrollement Number: </label>
          <input
            type="text"
            placeholder="Enter the student's enrollment number"
            value={ this.state.address }
            name="address"
            required
            onChange={this.onChangeHandler}
            ref="address"
            className="Edit-Student-Input"
            id="address"
          />
          <button type="submit" className="Edit-Student-Submit fa fa-pencil"></button>
        </form>
        <ToastContainer />
      </div>
      </div>
    );
  }
}

export default withRouter(EditRestaurant);
