// action creator - selectUser
// action itself is returning type and payload
export const selectUser = (user) => {
  console.log("You clicked on user: ", user.id);
  return {
    type:"USER_SELECTED",
    payload: user
  }
}
