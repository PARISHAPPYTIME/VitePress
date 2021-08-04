# Redux

```js
const { createStore } = require('redux');

function reducer(state = {count: 0}, action) {
	switch(action.type) {
		case 'ADD':
			return {...state, count: state.count + action.num };
		case 'MINUS':
			return { ...state, count: state.count - action.num };
		default:
			return state
	}
}

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState().count)
})

store.dispatch({ type: 'ADD', num: 10 });
store.dispatch({ type: 'MINUS', num: 5 });
```