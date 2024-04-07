import { IProductFull } from '../../../../shared/types';
import style from './ProductTable.module.scss';

interface ProductTableProps {
    data: IProductFull;
}

export const ProductTable = ({data}: ProductTableProps) => {
  return (
    <table className={style.table}>
      <tbody>
        <tr>
          <td>Артикул</td>
          <td>{data?.sku}</td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>{data?.manufacturer}</td>
        </tr>
        <tr>
          <td>Цвет</td>
          <td>{data?.color}</td>
        </tr>
        <tr>
          <td>Материалы</td>
          <td>{data?.material}</td>
        </tr>
        <tr>
          <td>Сезон</td>
          <td>{data?.season}</td>
        </tr>
        <tr>
          <td>Повод</td>
          <td>{data?.reason}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable;
