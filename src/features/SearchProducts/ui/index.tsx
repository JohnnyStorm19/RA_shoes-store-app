import { HeaderSearch } from "./HeaderSearch";
import { CatalogueSearch } from "./CatalogueSearch";

interface SearchProductsProps {
  variant: "header" | "cataloguePage";
}

export const SearchProducts = ({ variant }: SearchProductsProps) => {
  return variant === "header" ? <HeaderSearch /> : <CatalogueSearch />;
};
