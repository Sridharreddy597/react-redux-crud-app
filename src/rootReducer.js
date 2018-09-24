import { crudReducer } from "./crud-app/crud-app-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  crudReducer: crudReducer
});

// const intialState = {
//   persons: [
//     { firstName: "Jeff", lastName: "Bezos" },
//     { firstName: "Jeff", lastName: "Bezos" },
//     { firstName: "Bill", lastName: "Gates" },
//     { firstName: "Warren", lastName: "Buffett" },
//     { firstName: "Bernard", lastName: "Arnault" },
//     { firstName: "Mark", lastName: "Zuckerberg" },
//     { firstName: "Amancio", lastName: "Ortega" },
//     { firstName: "Carlos", lastName: "Slim Helu" },
//     { firstName: "Charles", lastName: "David Koch" }
//   ]
// };

// const rootReducer = (state = intialState, action) => state;
// export default rootReducer;
