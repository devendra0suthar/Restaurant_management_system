import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from 'react-spinners';
// Components
import Student from "../../components/Restaurant/Restaurant";
import Navbar from '../../Layout/NavBar/NavBar'


class Home extends Component {
  state = {
    data: null,
    allRestaurent: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const students = await axios("/api/restaurant/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeStudent = async id => {
    try {
      const studentRemoved = await axios.delete(`/api/restaurant/${id}`);
      const students = await axios("/api/restaurant/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

 
  render() {
    let students;

    if (this.state.data)
      students =
        this.state.data.restaurant &&
        this.state.data.restaurant.map(student => (
          <Student key={student._id} {...student} removeStudent={this.removeStudent} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.restaurant.length)
        return <div><Navbar/><h1 className="No-Students">No students!</h1></div>;

    return (
      <div>
      <Navbar/>
      <div className="Table-Wrapper">
        <h1>Restaurant:</h1>
    
        <table className="Table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default Home;
