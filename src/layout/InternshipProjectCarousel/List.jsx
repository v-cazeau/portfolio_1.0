import { Carousel, Card, Button } from 'react-bootstrap'; 
import { ShareFill } from 'react-bootstrap-icons';
import data from '../../data/json/int_gallery.json';

export default function List () {
    const itemsPerSlide = 3; // Number of items to display per slide

    // Split data into chunks based on itemsPerSlide
    const chunks = [];
    for (let i = 0; i < data.length; i += itemsPerSlide) {
      chunks.push(data.slice(i, i + itemsPerSlide));
    }
  
    return (
      <section>
      <Carousel 
        className='carousel-dark d-none d-sm-block'
        controls={data.length > itemsPerSlide + 1}>
        {chunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className='card-wrapper'>
              {chunk.map((item) => (
                <Card key={item.id}>
                  <Card.Img src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.content}</Card.Text>
                    <Button variant="primary" href={item.repo}>
                    <ShareFill color="white" size={25} />
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Carousel className="carousel-dark d-sm-none">
        {data.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="card-wrapper">
              <Card key={item.id}>
                <Card.Img src={item.image} alt={item.name} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.content}</Card.Text>
                  <Button variant="primary" href={item.repo}>
                  <ShareFill color="white" size={25} />
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      </section>
    )
}