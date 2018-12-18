import * as constants from './constants';
import { Action } from "redux";

export interface TestReducerState {
    test: boolean;
}

const initialState: TestReducerState = {
    test: false
};

export function testReducer( state: TestReducerState = initialState, action: Action<boolean> ): TestReducerState {
    switch ( action.type ) {
        case constants.CHANGE_TEST:
            return { ...state, test: action.payload };
        default:
            return state;
    }
}