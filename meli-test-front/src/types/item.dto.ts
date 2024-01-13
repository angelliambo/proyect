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

export interface GetOneItemOutDto {
  idItem: string
}

export interface GetAllItemsOutDto {
  query: string
}

export interface GetOneItemDescriptionOutDto {
  idItem: string
}