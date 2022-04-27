import React, { Component } from "react";
import data from "../data/danhSachGhe.json";
import Hang0 from "./Hang0";
import HangGhe from "./HangGhe.jsx";

export default class Rap extends Component {
  renderRow0() {
    return <Hang0 data={data[0]} />;
  }

  renderRows() {
    return data
      .filter((element) => element.hang !== "")
      .map((row, index) => {
        return <HangGhe row={row} key={index} />;
      });
  }

  render() {
    return (
      <div className="cinema">
        <h3 className="title">Đặt vé xem phim</h3>
        <div className="screen">Màn hình</div>
        <div>{this.renderRow0()}</div>
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
