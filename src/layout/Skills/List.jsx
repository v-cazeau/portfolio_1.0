import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import skills from '../../data/json/skills.json';
import Panel from './Panel';

export default function SkillSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container id="skills">
      <Row>
        <Col className="text-center">
          <h2>Skills</h2>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <div className="slider-container">
          <Slider {...settings}>
            {skills.map((skill) => (
              <Col key={skill.id} className="text-center">
                <Panel skill={skill} />
              </Col>
            ))}
          </Slider>
        </div>
      </Row>
    </Container>
  );
}
