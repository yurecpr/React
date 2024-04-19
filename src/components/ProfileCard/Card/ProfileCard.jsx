import './styles.css';
function ProfileCard(props) {
    return (
        <div className='card'>
            <img src="https://www.film.ru/sites/default/files/people/1457915-877144.jpg" alt="Tom" width={140} />
            <h1>{props.data.site_name}</h1>
            <h2>{props.data.site_name}</h2>
            <h2>hobby: JS programming</h2>
        </div>
    );
}
export default ProfileCard;