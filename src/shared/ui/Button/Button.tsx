import style from './Button.module.scss'

interface IButton {
    children: string;
    type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
    onClick?: () => void;
    className: string;
    disabled?: boolean;
    dataType?: string;
}


export const Button = ({children, type, className, disabled=false, dataType="", onClick}: IButton) => {
  const btnStyle = style.btn + ' ' + className;
  
  return (
    <button className={btnStyle} type={type} onClick={onClick} disabled={disabled} data-type={dataType} >
        {children}
    </button>
  )
}
