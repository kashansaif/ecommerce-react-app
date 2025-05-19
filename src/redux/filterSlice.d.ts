export type ObjPrice = {
    min: number;
    max: number;
};
export interface IinitialState {
    price: ObjPrice;
    category: string;
}
export declare const initialState: IinitialState;
export declare const setCategoryState: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "filter/setCategoryState">, setPriceState: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | ObjPrice, "filter/setPriceState">;
declare const _default: import("redux").Reducer<IinitialState>;
export default _default;
