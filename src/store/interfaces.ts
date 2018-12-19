export interface IAction<T> {
    type: string;
    payload: T;
}

export type IDispatch = (dispatch: any) => void;
