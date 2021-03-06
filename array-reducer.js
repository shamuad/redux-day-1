const redux = require('redux')

const initialState = [
  {
    name: 'First dog',
    isAGoodBoy: true
  }
]

const reducer = (state = initialState, action = {}) => {
    // CYBYWY
    // -> console.log(state, 'state', action, 'action')
  switch (action.type) {
  case 'ADD_DOG':
    return [
      ...state,
      action.payload
    ]
  case 'SET_DOGS':
    // CYBYWY
    // console.log('hi') -> case SET_DOGS gets run?
    // console.log(action.payload.filter())

    // payload: [] -> state [] X
    // payload: [dog, dog] -> state [dogclone, dogclone] X
    let newState 
    if(action.payload.length !== 0){
        newState = action.payload.map(dog => {
           return { ...dog }
        }) // [dogClone, dogClone]
    } else {
        newState = []
    }

    return newState

  default:
    return state
  }
}

const store = redux.createStore(reducer)
console.log('Initial state of the store', store.getState())

store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'ADD_DOG',
  payload: {
    name: 'Second dog',
    isAGoodBoy: false
  }
}

store.dispatch(action)

module.exports = { reducer }