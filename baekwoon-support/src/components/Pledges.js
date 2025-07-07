
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import emojiPrinter from '../assets/compare/공약 1, 이모지.svg';
import photoPrinter from '../assets/compare/공약 1, 사진.png';

const pledges = [
  { id: 1, title: '공약 1', description: '학생들의 복지를 위한 약속!', image: 'https://via.placeholder.com/300x200' },
  { id: 2, title: '공약 2', description: '더 즐거운 학교 생활!', image: 'https://via.placeholder.com/300x200' },
  { id: 3, title: '공약 3', description: '소통으로 만드는 학교!', image: 'https://via.placeholder.com/300x200' },
  { id: 4, title: '공약 4', description: '학업 스트레스 타파!', image: 'https://via.placeholder.com/300x200' },
  { id: 5, title: '공약 5', description: '안전하고 깨끗한 환경!', image: 'https://via.placeholder.com/300x200' },
  { id: '6_emoji', title: '공유 프린터기', description: '언제 어디서든 편리하게, \n 공유 프린터로 학습 효율 UP!', image: emojiPrinter, detailId: 6 },
  
];

const PledgeCard = ({ id, title, description, image, detailId }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Col md={4} className="mb-4">
      <Link to={`/pledge/${detailId || id}`} className="text-decoration-none">
        <Card ref={ref} className={`pledge-card ${inView ? 'visible' : ''}`}>
          {id === '6_emoji' ? (
            <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center">
              <img src={image} alt={title} className="pledge-emoji-img mb-3" />
              <Card.Title>{title}</Card.Title>
              <Card.Text className="highlight-text pre-wrap-text">{description}</Card.Text>
            </Card.Body>
          ) : (
            <>
              <Card.Img variant="top" src={image} />
              <Card.Body className="p-4">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="highlight-text pre-wrap-text">{description}</Card.Text>
              </Card.Body>
            </>
          )}
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
            <PledgeCard key={pledge.id} id={pledge.id} title={pledge.title} description={pledge.description} image={pledge.image} detailId={pledge.detailId} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pledges;

