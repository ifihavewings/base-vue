export interface IFunctionCallback {
    (): any
}
export interface IObjectCallback {
    func: (...args: any[]) => any; // "he func should be a function, and args should be an array. It can accept arguments of any type and in any quantity.
    args?: any[]; 
    [key: string]: any; 
}

export interface IArrayCallback extends Array<IFunctionCallback | IObjectCallback> {}

export type ICallback = IFunctionCallback | IArrayCallback | IObjectCallback