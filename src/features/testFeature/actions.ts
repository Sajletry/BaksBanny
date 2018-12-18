import * as constants from './constants';
import { IAction , IDispatch } from "../../store/interfaces";

export interface ITestAction extends IAction<boolean>{
    payload: boolean;
}

export function dispatchTestAction( testValue: boolean ):IDispatch {
    return  dispatch=> {
        dispatch( {
            type: constants.CHANGE_TEST,
            payload: testValue
        } );
    }
}

export type IAction  =  ITestAction;