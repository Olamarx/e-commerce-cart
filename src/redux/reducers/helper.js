export const checkData = (state, action) => {
    if (state.length < 1) {
        return [...state, action.payload];
      } else {
        for (let i = 0; i < state.length; i++) {
          // const element = array[index];
          if (state[i].id === newData.id) {
            console.log("In cart Again");
            return state
          } else if (state[i].id !== newData.id) {
            console.log("Not In cart Again");
            return [...state, action.payload];
          }
          
        }
      }
}