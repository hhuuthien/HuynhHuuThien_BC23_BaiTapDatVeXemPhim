import React, { Component } from "react";

export default class Hang0 extends Component {
  render() {
    return this.props.data.danhSachGhe.map((seat, index) => {
      return (
        <button disabled className="rowNumber" key={index}>
          {seat.soGhe}
        </button>
      );
    });
  }
}
