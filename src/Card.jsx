import johnpork from './assets/john-pork.jpg'

function Card() {
    return(
        <>
        <div className="card">
            <img className="card-image" src={johnpork} alt="john-pork" />
            <h1 className="card-name">John Pork</h1>
            <p className="card-text">oink oink</p>
        </div>
        </>
    );
}

export default Card