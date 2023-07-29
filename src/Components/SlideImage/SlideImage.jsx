// import { Carousel } from 'rsuite';
import Img1 from '../Image/slide4.png'
import Img2 from '../Image/slide5.png'
import Img3 from '../Image/slide6.jpg'


// import SlideImage from '../SlideImage/SlideImage';

import Carousel from 'react-bootstrap/Carousel';

function SlideImage() {
    return (

        <div>
            <Carousel style={{ margin: "50px" }} fade>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={Img1} height="480"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={4000}>
                    <img
                        className="d-block w-100"
                        src={Img2} height="480"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  interval={5000}>
                    <img
                        className="d-block w-100"
                        src={Img3} height="480"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}


export default SlideImage;