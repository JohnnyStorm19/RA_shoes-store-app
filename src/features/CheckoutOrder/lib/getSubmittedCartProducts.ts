import { ICartProduct } from "../../../shared/types";

export const getSubmittedCardProducts = (cartProducts:ICartProduct[]) => {
    const res = cartProducts.map(product => {
        return {id: product.id, price: product.price, count: product.quantity}
    });
    return res;
}