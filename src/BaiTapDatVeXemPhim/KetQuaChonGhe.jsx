import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/action/datVeXemPhimAction";

class KetQuaChonGhe extends Component {
  renderFooter() {
    let total = this.props.danhSachGheDat.reduce((total, ghe) => {
      return total + ghe.gia;
    }, 0);

    return (
      <tr>
        <td colSpan={3}>Tổng tiền: {total.toLocaleString()}</td>
      </tr>
    );
  }

  renderBody() {
    return this.props.danhSachGheDat.map((seat, index) => {
      return (
        <tr key={index}>
          <td>{seat.soGhe}</td>
          <td>{seat.gia.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.dispatch(huyGheAction(seat.soGhe));
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="result">
        <div className="title">Danh sách ghế bạn chọn</div>
        <table className="table table-bordered mt-5 text-white">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderBody()}</tbody>
          <tfoot>{this.renderFooter()}</tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    danhSachGheDat: rootReducer.datVeXemPhimReducer.danhSachGheDat,
  };
};

export default connect(mapStateToProps)(KetQuaChonGhe);
