export const formatPrice = (price: number) => {
    const formatter = new Intl.NumberFormat('ru-RU');
    const formattedPrice = formatter.format(price);
    return formattedPrice;
}