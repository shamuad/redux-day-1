1.) What is state management

Collecting state of our app in one place
Changing the state in a predictible way

2.) Why use state management

- Create an overview 
- Seperation of concerns
- Don't repeat yourself 

3.) What is redux
store:
- holds the state
- describes how the state can change

reducer:
- describes how the state can change
- action + currentstate = new state
- function (usually with default argument)
- Always return some state (e.g. a default state)

```javascript
const initialState = {}
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case 'SAY_HELLO_WORLD':
    const newState = { ...state, hello: action.payload.greeting}
    return newState

  default:
    return state
  }
}

const myAction = {
    type: 'SAY_HELLO_WORLD',
    payload: {
        greeting: 'SAY HELLO TO MY LITTLE FRIEND'
    }
}
```




initial state
- Default argument when the running the reducer for the first time

new state
- action + currentState = newState
- Always a new value (so use spread operator)

action:
- Object
- Should have a `type` (so the reducer can handle it)
- `dispatched` to the store

```javascript
const action = {
    type: "DELETE_USER",
    payload: {
        userId: 2
    }
}
```

type
- Action type, so the reducer knows how to change the state

payload
- Sometimes actions have additional information besides their type, we call a `payload`

dispatch
- Method of the store
- Used to `dispatch` an action -> store.dispatch({ type: "EXAMPLE }) -> sent to reducer

getState
- Method of the store
- Used to `get` the current state 

(subscribe) (optional)
- Method of the store
- Recieves a callback function, when an action handled by a reducer, calls the callback



4.) Object/Array Mutations and how to avoid them

Return new values functions
Using:
Spread operator (shallow copy)
Map objects and use spread operator with nested arrays or objects


5.) How to make an Object reducer

EXAMPLE:
```javascript
const initialState = {
  firstName: 'Charles',
  lastName: 'Eamnes',
  age: 75
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case 'SET_FIRST_NAME':
    return {
      ...state,
      firstName: action.payload
    }

  case 'SET_LAST_NAME':
    return {
        ...state,
        lastName: action.payload
    }
  case 'SET_AGE':
    return {
        ...state,
        age: action.payload
    }

  default:
    return state
  }
}
```

6.) How to make an Array reducer

```javascript
const initialState = []
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
```


7.) How to set up redux in React
createStore
enhancer (like Redux devtools)
Provider

8.) Using connect
Accessing state in a component using mapStateToProps
Dispatching an action from a component

todo:

console.log(store)