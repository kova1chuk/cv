import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./rootReducer";

export default function () {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
