import React, {useState} from 'react';
import "../../Styles/Carrousel.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faChevronLeft, faChevronRight )
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";*/

function Carrousel(props){
    const [slideIdx, setSlideIdx] = useState(0), imgSize = () => {
        const slideshowImg = document.querySelector('.MainDivCarrousel_Container img');
        if (!slideshowImg) {
            return 0;
        }
        return slideshowImg["width"];
    }, onPrev = () => {
        if (slideIdx === 0) {
            setSlideIdx(props.img.length - 1)
        }
        /*if (slideIdx <= 1) {
        }*/
        else {
            setSlideIdx(slideIdx - 1)
        }
    },
       onNext = () => {
        if (slideIdx === props.img.length - 1) {
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx + 1)
        }
    }/*,  hideControls = () => {
            if (props.img.length <= 1) {
                document.querySelector('.slideshow-controls').style = "display: none;"
            }
        }*/
    /*const pics = props.pictures*/
    return (

        <div className="MainDivCarrousel">
            <div className="MainDivCarrousel_Container" style={{
                transform: `translateX(-${slideIdx * imgSize()}px)`
            }}>
                {props.img.map((picture) => <img className='MainDivCarrousel_Img' alt="pictures_slider" src={picture} key={picture} />)}
            </div>
            {/* eslint-disable-next-line no-undef */}
            {/*instanciation de la condition qui enleve les controls sur une seule image*/}
            {props.img.length > 1 ? (
                <div className={'MainDivCarrousel_Controls'}>
                    {/*<FontAwesomeIcon icon={solid("chevron-left")} className={'chevron'} onClick={onPrev} />*/}
                    <FontAwesomeIcon icon={["fas", "chevron-left"]} className={'chevron'}  alt="chevron_left" onClick={onPrev} />
                    <FontAwesomeIcon icon={["fas", "chevron-right"]} className={'chevron'}  alt="chevron_right" onClick={onNext} />
                    {/*<img src="/chevron-left.png" className={'chevron'}  alt="chevron_left" onClick={onPrev}/>
                    <img src="/chevron-right.png" className={'chevron'} alt="chevron_right" onClick={onNext}/>*/}
                </div>

            ) : ""
            }
            <div className={'MainDivCarrousel_Index'}>{slideIdx + 1} / {props.img.length}</div>

        </div>
    );
}

export default Carrousel
