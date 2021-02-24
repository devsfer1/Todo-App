
const Button = ({ title, onHandleClick}) => {
  return (
    <button className="btn" onClick={onHandleClick}>{title}</button>
  )
}


export default Button
