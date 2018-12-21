import { combineReducers } from 'redux'
import {testReducer, ITestReducerState } from "../features/testFeature/reducer";

export interface IState {
    test:ITestReducerState;
};

export const rootReducer  = combineReducers({
    test: testReducer
});
