
### Why use high-order-component
In order to promote the reusability of different part of code. We should use
approaches like OOD or OOP in our code.

In React, we want to separate representation and state manipulation part.

In example below, mapProps is a fn used to manipulate data for a representation
component. And SomeStatelessFunction is a pure function used to represent data.

There is a gap between the data manipulation and data representation. We need to
use some way to combine this two parts.

Multiple ways such as High-Order-Component, function as children and pass component
as props.

Below is an example of creating high order component.
```
const mapProps = fn => Component => props =>
  React.createFactory(Component)(fn(props))

const compose = (f, g) => x => f(g(x))

const Enhance = compose(
  mapProps(({
    initialModel: { value, ...initialValues },
    ...props
  }) => ({
    ...props,
    ...{ ...initialValues, ...{ id: value } },
  })),
  WithState,
);

const SomeStatelessFunction = ({ id, updateState,...props }) => {
  return <div>
    <div>Id: {id}</div>
    <button
      onClick={() => updateState({ id: id + 1 })}
    >
      Update
    </button>
  </div>
}

const Enhanced = Enhance(SomeStatelessFunction)  

const App = () => {
  return (
    <div>
      <Enhanced initialModel={{ value: 5 }} />
    </div>
  )
}
```

Here is an example of pass component as props
In this pattern we can change the way a component manipulate data by change fn;
We pass the representation component by using view.

But this solution would not work if the component passed inside is a StateComponent.

This is a problem I met, if I would like to Enhance Component, How can I pass some props
to the parent component while pass some other props to child(inner component).

In this pattern, we lose the control of child component.
Because one function would not be able to manipulate the map props and manipulate the
parent props at the same time.
```
const MapProps = ({ fn, view: Component, ...props }) => {
  const transformedProps = fn(props)
  return (
    <Component {...transformedProps} />
  )
}
const App = () => {
  return (
    <div>
      <MapProps
        value='5'
        fn={({value, ...props}) => ({ ...props, ...{ id: value }})}
        view={SomeStatelessFunction}
      />
    </div>
  )
}
```
