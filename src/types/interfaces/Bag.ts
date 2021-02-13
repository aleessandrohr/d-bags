export interface Bag {
	id: number;
	name: string;
	retail_price: number;
	retail_price_discount: number;
	discount?: number;
	material_type?: string;
	handle_type?: string;
	main_img_path: string;
}
