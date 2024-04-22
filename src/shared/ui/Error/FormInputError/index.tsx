import style from "./FormInputError.module.scss";

interface FormErrorProps {
  message: string;
}

export const FormInputError = ({ message }: FormErrorProps) => {
  return <div className={style.form_error}>{message}</div>;
};
