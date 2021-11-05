import { createStore } from "redux";
import data from "../components/dashboard/data/stationData";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

import rootReducer from "./reducers/index";

const persistConfig = {
  key: "persistKey",
  storage,
};

const INITAIAL_STATE = {
  user: {
    name: "admin",
    password: "admin",
  },
  enteredValue: {
    name: "",
    password: "",
  },
  data,
};

const reducer = (state = INITAIAL_STATE, action) => {
  if (action.type === "selectStation") {
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
  }

  if (action.type === "inputName") {
    return {
      ...state,
      enteredValue: {
        name: action.value,
        password: state.enteredValue.password,
      },
    };
  }

  if (action.type === "inputPassword") {
    return {
      ...state,
      enteredValue: {
        name: state.enteredValue.name,
        password: action.value,
      },
    };
  }

  if (action.type === "loginHandler") {
    const { user, enteredValue } = state;

    if (
      user.name === enteredValue.name &&
      user.password === enteredValue.password
    ) {
      console.log(state);
      return {
        ...state,
        user: {
          name: state.user.name,
          password: state.user.password,
          token: Math.random(),
        },
      };
    }
  }

  if (action.type === "logout") {
    return {
      ...state,
      user: {
        name: state.user.name,
        password: state.user.password,
        token: "",
      },
    };
  }

  return state;
};

const PersistReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(PersistReducer);

const persisstore = persistStore(store);

export default store;
export { persisstore };
