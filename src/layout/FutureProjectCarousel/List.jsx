import { Carousel, Card, Button } from 'react-bootstrap';  
import data from '../../data/fut_gallery.json'

export default function List () {
    const itemsPerSlide = 3; // Number of items to display per slide

    // Split data into chunks based on itemsPerSlide
    const chunks = [];
    for (let i = 0; i < data.length; i += itemsPerSlide) {
      chunks.push(data.slice(i, i + itemsPerSlide));
    }
  
    return (
      <Carousel className='carousel-dark'>
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
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    )
}