// action based reducer: reducers receive all action invocations.
// this recuder filters out the data needed for given action
export default function (state=null, action){
  switch (action.type) {
    case "USER_SELECTED":
      return action.payload;
    break;
  }
  return state;
}
