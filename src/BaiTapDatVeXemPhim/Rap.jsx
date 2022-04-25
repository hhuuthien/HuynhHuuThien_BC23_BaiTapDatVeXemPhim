import React, { Component } from "react";
import data from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe.jsx";

export default class Rap extends Component {
  renderRows() {
    return data.map((row, index) => {
      return <HangGhe row={row} key={index} />;
    });
  }

  render() {
    return (
      <div className="cinema">
        <h3 className="title">Đặt vé xem phim</h3>
        <div className="screen">Màn hình</div>
        <div className="seats">{this.renderRows()}</div>
        <div className="type">
          <button className="ghe"></button>
          <span>Ghế chưa đặt</span>
          <button className="ghe gheDangChon"></button>
          <span>Ghế đang chọn</span>
          <button className="ghe gheDuocChon"></button>
          <span>Ghế đã đặt</span>
        </div>
      </div>
    );
  }
}
