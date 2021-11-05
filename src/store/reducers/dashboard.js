import data from "../../components/dashboard/data/stationData";

const INITAIAL_STATE = {
  data,
};

export const dashboardReducer = (state = INITAIAL_STATE, action) => {
  switch (action.type) {
    case "selectStation":
      console.log(state);
      let itemId = Number.parseInt(action.playload.id);

      let updatedData = state.data.map((item) => {
        if (item.id === itemId) {
          item.isChecked = !item.isChecked;
        }
        return { ...item };
      });

      return {
        ...state,
        data: updatedData,
      };

    default:
      return state;
  }
};
