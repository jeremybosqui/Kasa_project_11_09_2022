import rating from "../Assets/rating.png"
import ratingless from "../Assets/ratingless.png"


function Rates({ rateNum }) {
    const rates = Array(+rateNum)
        .fill(1)
        .concat(Array(5 - rateNum).fill(0));

    return (
        <div>
            {rates.map((rate, i) => {
                return (
                    //utilisation de l'operateur ternaire afin d'initier l'etoile pleine quand il y a rate === 1 ce qui
                    // permet de rajouter des etoiles pleine jusqu'à un nombre de 5 max sinon il rajoute des étoiles vide
                    <span key={`rate-${i}`}>
						{rate === 1 ? (
                            <img src={rating} alt="rating "/>
                        ) : (
                            <img src={ratingless} alt="rating_empty" />
                        )}
					</span>
                );
            })}
        </div>
    );
}

export default Rates;

















/* import React from 'react';
import "../Styles/RatingStars.scss"
import ratingless from "../Assets/ratingless.png"
import rating from "../Assets/rating.png"


function RatingStars (scaleValue, starType) {
    const range = [1, 2, 3, 4, 5]
    const scaleType =
        starType === 'full' ? (
            <img src={ rating } alt="image_etoile_plein" />
        ) : (
            <img src={ ratingless} alt="image_etoile_vide" />
        )

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )


}

export default RatingStars */