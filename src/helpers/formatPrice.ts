export const formatPrice = (price: number) => {
	const formattedPrice = price.toFixed(2).replace(".", ",");

	return formattedPrice;
};
