import React, { useState } from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';
import './MorePhoto.css'; 

const MorePhoto = ({slides}) => {
    const  [current,setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () =>{
        setCurrent(current === length-1 ? 0 : current+1);
    };
    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current-1);
    };

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }

    return (
        <div id='image-slider' name='image-slider' className='slider-wrapper'>
            <h1>Gallery</h1>
            <section className="slider">
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
                <div className='each-slide-wrapper'>
                    {SliderData.map((slide,index) =>{
                        return (
                            <>
                                <div 
                                className={index === current ? 'slide active' : 'slice'} 
                                key={index}>
                                    {index === current &&
                                    (<img className='morephoto-img' src={slide.image} alt="slide image" />)}
                                </div>
                            </>
                        )
                    })}
                </div>
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            </section>
        </div>
    )
}

export default MorePhoto;