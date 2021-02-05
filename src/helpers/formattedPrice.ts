export function formattedPrice(price: number, discount: number = 10) {
	const oldPrice = ((discount / 100) * price + price)
		.toFixed(2)
		.replace(".", ",");

	const newPrice = price.toFixed(2).replace(".", ",");

	return { oldPrice, newPrice };
}
