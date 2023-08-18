import clasess from './Button.module.css';

const Button = ({children, ...props}) => {
  const { button } = clasess;
  return (
    <button className={ button } {...props}>
      { children }
    </button>
  )
}

export default Button;
