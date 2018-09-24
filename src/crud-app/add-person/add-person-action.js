export const ADD_PERSON = "ADD_PERSON";

export const addPerson = person => {
  // console.log("addperson-action", person);
  return { type: ADD_PERSON, person: person };
};
