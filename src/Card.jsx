import profilePic from './assets/photo_2025-10-15_15-09-52.jpg'

function Card(){
    return(
        <div className = "card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">xitysa</h2>
            <p className="card-text">JSX learning and eating tacos</p>
        </div>
    );
}

export default Card