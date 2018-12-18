import * as constants from './constants';
import { iDispatch } from "../../store/interfaces";

export function dispatchTestAction( testValue: boolean ):iDispatch {
    return  dispatch=> {
        dispatch( {
            type: constants.CHANGE_TEST,
            payload: testValue
        } );
    }
}
