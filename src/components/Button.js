
const Button = ({ title, onHandleClick, btnClass}) => {
  return (
    <button className={btnClass} onClick={onHandleClick}>{title}</button>
  )
}


export default Button
