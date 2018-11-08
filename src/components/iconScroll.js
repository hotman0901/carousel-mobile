import React, { Component } from 'react';
// import Carousel from 'nuka-carousel';
import Carousel from 're-carousel';
// import Buttons from './buttons'
import IndicatorDots from './indicator-dots'

import banner from '../banner.png'

export default class IconScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }
    

    render() {
        return (
            <div style={{ width: '340px', height: '180px', backgroundColor: '#fff' }} className="carouselWrapper">
                <Carousel loop auto widgets={[IndicatorDots]}>
                    {/* <div style={{ height: '100%',  backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${banner})` }}>
                        Frame 1
                    </div> */}
                    <div style={{ backgroundColor: 'orange', height: '100%' }}>
                        <div className="iconWrapper">
                            <div className="icon">BALMUDA</div>
                            <div className="icon">BALMUDA</div>
                            <div className="icon">BALMUDA</div>
                            <div className="icon">BALMUDA</div>
                            <div className="icon">BALMUDA</div>
                            <div className="icon">BALMUDA</div>
                            <div className="icon">BALMUDA</div>
                            <div className="icon">BALMUDA</div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'pink', height: '100%' }}>
                        <div className="iconWrapper">
                            <div className="icon">BANANA</div>
                            <div className="icon">BANANA</div>
                            <div className="icon">BANANA</div>
                            <div className="icon">BANANA</div>
                            <div className="icon">BANANA</div>
                            <div className="icon">BANANA</div>
                            <div className="icon">BANANA</div>
                            <div className="icon">BANANA</div>
                        </div>
                    </div>
                    {/* <div style={{ backgroundColor: 'orchid', height: '100%' }}>
                        Frame 3
                    </div> */}
                </Carousel>
            </div>
        );
    }
}
