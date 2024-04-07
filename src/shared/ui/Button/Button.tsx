import style from './Button.module.scss'

interface IButton {
    children: string;
    type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
    onClickHandler?: () => void;
    className: string;
    disabled?: boolean;
    dataType?: string;
}


export const Button = ({children, type, className, disabled=false, dataType="", onClickHandler}: IButton) => {
  const btnStyle = style.btn + ' ' + className;
  
  return (
    <button className={btnStyle} type={type} onClick={onClickHandler} disabled={disabled} data-type={dataType} >
        {children}
    </button>
  )
}
