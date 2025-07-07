import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';

import seoha from '../images/전교회장 서하선.jpeg';
import eunseo from '../images/2학년 부회장 정은서.jpeg';
import inseo from '../images/2학년 부회장 조인서.jpeg';
import seoa from '../images/1학년 부회장 김서아.jpeg';
import haewon from '../images/1학년 부회장 이해원.jpeg';

// 임시 데이터
const candidateData = {
  'seoha': { name: '서하선', position: '전교회장', image: seoha, summary: '여러분의 든든한 버팀목이 되겠습니다!', description: '서하선 후보의 상세 소개입니다. (상세 내용)', instagram: 'https://www.instagram.com/seoha_sun/' },
  'eunseo': { name: '정은서', position: '2학년 부회장', image: eunseo, summary: '언제나 여러분의 목소리에 귀 기울이겠습니다!', description: '정은서 후보의 상세 소개입니다. (상세 내용)', instagram: 'https://www.instagram.com/eunseo_jeong/' },
  'inseo': { name: '조인서', position: '2학년 부회장', image: inseo, summary: '실천하는 열정으로 보답하겠습니다!', description: '조인서 후보의 상세 소개입니다. (상세 내용)', instagram: 'https://www.instagram.com/inseo_cho/' },
  'seoa': { name: '김서아', position: '1학년 부회장', image: seoa, summary: '긍정 에너지로 가득한 학교를 만들겠습니다!', description: '김서아 후보의 상세 소개입니다. (상세 내용)', instagram: 'https://www.instagram.com/seoa_kim/' },
  'haewon': { name: '이해원', position: '1학년 부회장', image: haewon, summary: '항상 여러분 곁에서 함께 하겠습니다!', description: '이해원 후보의 상세 소개입니다. (상세 내용)', instagram: 'https://www.instagram.com/haewon_lee/' },
};

const CandidateDetail = () => {
  const { id } = useParams();
  const candidate = candidateData[id];

  return (
    <Container className="py-5 text-center">
      <Image src={candidate.image} fluid className="mb-3 candidate-image" style={{ maxWidth: '300px', borderRadius: '20px' }} />
      <h1 className="pledge-detail-title mt-4">{candidate.name}</h1>
      <h4 style={{fontFamily: 'TJ Singing Joy', fontWeight: 700}}>{candidate.position}</h4>
      <p className="highlight-text my-3">{candidate.summary}</p>
      <p style={{ fontSize: '1.2rem' }}>{candidate.description}</p>
      {candidate.instagram && (
        <p className="mt-4">
          <a href={candidate.instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', color: '#007bff', textDecoration: 'none' }}>
            Instagram 방문하기
          </a>
        </p>
      )}
    </Container>
  );
};

export default CandidateDetail;