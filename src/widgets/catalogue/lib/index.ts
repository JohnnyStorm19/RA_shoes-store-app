export const getSearchingStatus = (searchParams: URLSearchParams) => {
  const query = searchParams.get("q");
  if (query && query.length > 0) {
    return true;
  }
  return false;
};
