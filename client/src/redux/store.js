import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./reducer";

export default createStore(rootReducer, applyMiddleware(createLogger(), thunk));
