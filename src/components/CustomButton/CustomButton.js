import './CustomButton.css'

const CustomButton = ({children, active, ...otherProps}) => {
    return (
        <button className={`${active?"active":""}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;