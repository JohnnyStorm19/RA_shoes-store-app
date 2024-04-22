import { IFormData, IProductCard, IProductFull, TCategory } from "../types";

export type TopSalesResponse = IProductCard[];
export type CatalogueAllItemsResponse = IProductCard[];
export type SingleItemResponse = IProductFull;
export type LoadMoreResponse = IProductCard[];
export type CategoriesResponse = TCategory[];
export type OrderFormData = IFormData;
