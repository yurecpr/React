import './styles.css';

function Button({ name, type }) {
    return (
        <>
            <button className='main-button'>{name}</button>
        </>
    )


function Button({buttonName="Get data",isPrimaryButton }) {
    const buttonClass=isPrimaryButton? "primary-button":"secondary-button";
console.log(isPrimaryButton);
    return (
       <button className={buttonClass}>{buttonName}</button>);

}

export default Button;