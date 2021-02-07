export function imageUrl(img: string) {
	const image = img.split(";");
	const randomNumber = Math.floor(Math.random() * (image.length - 1));
	const randomImage = image[randomNumber];

	return randomImage;
}
