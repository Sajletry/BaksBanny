import { createSelector } from 'reselect';
import { ITestReducerState } from "./reducer";
import { IState } from "../../store/combinedReducer";


const getTest = ( state: IState ): ITestReducerState => state.test;

export const getTestValue = createSelector( getTest, test => test.test );