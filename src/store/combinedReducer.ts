import { combineReducers } from 'redux'
import {testReducer} from "../features/testFeature/reducer";

export const rootReducer = combineReducers({
    test: testReducer
});