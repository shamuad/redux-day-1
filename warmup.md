class Component
- fetch, store, manipulate, render data
- javascript class that "extends" React.Component 
Customize the React component

functional Component
- less functionality than class component
- cannot have state (though in future ... )
- 'presentational component', 'dumb'
- component that only has a render function

render()
- Method of React.component
- Renders 'JSX' -> DOM

JSX
- Syntax for 'writing html' in React <html></html> -> React.createElement(..props)
- 'returned' from render

props
- If parent is going to render a child the parent can pass props to a child
- If a parent is a list, props might the content of a list item
- Stores static data
- Makes components 'reusable' 
- Parents passes information to children
- Children cannot pass props to parents (you have to use callback)

state
- Javascript object (usually) 
- Stores dynamic data
- Determines component behaviour

setState
- Lets React know when the state has changed, and the updated data 
-> compare virtual DOM to real DOM -> Do I need to change something? 
-> rerender otherwise stay the same
- Acts 'asynchronously'
```
this.setState({ content: 'puppies' })
this.state.puppies // might be undefined
```

lifeCyle methods
// Creation phase
render()
componentDidMount()

// Update -> setState starts an update cycle
render()

// Death

todo:

function component
<DogBreedImages dog={dog}>


callback to parent