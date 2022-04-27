import { SEAT_CLICKED, SEAT_REMOVED } from "../type/datVeXemPhimType";

const DEFAULT_STATE = {
  danhSachGheDat: [],
};

export const datVeXemPhimReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SEAT_CLICKED: {
      let ds = [...state.danhSachGheDat];

      let gheTrongDSIndex = ds.findIndex((ghe) => ghe.soGhe === action.seat.soGhe);
      if (gheTrongDSIndex === -1) {
        ds.push(action.seat);
      } else {
        ds.splice(gheTrongDSIndex, 1);
      }

      state.danhSachGheDat = ds;

      return { ...state };
    }

    case SEAT_REMOVED: {
      let ds = [...state.danhSachGheDat];

      let gheTrongDSIndex = ds.findIndex((ghe) => ghe.soGhe === action.soGhe);
      ds.splice(gheTrongDSIndex, 1);

      state.danhSachGheDat = ds;

      return { ...state };
    }

    default:
      return { ...state };
  }
};
