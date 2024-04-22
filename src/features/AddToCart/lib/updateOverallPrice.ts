// price - цена за одну единицу товара
// quantity - кол-во товара
// discountPercent - скидка (указывается числом, но является например процентом)

export const updateOverallPrice = (price: number, quantity: number, discountPercent = null) => {
    const overallPrice = price * quantity
    if (!discountPercent) {
        return overallPrice
    }
    // в случае если будет скидка
    const discount = overallPrice * (discountPercent / 100);
    return overallPrice - discount;
}