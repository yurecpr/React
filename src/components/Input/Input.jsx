import "./styles.css";

function Input({ name, type, placeholder, label,onInputChange }) {
    return (
        <div className="input-component-container">
            <label>{label}</label>
            <input className="input-component"
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onInputChange} />
        </div>
    );
}
export default Input;
