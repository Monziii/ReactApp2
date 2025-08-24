import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/", element: React.createElement(HomePage) }),
      React.createElement(Route, { path: "/reservation", element: React.createElement(ReservationPage) }),
      React.createElement(Route, { path: "/confirmation", element: React.createElement(ConfirmationPage) })
    )
  );
}

export default App;