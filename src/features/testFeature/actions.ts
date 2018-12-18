import * as constants from './constants';
import { iAction, iDispatch } from "../../store/interfaces";

export function dispatchTestAction( testValue: boolean ) {
    return ( dispatch:any ) => {
         dispatch( {
            type: constants.CHANGE_TEST,
            payload: testValue
        } );
    }
}
