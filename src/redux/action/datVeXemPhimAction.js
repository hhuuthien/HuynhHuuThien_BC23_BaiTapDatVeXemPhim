import { SEAT_CLICKED } from "../type/datVeXemPhimType";

export const datGheAction = (seat) => {
  return {
    type: SEAT_CLICKED,
    seat,
  };
};
