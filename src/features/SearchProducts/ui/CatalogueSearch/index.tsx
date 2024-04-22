import style from "./CatalogueSearch.module.scss";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { searchItemsByTitle } from "../../../../shared/api";
import { GlobalError } from "../../../../shared/ui";

type Inputs = {
  catalogueSearch: string;
};

export const CatalogueSearch = () => {
  const client = useQueryClient();

  const { register, handleSubmit } = useForm<Inputs>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("q") || "");

  const { mutate: searchItemsByQuery, isError } = useMutation({
    mutationFn: searchItemsByTitle,
    onSuccess: (data) => {
      client.setQueryData(["products", "catalogue"], () => {
        return data;
      });
    },
  });

  const onSubmit = () => {
    searchItemsByQuery(inputValue);
    if (searchParams.has("category")) {
      searchParams.delete("category");
      setSearchParams(searchParams);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set("q", e.currentTarget.value);

    setSearchParams(searchParams);
    setInputValue(e.currentTarget.value);
  };

  if (isError) {
    return <GlobalError message="Error fetching products" />;
  }

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("catalogueSearch", { required: "Пустое поле поиска" })}
        onChange={onChangeHandler}
        className={style.search_input}
        type="search"
        value={inputValue}
        placeholder="Поиск"
        autoFocus
      />
    </form>
  );
};
