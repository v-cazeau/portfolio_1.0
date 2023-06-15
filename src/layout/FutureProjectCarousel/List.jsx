// import { Carousel, Card, Button } from 'react-bootstrap'; 
// import data from '../../data/bc_gallery.json'

export default function List () {

  return (
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div className='card-wrapper'>
            <div class="card">
            <div className="image-wrapper">
            <img src="https://picsum.photos/500/600?random=1" class="card-img-top" alt="..."/>
            </div>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>          
            </div>

            <div class="card">
            <div className="image-wrapper">
            <img src="https://picsum.photos/500/600?random=2" class="card-img-top" alt="..."/>
            </div>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            
                <div class="card">
                <img src="https://picsum.photos/500/600?random=3" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        </div>
     
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  );
}