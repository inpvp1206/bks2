import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import seoha from '../images/전교회장 서하선.jpeg';
import eunseo from '../images/2학년 부회장 정은서.jpeg';
import inseo from '../images/2학년 부회장 조인서.jpeg';
import seoa from '../images/1학년 부회장 김서아.jpeg';
import haewon from '../images/1학년 부회장 이해원.jpeg';

const candidates = [
  { id: 'seoha', name: '서하선', position: '전교회장', image: seoha, summary: '여러분의 든든한 버팀목이 되겠습니다!' },
  { id: 'eunseo', name: '정은서', position: '2학년 부회장', image: eunseo, summary: '언제나 여러분의 목소리에 귀 기울이겠습니다!' },
  { id: 'inseo', name: '조인서', position: '2학년 부회장', image: inseo, summary: '실천하는 열정으로 보답하겠습니다!' },
  { id: 'seoa', name: '김서아', position: '1학년 부회장', image: seoa, summary: '긍정 에너지로 가득한 학교를 만들겠습니다!' },
  { id: 'haewon', name: '이해원', position: '1학년 부회장', image: haewon, summary: '항상 여러분 곁에서 함께 하겠습니다!' },
];

const CandidateCard = ({ id, name, position, image, summary }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Col md={4} className="text-center mb-4">
      <Link to={`/candidate/${id}`} className="text-decoration-none">
        <div ref={ref} className={`candidate-card-wrapper ${inView ? 'visible' : ''}`}>
          <div className="p-4 candidate-card">
            <Image src={image} fluid className="mb-3 candidate-image" />
            <h4>{name}</h4>
            <p>{position}</p>
            <span className="highlight-text">{summary}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};

const Candidates = () => {
  return (
    <section id="candidates">
      <Container>
        <h2 className="text-center section-title">우리를 소개합니다</h2>
        <Row className="justify-content-center">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate.id} id={candidate.id} name={candidate.name} position={candidate.position} image={candidate.image} summary={candidate.summary} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Candidates;