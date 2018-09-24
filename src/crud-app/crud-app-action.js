export const ADD_PERSON = "ADD_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";

export const deletePerson = person => {
  // console.log("addperson-action", person);
  return { type: DELETE_PERSON, person: person };
};
