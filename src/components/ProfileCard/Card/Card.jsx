import './styles.css';
function Card() {
    return (
        <div className='card'>
            <img src="https://www.film.ru/sites/default/files/people/1457915-877144.jpg" alt="Tom" width={140} />
            <h1>Tom Hanks</h1>
            <h2>Actor</h2>
            <h2>hobby: JS programming</h2>
        </div>
    );
}
export default Card;