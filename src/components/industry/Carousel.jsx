import Carousel from 'react-bootstrap/Carousel';
import Carpic1 from '../../assets/carpic1.jpg'
import Carpic2 from '../../assets/carpic2.jpg'
import Carpic3 from '../../assets/carpic3.jpg'
import Carpic4 from '../../assets/carpic4.png'
import Carpic5 from '../../assets/carpic5.jpg'
import Carpic6 from '../../assets/carpic6.png'
import Carpic7 from '../../assets/carpic7.jpg'
import Carpic8 from '../../assets/carpic8.png'
import './carousel.css'
function DarkVariant() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-5"
                    src={Carpic1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-5"
                    src={Carpic2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-5"
                    src={Carpic3}
                    alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-5"
                    src={Carpic4}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-5"
                    src={Carpic5}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-5"
                    src={Carpic6}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-5"
                    src={Carpic7}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-5"
                    src={Carpic8}
                    alt="First slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariant;