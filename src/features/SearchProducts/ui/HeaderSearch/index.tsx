import { useForm } from "react-hook-form";
import style from "./HeaderSearch.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

type Inputs = {
  headerSearch: string;
};

export const HeaderSearch = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("q") || "");
  const { register, handleSubmit } = useForm<Inputs>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set("q", e.currentTarget.value);

    setSearchParams(searchParams);
    setInputValue(e.currentTarget.value);
  };

  const onSubmit = () => {
    setIsVisible(!isVisible);
    navigate(`/catalogue?q=${inputValue}`);
    setInputValue('');
  }

  return (
    <div className={style.form_container}>
      {isVisible && (
        <>
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("headerSearch", { required: "Пустое поле поиска" })}
              onChange={onChangeHandler}
              className={style.search_input}
              type="search"
              value={inputValue}
              placeholder="Поиск"
              autoFocus
            />
          </form>
        </>
      )}
      <div
        className={style.search_expander}
        onClick={() => {
          setIsVisible(!isVisible);
          if (isVisible && inputValue.length > 0) {
            onSubmit();
          }
        }}
      ></div>
    </div>
  );
};
