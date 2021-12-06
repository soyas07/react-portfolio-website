import React from 'react'
import Carousel from 'react-elastic-carousel'

function Portfolio( {data, breakPoint} ) {

    const slider = data.map(item => (
        <div className="slider-image">
            <img className="slider-item" src={item.image} alt="carousel-image" />
        </div>
    ))

    return (
        <section className="wrapper-secondary portfolio-wrapper">
            <div className="margin-container">
                <aside>
                    <h5>Portfolio</h5>
                    <ul>
                        <li><a href="#" className="active">All</a></li>
                        <li><a href="#">Logo</a></li>
                        <li><a href="#">Websites</a></li>
                        <li><a href="#">Mobile Apps</a></li>
                    </ul>
                </aside>
                {/* carousel slider */}
                <Carousel breakPoints={breakPoint}>
                    {slider}
                </Carousel>
            </div>
        </section>
    )
}

export default Portfolio
