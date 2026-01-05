import React, { Component } from "react";
import "./usercard.css";
class Usercard extends Component {
  render() {
    return (
      <>
        <div className="user-card">
          <img src="https://images6.alphacoders.com/729/thumb-350-729075.webp" />
          <button>Save</button>
          <h3>This is test</h3>
        </div>
      </>
    );
  }
}
export default Usercard;