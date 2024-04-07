import style from './Error.module.scss';

interface IErrorProps {
    message: string; 
}

export const ErrorTip = ({message}: IErrorProps) => {
  return (
    <div className={style.error}>
      {message}
    </div>
  )
}
