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
  'seoha': { name: '서하선', position: '전교회장', image: seoha, summary: '2025 - 자치생활부원 \n 2024 - 1-6 반장 \n 자치생활부원 \n 2023 - 마동중학교 전교회장 \n 공로상 수상', description: '말이 아닌 변화로 증명하겠습니다.\n결과로 말하고, 책임으로 끝맺는 회장이 되겠습니다. \n 여러분의 기대가 실망으로 바뀌지 않도록,\n작은 약속 하나도 끝까지 지키겠습니다!', instagram: 'https://www.instagram.com/_hotsun/' },
  'eunseo': { name: '정은서', position: '2학년 부회장', image: eunseo, summary: '2025 - 2-6 반장 \n 학생회 봉사부원 \n 2024 - 1-3 반장 \n 학생회 봉사부원 \n 2023 - 대전 문정중 1학기 반장\n광양여중 3학년 2학기 대의원 ', description: '여러 번의 임원 활동을 통해,\n필요한 것을 먼저 알아차리고 \n 실천하는 경험을 쌓아왔습니다.\n눈에 띄지 않더라도, 문제를 놓치지 않고\n끝까지 책임지는 부회장이 되겠습니다!', instagram: 'https://www.instagram.com/_luves/' },
  'inseo': { name: '조인서', position: '2학년 부회장', image: inseo, summary: '2025 - 2-6 부반장 \n 학생회 임원 (방송부 차장)\n 아이티지 부장 \n 2024 - 1-7 부반장 \n 방송부 차장 \n 2023 - 마동중학교 방송부장 \n 공로상 수상', description: '저는 뼈속까지 T입니다. \n 사람의 마음을 얻는 선거에서는\n이 특성이 불리하게 작용할 수 있지만 \n 저만의 장점으로 문제를 분석하여\n해결법을 제시하는 실천적인 후보가 되겠습니다!', instagram: 'https://www.instagram.com/in_seo1206/' },
  'seoa': { name: '김서아', position: '1학년 부회장', image: seoa, summary: '2024 - 마동중학교 전교회장 \n 공로상 수상 \n 2023 - 마동중학교 전교부회장', description: '긍정은 분위기를 바꾸고, 책임감은 결과를 만듭니다. \n 저는 긍정으로 시작해, 책임감으로 마무리하겠습니다!', instagram: 'https://www.instagram.com/_s.30a0/' },
  'haewon': { name: '이해원', position: '1학년 부회장', image: haewon, summary: '2024 - 동광양중학교 3학년 반장 \n 동광양 중학교 문화 예술부원 \n 2023 - 동광양중학교 밴드부원', description: '언제나 같이 웃고 고민해줄 수 있는\n친구처럼 편한 부회장이 되어, \n 작지만 확실한 변화를 만들겠습니다!', instagram: 'https://www.instagram.com/_haewn1/' },
};

const CandidateDetail = () => {
  const { id } = useParams();
  const candidate = candidateData[id];

  return (
    <Container className="py-5 text-center">
      <Image src={candidate.image} fluid className="mb-3 candidate-image" style={{ maxWidth: '300px', borderRadius: '20px' }} />
      <h1 className="pledge-detail-title mt-4">{candidate.name}</h1>
      <h4 style={{fontFamily: 'TJ Singing Joy', fontWeight: 700}}>{candidate.position}</h4>
      <p className="highlight-text my-3 pre-wrap-text">{candidate.summary}</p>
      <p className="pre-wrap-text" style={{ fontSize: '1.2rem' }}>{candidate.description}</p>
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