type Button = {
 title:string;
 className?:string;
 onClick?:() => void
}

export const Button = ({title,className,onClick}:Button) => {
  return (
    <button type='submit' className={` ${className}`} onClick={onClick}>
        {title}
    </button>

  )
}

export default Button