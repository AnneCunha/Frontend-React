import './Button.css'

const Button = ({children, variant}) => {
    console.log('Dados: ', variant)
    return (
        <button className="variant">{children}</button>
    )
}

export default Button