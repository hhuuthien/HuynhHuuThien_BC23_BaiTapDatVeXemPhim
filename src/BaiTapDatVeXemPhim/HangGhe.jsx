import React, { Component } from "react";

export default class HangGhe extends Component {
  renderSeats() {
    if (this.props.row.hang === "") {
      return this.props.row.danhSachGhe.map((seat, index) => {
        return (
          <button disabled className="rowNumber" key={index}>
            {seat.soGhe}
          </button>
        );
      });
    } else {
      return this.props.row.danhSachGhe.map((seat, index) => {
        if (seat.daDat === true) {
          return (
            <button disabled className="ghe gheDuocChon" key={index}>
              {seat.soGhe}
            </button>
          );
        } else {
          return (
            <button className="ghe" key={index}>
              {seat.soGhe}
            </button>
          );
        }
      });
    }
  }

  render() {
    return (
      <div className="rowSeats">
        <button disabled className="firstChar">
          {this.props.row.hang}
        </button>
        {this.renderSeats()}
      </div>
    );
  }
}
