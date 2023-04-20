import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/featured.module.css'

function FeaturedCarousel({book}) {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className={styles.bookcover} src={book.image_url} alt="#"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className={styles.bookcover} src={book.image_url} alt="#"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={250}>
        <img
          className={styles.bookcover} src={book.image_url} alt="#"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FeaturedCarousel;