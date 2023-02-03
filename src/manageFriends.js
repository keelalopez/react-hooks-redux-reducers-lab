// const initialState = { friends: [] };

export function manageFriends(state, action) {
  // your code here
  switch (action.type) {
    case "friends/add":
      return {
        // using spread operator to create a new array with what was existing and adding the action's object stored in payload
        friends: [...state.friends, action.payload],
      };
    case "friends/remove":
      return {
        // for this action, the payload is an id 
        friends: state.friends.filter((friend) => friend.id !== action.payload),
      };
    default :
      return state;
  }
}
