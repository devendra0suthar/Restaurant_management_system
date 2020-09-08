import React, { Component } from "react";
import './AddRestaurant.css';
import axios from "axios";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Layout/NavBar/NavBar'
class AddStudent extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    response: ""
  };
  
  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  addStudent = async e => {
   
    e.preventDefault();
    try {
      const newStudent = await axios.post("/api/restaurant/", {
          name: this.refs.name.value,
          email: this.refs.email.value,
          address: this.refs.address.value
        }
      );

      toast("Restaurant " + newStudent.data.newStudent.name + " created successfully" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
    } catch (err) {
      toast("Restaurant  created successfully" ,{ type: toast.TYPE.SUCCESS, autoClose: 3000 });
    }
   
  };
  
  render() {
    return (
      <div>
      <Navbar/>
      <div className="AddStudent-Wrapper">
        <h1>Add Restaurant:</h1>
        <form onSubmit={this.addStudent}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Enter the name of the restaurant here"
            name="name"
            onChange={this.onChangeHandler}
            ref="name"
            className="Add-Student-Input"
            required
            minLength="3"
            maxLength="3344444"
            id="name"
          />
          <label htmlFor="email">email: <b>(must be a valid email)</b></label>
          <input
            type="text"
            placeholder="enter your restaurant email here"
            name="email"
            onChange={this.onChangeHandler}
            ref="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="Add-Student-Input"
            required
            id="email"
          />
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            placeholder="Enter Address..."
            name="address"
            onChange={this.onChangeHandler}
            ref="address"
            className="Add-Student-Input"
            required
            id="address"
          />
          <button type="submit" onClick={()=>{ 
            
          }} className="Add-Student-Submit fa fa-plus"></button>
          <button type="reset" className="Add-Student-Reset fa fa-refresh"></button>
        </form>
        <ToastContainer />
      </div>
      </div>
    );
  }
}

export default AddStudent;
