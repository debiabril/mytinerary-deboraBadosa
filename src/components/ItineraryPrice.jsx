import '../styles/ItineraryPrice.css'

const ItineraryPrice = ({price}) => {
    const maxRating = 5;

    const coins = Array.from({ length: maxRating }, (_, index) => (
        <span key={index} className={`coin ${index < price ? 'filled' : 'empty'}`}>&#36;</span>
    ));

    return (
        <div className="coin-price">
            {coins}
        </div>
    );
}

export default ItineraryPrice