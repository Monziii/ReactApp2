import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>Welcome to Conservation Area Reservation System</h1>
        <p>Select a regional conservation area and book your time slot today!</p>
        <Link to="/reservation" className="homepage-link">Start Reservation</Link>
      </div>
    );
  }
}

export default HomePage;