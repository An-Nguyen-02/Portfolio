import './CustomAnchor.css';

const CustomAnchor = ({children, isCV, isWork, ...otherProps}) => {
    return (
        <a
        className={`${isCV ? "cv":""} ${isWork ? "work":""} custom-button`} {...otherProps}
        >
            {children}
        </a>

    )
}

export default CustomAnchor;