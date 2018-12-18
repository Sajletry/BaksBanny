import { createStore } from 'redux'
import { rootReducer } from './combinedReducer';

export const store = createStore(rootReducer);