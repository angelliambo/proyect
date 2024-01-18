interface Paging {
	total: number;
	primary_results: number;
	offset: number;
	limit: number;
}

interface AvailableSortsEntityOrPathFromRootEntityOrSort {
	id: string;
	name: string;
}

interface FiltersEntity {
	id: string;
	name: string;
	type: string;
	values?: ValuesEntity1[] | null;
}

interface ValuesEntity1 {
	id: string;
	name: string;
	path_from_root?: AvailableSortsEntityOrPathFromRootEntityOrSort[] | null;
}

interface AvailableFiltersEntity {
	id: string;
	name: string;
	type: string;
	values?: ValuesEntity2[] | null;
}

interface ValuesEntity2 {
	id: string;
	name: string;
	results: number;
}

interface PdpTracking {
	group: boolean;
	product_info?: ProductInfoEntity[] | null;
}

interface ProductInfoEntity {
	id: string;
	score: number;
	status: string;
}

interface Author {
	name: string;
	lastname: string;
}

export interface ItemDto {
	id: string;
	title: string;
	condition: string;
	thumbnail_id: string;
	catalog_product_id: string;
	listing_type_id: string;
	permalink: string;
	buying_mode: string;
	site_id: string;
	category_id: string;
	domain_id: string;
	thumbnail: string;
	currency_id: string;
	order_backend: number;
	price: number;
	original_price: number;
	sale_price: number | null;
	available_quantity: number;
	official_store_id: number;
	official_store_name: string;
	use_thumbnail_id: boolean;
	accepts_mercadopago: boolean;
	shipping: {
		store_pick_up: boolean;
		free_shipping: boolean;
		logistic_type: string;
		mode: string;
		tags: string[];
		benefits: null;
		promise: null;
	};
	stop_time: string;
	seller: {
		id: number;
		nickname: string;
	};
	attributes: {
		id: string;
		name: string;
		value_id: string;
		value_name: string;
		attribute_group_id: string;
		attribute_group_name: string;
		value_struct: null;
		values: [
			{
				id: string;
				name: string;
				struct: null;
				source: number;
			}
		];
		source: number;
		value_type: string;
	}[];
	installments: {
		quantity: number;
		amount: number;
		rate: number;
		currency_id: string;
	};
	winner_item_id: null;
	catalog_listing: boolean;
	discounts: null;
	promotions: any[];
	inventory_id: null;
}

export interface ItemDescriptionDto {
	text: string;
	plain_text: string;
	last_updated: string;
	date_created: string;
	snapshot: {
		url: string;
		width: number;
		height: number;
		status: string;
	};
}

export interface itemsDto {
	site_id: string;
	country_default_time_zone: string;
	query: string;
	paging: Paging;
	results?: ItemDto[] | null;
	sort?: {
		id: string;
		name: string;
	};
	available_sorts?;
	filters?: FiltersEntity[] | null;
	available_filters?: AvailableFiltersEntity[] | null;
	pdp_tracking: PdpTracking;
	author: Author;
}
