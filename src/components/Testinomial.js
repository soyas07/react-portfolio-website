import React from 'react'
import Carousel from 'react-elastic-carousel'

function Testinomial( {data, breakPoint} ) {

    const listSlider = data.map(item => (
        <div className="slider-image">
            <div id="test-image">
                <img src={item.image} alt="person" />
            </div>  
            <div className="feedback">
                <svg className="start-invert" xmlns="http://www.w3.org/2000/svg" width="76" height="208" viewBox="0 0 76 120">
                    <text id="_" data-name="&quot;" transform="translate(38 184)" fill="#ff0513" font-size="200" font-family="Haettenschweiler"><tspan x="-37.402" y="0">&quot;</tspan></text>
                </svg>
                <p>{item.feedback}</p>
                <svg className="end-invert" xmlns="http://www.w3.org/2000/svg" width="76" height="208" viewBox="0 0 76 120">
                    <text id="_" data-name="&quot;" transform="translate(38 184)" fill="#ff0513" font-size="200" font-family="Haettenschweiler"><tspan x="-37.402" y="0">&quot;</tspan></text>
                </svg>
                <h5>-{item.name}</h5>
                <p>{item.company}</p>
            </div>
        </div>
    ))

    return (
        <section className="wrapper-secondary testinomial-wrapper">
           <div className="margin-container ">
               <h3 className="title">What My Client Says</h3>
               <div className="line-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="345" height="2" viewBox="0 0 345 2">
                        <line id="Line_8" data-name="Line 8" x2="345" transform="translate(0 1)" fill="none" stroke="#ff0513" stroke-width="2"/>
                    </svg>
               </div>
               <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
                {/* carousel */}
                <Carousel>
                    {listSlider}
                </Carousel>
           </div>
        </section>
    )
}

export default Testinomial
