import React, { Component } from "react";
import "./BaiTapDatVeXemPhim.css";
import Rap from "./Rap.jsx";
import KetQuaChonGhe from "./KetQuaChonGhe.jsx";

export default class BaiTapDatVeXemPhim extends Component {
  render() {
    return (
      <div className="app">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <Rap />
              </div>
              <div className="col-4">
                <KetQuaChonGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
