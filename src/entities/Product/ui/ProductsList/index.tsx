import style from './ProductsList.module.scss';

import { IProductCard } from "../../../../shared/types";
import { ProductCard } from "../ProductCard";

interface ProductsListProps {
  products: IProductCard[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <>
      {products.length === 0 ? (
        <div>Товары не найдены</div>
      ) : (
        <div className={style.products_list}>
          {products.map((product) => (
            <ProductCard key={product.id} card={product} />
          ))}
        </div>
      )}
    </>
  );
};
