const INITAIAL_STATE = {
  user: {
    name: "admin",
    password: "admin",
  },
  enteredValue: {
    name: "",
    password: "",
  },
};

export const loginReducer = (state = INITAIAL_STATE, action) => {
  switch (action.type) {
    case "inputName":
      return {
        ...state,
        enteredValue: {
          name: action.value,
          password: state.enteredValue.password,
        },
      };

    case "inputPassword":
      return {
        ...state,
        enteredValue: {
          name: state.enteredValue.name,
          password: action.value,
        },
      };

    case "logout":
      console.log("logout");
      return {
        ...state,
        user: {
          name: state.user.name,
          password: state.user.password,
          token: "",
        },
      };

    case "loginHandler": {
      const { user, enteredValue } = state;

      if (
        user.name === enteredValue.name &&
        user.password === enteredValue.password
      ) {
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

    default:
      return state;
  }
};
