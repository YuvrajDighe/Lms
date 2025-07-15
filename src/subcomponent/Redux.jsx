import { Link } from "react-router-dom";

function Redux() {
  return (
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
      <div>
        <h1 className="text-3xl font-bold text-white">
          Redux & State Management
        </h1>

        <div className="flex justify-between mt-6">
          <Link
            to="/React/Styling"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            <span className="mr-2">❮</span> Previous
          </Link>

          <Link
            to="/React/BundlersBuild"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Next <span className="ml-2">❯</span>
          </Link>
        </div>

        {/* What is Redux */}
        <div className="rounded-xl mt-6">
          <h1 className="text-2xl font-bold text-white mb-4">What is Redux?</h1>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Redux is a JavaScript library for state management.</li>
            <li>It stores the application state in a single central store.</li>
            <li>State changes are done through Actions and Reducers.</li>
            <li>It makes the data flow predictable and easy to debug.</li>
          </ul>
        </div>

        {/* Redux Store, Actions, Reducers */}
        <div className="rounded-xl mt-6">
          <h1 className="text-2xl font-bold text-white mb-4">
            Redux Store, Actions, Reducers
          </h1>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>
              <span className="font-semibold">Store:</span> Holds the state of
              the entire app.
            </li>
            <li>
              <span className="font-semibold">Action:</span> An object that
              describes what happened.
            </li>
            <li>
              <span className="font-semibold">Reducer:</span> A function that
              updates the state based on the action.
            </li>
          </ul>
        </div>

        {/* Redux Toolkit */}
        <div className="rounded-xl mt-6">
          <h1 className="text-2xl font-bold text-white mb-4">Redux Toolkit</h1>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>It simplifies Redux setup and coding.</li>
            <li>
              Comes with built-in tools like{" "}
              <span className="text-red-600">createSlice()</span>,{" "}
              <span className="text-red-600">configureStore()</span>.
            </li>
            <li>
              Reduces boilerplate code (no need to write separate action
              creators and reducers).
            </li>
            <li>
              Supports <span className="font-semibold">immer.js</span> — lets
              you write mutable code that works immutably.
            </li>
            <li>
              Makes async logic easy with{" "}
              <span className="font-semibold">createAsyncThunk()</span>.
            </li>
          </ul>
        </div>

        {/* useSelector & useDispatch */}
        <div className="rounded-xl mt-6">
          <h1 className="text-2xl font-bold text-white mb-4">
            useSelector & useDispatch
          </h1>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>
              <span className="font-semibold">useSelector:</span> Used to get
              data from Redux store inside a React component.
            </li>
            <li>
              <span className="font-semibold">useDispatch:</span> Used to send
              (dispatch) actions to the Redux store.
            </li>
          </ul>
        </div>

        {/* Example for useSelector & useDispatch */}
        <div className="rounded-xl mt-6">
          <h1 className="text-2xl font-bold text-white mb-4">
            Example — useSelector & useDispatch
          </h1>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto">
            {`import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function CounterComponent() {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}`}
          </pre>
        </div>

        {/* Comparing Redux with useContext + useReducer */}
        <div className="rounded-xl mt-6">
          <h1 className="text-2xl font-bold text-white mb-4">
            Comparing Redux with useContext + useReducer
          </h1>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>
              <span className="font-semibold">Redux:</span> Best for large
              applications with complex state, tools, and dev support.
            </li>
            <li>
              <span className="font-semibold">useContext + useReducer:</span>{" "}
              Best for simple or medium apps with limited global state needs.
            </li>
            <li>
              Redux requires setup with Toolkit; useContext + useReducer are
              built-in React hooks.
            </li>
            <li>
              Redux supports DevTools & Middleware; useContext does not have
              built-in DevTools.
            </li>
          </ul>
        </div>

        {/* Example — useContext + useReducer */}
        <div className="rounded-xl mt-6">
          <h1 className="text-2xl font-bold text-white mb-4">
            Example — useContext + useReducer
          </h1>
          <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto">
            {`import React, { createContext, useReducer, useContext } from 'react';

// Create Context
const CounterContext = createContext();

// Reducer
const counterReducer = (state, action) => {
  if (action.type === 'increment') return state + 1;
  if (action.type === 'decrement') return state - 1;
  return state;
};

// Provider
export function CounterProvider({ children }) {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

// Usage inside component
export function Counter() {
  const { count, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}`}
          </pre>
        </div>
        <div className="flex justify-between mt-6">
          <Link
            to="/React/Styling"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            <span className="mr-2">❮</span> Previous
          </Link>

          <Link
            to="/React/BundlersBuild"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Next <span className="ml-2">❯</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Redux;
