import './styles.css';
function Button({buttonName="Get data",isPrimaryButton }) {
    const buttonClass=isPrimaryButton? "primary-button":"secondary-button";
console.log(isPrimaryButton);
    return (
       <button className={buttonClass}>{buttonName}</button>);
}

export default Button;