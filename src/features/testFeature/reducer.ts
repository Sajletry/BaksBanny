import * as constants from './constants';
import { IAction } from "./actions";

export interface ITestReducerState {
    test: boolean;
}

const initialState: ITestReducerState = {
    test: false,
};

export function testReducer( state: ITestReducerState = initialState, action: IAction): ITestReducerState {
    switch ( action.type ) {
        case constants.CHANGE_TEST:
            return { ...state, test: action.payload };
        default:
            return state;
    }
}