
export interface iAction<T> {
    type: string;
    payload: T;
}

export interface iDispatch<T> {
    (dispatch:any):T
}

export interface iDispatcher<T> {

}