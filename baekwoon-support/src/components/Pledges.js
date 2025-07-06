
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const pledges = [
  { id: 1, title: '공약 1', description: '학생들의 복지를 위한 약속!', image: 'https://via.placeholder.com/300x200' },
  { id: 2, title: '공약 2', description: '더 즐거운 학교 생활!', image: 'https://via.placeholder.com/300x200' },
  { id: 3, title: '공약 3', description: '소통으로 만드는 학교!', image: 'https://via.placeholder.com/300x200' },
  { id: 4, title: '공약 4', description: '학업 스트레스 타파!', image: 'https://via.placeholder.com/300x200' },
  { id: 5, title: '공약 5', description: '안전하고 깨끗한 환경!', image: 'https://via.placeholder.com/300x200' },
];

const PledgeCard = ({ id, title, description, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Col md={4} className="mb-4">
      <Link to={`/pledge/${id}`} className="text-decoration-none">
        <Card ref={ref} className={`pledge-card ${inView ? 'visible' : ''}`}>
          <Card.Img variant="top" src={image} />
          <Card.Body className="p-4">
            <Card.Title>{title}</Card.Title>
            <Card.Text className="highlight-text">{description}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

const Pledges = () => {
  return (
    <section id="pledges">
      <Container>
        <h2 className="text-center section-title">우리의 약속</h2>
        <Row>
          {pledges.map((pledge) => (
            <PledgeCard key={pledge.id} id={pledge.id} title={pledge.title} description={pledge.description} image={pledge.image} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pledges;
