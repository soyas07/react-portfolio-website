import React from 'react'
import Carousel from 'react-elastic-carousel'

function Abilities( {data, breakPoint} ) {

    const listSlider = data.map(item => (
        <div className="slider-image">
            <svg id="Group_66" data-name="Group 66" xmlns="http://www.w3.org/2000/svg" width="72.651" height="78.76" viewBox="0 0 72.651 78.76">
                <path id="Path_56" data-name="Path 56" d="M393.967,486.82,357.638,509.8,321.317,486.82l36.321-22.844Zm0,0" transform="translate(-321.317 -463.976)" fill="#ffe01a"/>
                <path id="Path_57" data-name="Path 57" d="M357.638,493.844,335.1,479.953l-13.783,8.436,36.321,22.384,36.329-22.384-13.781-8.436Zm0,0" transform="translate(-321.316 -448.543)" fill="#ff6f00"/>
                <path id="Path_58" data-name="Path 58" d="M357.639,502.646,335.1,488.753l-13.783,8.438,36.322,22.384,36.329-22.384-13.781-8.438Zm0,0" transform="translate(-321.317 -440.815)" fill="#ff0513"/>
            </svg>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
        </div>
    ))

    return (
        <section className="wrapper-primary abilities-wrapper">
            <div className="margin-container">
                <h3>My Capablities</h3>
                <div className="line-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="345" height="2" viewBox="0 0 345 2">
                        <line id="Line_7" data-name="Line 7" x2="345" transform="translate(0 1)" fill="none" stroke="#ff0513" stroke-width="2"/>
                    </svg>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>
                {/* Carousel slider */}
                <div className="slider-image">
                    <Carousel breakPoints={breakPoint}>
                        {listSlider}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Abilities
