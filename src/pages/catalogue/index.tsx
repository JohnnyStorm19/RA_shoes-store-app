import { SearchProducts } from "../../features";
import { Catalogue } from "../../widgets";

export const CataloguePage = () => {
  return (
    <div>
      <SearchProducts variant="cataloguePage" />
      <Catalogue />
    </div>
  );
};
