
export interface iAction<T> {
    type: string;
    payload: T;
}

export interface iDispatch {
    (dispatch: any): void
}