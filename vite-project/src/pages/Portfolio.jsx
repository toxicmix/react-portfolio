import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../assets/arms.png';
import CarouselImage3 from '../assets/minecraft.png';

export default function Portfolio(){

  return (
  
        <div>
          <h2>Portfolio</h2>
            
          <Carousel>
            <Carousel.Item>
              <img src= {CarouselImage1} text="First slide" />
              <Carousel.Caption>
                <h3>football information</h3>
                <p>a website that delivers peronalized information about football.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src= {CarouselImage1} text="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src= {CarouselImage3} text="Third slide" />
              <Carousel.Caption>
                <h3>Modded minecraft</h3>
                <p>
                  in highschool i created a mod for the game minecraft to add fun to the game.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
  
  );
  }