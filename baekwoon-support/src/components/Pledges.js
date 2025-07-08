
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import emojiPrinter from '../assets/compare/공약 1, 이모지.svg';
import photoPrinter from '../assets/compare/공약 1, 사진.png';
import emojiPledge2 from '../assets/compare/공약 2.svg';
import photoPledge2 from '../assets/compare/공약2.png';
import emojiPledge3 from '../assets/compare/공약3.svg';
import photoPledge3 from '../assets/compare/공약3.png';
import emojiPledge4 from '../assets/compare/공약 4.svg';
import photoPledge4 from '../assets/compare/공약4.png';
import emojiPledge5 from '../assets/compare/공약5.svg';
import photoPledge5 from '../assets/compare/공약5.png';
import emojiPledge6 from '../assets/compare/공약 6.svg';
import photoPledge6 from '../assets/compare/공약6.png';

const pledges = [
  { id: 1, title: '공약1. 공유 프린터기 설치', description: '언제 어디서든 편리하게, \n공유 프린터로 학습 효율 UP!', image: emojiPrinter, detailId: 1 },

  { id: 2, title: '공약2. 백운 앱 개발', description: '스마트한 학교 생활을 위한 \n 백운인들의 필수 앱!\n백운 앱으로 편리함을 더하다!', image: emojiPledge2, detailId: 2 },
  { id: 3, title: '공약3. 백운 독서실', description: '나만의 학습 공간,\n백운 독서실에서 집중력 UP!', image: emojiPledge3, detailId: 3 },
  { id: 4, title: '공약4. 스터디 윗 백운', description: '함께 성장하는 즐거움,\n스터디 윗 백운과 다함께 학업 성취!', image: emojiPledge4, detailId: 4 },
  { id: 5, title: '공약5. 백운고 인스타 활성화', description: '학교 소식을 한눈에!\n백운고 인스타로 소통 UP!', image: emojiPledge5, detailId: 5 },
  { id: 6, title: '공약6. 수험생 응원 이벤트', description: '시험을 앞둔 모든 학생들을 \n 백운 서포터즈가 응원합니다!', image: emojiPledge6, detailId: 6 },
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
          <Card.Img variant="top" src={image} style={{ maxHeight: '100px', objectFit: 'contain' }} />
          <Card.Body className="p-4">
            <Card.Title>{title}</Card.Title>
            <Card.Text className="highlight-text pre-wrap-text">{description}</Card.Text>
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
            <PledgeCard key={pledge.id} id={pledge.id} title={pledge.title} description={pledge.description} image={pledge.image} detailId={pledge.detailId} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pledges;

