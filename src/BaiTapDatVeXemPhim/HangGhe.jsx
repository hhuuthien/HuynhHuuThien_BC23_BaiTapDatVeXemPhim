import React, { Component } from "react";

export default class HangGhe extends Component {
  renderSeats() {
    let danhSachGhe = this.props.row.danhSachGhe;
    return danhSachGhe.map((seat, index) => {
      return (
        <button className="ghe" key={index}>
          {seat.soGhe}
        </button>
      );
    });
  }

  render() {
    return <div className="rowSeats">{this.renderSeats()}</div>;
  }
}
