import { SEAT_CLICKED } from "../type/datVeXemPhimType";
import { SEAT_REMOVED } from "../type/datVeXemPhimType";

export const datGheAction = (seat) => {
  return {
    type: SEAT_CLICKED,
    seat,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: SEAT_REMOVED,
    soGhe,
  };
};
