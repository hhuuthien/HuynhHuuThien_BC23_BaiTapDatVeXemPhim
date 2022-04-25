import React, { Component } from "react";

export default class KetQuaChonGhe extends Component {
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
          <tbody>
            <tr>
              <td>G12</td>
              <td>75000</td>
              <td>
                <button className="btn btn-danger">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}>Tổng tiền</td>
              <td>65000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
