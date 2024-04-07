export function priceFormatter(price: number) {
    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'decimals',
    });
    return formatter.format(price);
}