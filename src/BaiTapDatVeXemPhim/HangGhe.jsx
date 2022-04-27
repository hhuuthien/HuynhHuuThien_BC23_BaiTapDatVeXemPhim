import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/action/datVeXemPhimAction";

class HangGhe extends Component {
  renderSeats() {
    return this.props.row.danhSachGhe.map((seat, index) => {
      if (seat.daDat === true) {
        // Nếu là cam
        return (
          <button disabled className="ghe gheDuocChon" key={index}>
            {seat.soGhe}
          </button>
        );
      } else {
        // Không phải cam --> xanh hay trắng
        let cssDangChon = "";
        let gheDangChon = this.props.danhSachGheDat.find((ghe) => ghe.soGhe === seat.soGhe);
        if (gheDangChon) cssDangChon = "gheDangChon";

        return (
          <button
            className={`ghe ${cssDangChon}`}
            key={index}
            onClick={() => {
              this.props.dispatch(datGheAction(seat));
            }}
          >
            {seat.soGhe}
          </button>
        );
      }
    });
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

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDat: rootReducer.datVeXemPhimReducer.danhSachGheDat,
  };
};

export default connect(mapStateToProps)(HangGhe);
