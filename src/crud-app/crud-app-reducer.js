import { ADD_PERSON } from "./add-person/add-person-action";
import { DELETE_PERSON } from "./crud-app-action";

export const intialState = {
  persons: [
    { id: 1, firstName: "Jeff", lastName: "Bezos", isInUpdateMode: false },
    { id: 2, firstName: "Jeff", lastName: "Bezos", isInUpdateMode: false },
    { id: 3, firstName: "Bill", lastName: "Gates", isInUpdateMode: false },
    { id: 4, firstName: "Warren", lastName: "Buffett", isInUpdateMode: false },
    { id: 5, firstName: "Bernard", lastName: "Arnault", isInUpdateMode: false },
    { id: 6, firstName: "Mark", lastName: "Zuckerberg", isInUpdateMode: false },
    { id: 7, firstName: "Amancio", lastName: "Ortega", isInUpdateMode: false },
    {
      id: 8,
      firstName: "Carlos",
      lastName: "Slim Helu",
      isInUpdateMode: false
    },
    {
      id: 9,
      firstName: "Charles",
      lastName: "David Koch",
      isInUpdateMode: false
    }
  ]
};

export const crudReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      let id = state.persons.length + 1;
      const person = action.person;
      person.id = id;
      //console.log("crud reducer  action :: after adding :: ", person);
      return { ...state, persons: [...state.persons, action.person] };

    case DELETE_PERSON:
      const persons = state.persons.filter(p => p.id !== action.person.id);
      //console.log("crud reducer  action :: after adding :: ", person);
      return { ...state, persons: [...persons] };
    default:
      return state;
  }
};
