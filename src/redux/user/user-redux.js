const Initial_State = {
  currentUser: null,
};

const userRedux = (state = Initial_State, action) => {
  switch (action.type) {
    case "Set_Current_User":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userRedux;
