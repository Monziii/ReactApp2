import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ReservationPage.css";

class ReservationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArea: "",
      selectedTime: "",
      reservations: [],
      isTimeLocked: false,
    };
  }

  areas = [
    "Forest Reserve",
    "Wetland Sanctuary",
    "Mountain Park",
    "Desert Reserve",
  ];
  timeSlots = ["9:00 AM - 12:00 PM", "12:00 PM - 3:00 PM", "3:00 PM - 6:00 PM"];

  handleAreaChange = (event) => {
    this.setState({
      selectedArea: event.target.value,
      isTimeLocked: false, // Allow changing the time slot
    });
  };

  handleTimeChange = (event) => {
    this.setState({
      selectedTime: event.target.value,
      isTimeLocked: true, // Lock the time slot after selection
    });
  };

  handleSubmit = () => {
    const { selectedArea, selectedTime, reservations } = this.state;

    if (selectedArea && selectedTime) {
      // Check for duplicate reservation
      const isAlreadyReserved = reservations.some(
        (reservation) =>
          reservation.area === selectedArea && reservation.time === selectedTime
      );

      if (isAlreadyReserved) {
        alert(
          `The time slot ${selectedTime} for ${selectedArea} is already reserved!`
        );
      } else {
        // Add a new reservation
        this.setState({
          reservations: [
            ...reservations,
            { area: selectedArea, time: selectedTime },
          ],
          selectedArea: "",
          selectedTime: "",
          isTimeLocked: false,
        });
      }
    } else {
      alert("Please select both a conservation area and a time slot.");
    }
  };

  render() {
    const { selectedArea, selectedTime, reservations, isTimeLocked } =
      this.state;

    return (
      <div className="reservation-page">
        <div className="top-navigation">
          <Link to="/" className="home-button">
            Home
          </Link>
        </div>
        <h2>Book Your Visit</h2>
        <p>Choose a conservation area and an available time slot.</p>
        <div className="form-group">
          <label htmlFor="area-select">Select Conservation Area:</label>
          <select
            id="area-select"
            value={selectedArea}
            onChange={this.handleAreaChange}
          >
            <option value="">-- Select an Area --</option>
            {this.areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="time-select">Select Time Slot:</label>
          <select
            id="time-select"
            value={selectedTime}
            onChange={this.handleTimeChange}
            disabled={isTimeLocked} // Disable selection
          >
            <option value="">-- Select a Time Slot --</option>
            {this.timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <button className="submit-button" onClick={this.handleSubmit}>
          Confirm Reservation
        </button>

        <h3>Your Reservations</h3>
        <table className="reservation-table">
          <thead>
            <tr>
              <th>Conservation Area</th>
              <th>Time Slot</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.area}</td>
                <td>{reservation.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="footer">
          Made by <strong>Mina Bekhit</strong>
        </footer>
      </div>
    );
  }
}

export default ReservationPage;
