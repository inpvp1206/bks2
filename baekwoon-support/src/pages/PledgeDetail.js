import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import emojiPrinter from '../assets/compare/공약 1, 이모지.svg';
import photoPrinter from '../assets/compare/공약 1, 사진.png';

// 임시 데이터
const pledgeData = {
  '1': { title: '공약 1', summary: '학생들의 복지를 위한 약속!', description: '공약 1에 대한 상세 설명입니다. 학생들의 편안하고 즐거운 학교 생활을 위해... (상세 내용)' },
  '2': { title: '공약 2', summary: '더 즐거운 학교 생활!', description: '공약 2에 대한 상세 설명입니다. 모두가 함께 참여하고 즐길 수 있는... (상세 내용)' },
  '3': { title: '공약 3', summary: '소통으로 만드는 학교!', description: '공약 3에 대한 상세 설명입니다. 학생들의 의견을 적극적으로 반영하여... (상세 내용)' },
  '4': { title: '공약 4', summary: '학업 스트레스 타파!', description: '공약 4에 대한 상세 설명입니다. 다양한 프로그램을 통해 학업 부담을 줄이고... (상세 내용)' },
  '5': { title: '공약 5', summary: '안전하고 깨끗한 환경!', description: '공약 5에 대한 상세 설명입니다. 학교 시설을 개선하고... (상세 내용)' },
  '6': { 
    title: '공유 프린터기 설치', 
    summary: '언제 어디서든 편리하게,\n공유 프린터로 학습 효율 UP!', 
    description: '학생들의 학습 편의를 위해 공유 프린터기를 설치할 계획입니다. 현재 학교에는 학생들이 자유롭게 사용할 수 있는 프린터가 부족하여 불편함을 겪는 경우가 많습니다. 이에 저희는 1, 2학년 학생들이 주로 사용하는 공간에 하나, 그리고 3학년 학생들이 주로 사용하는 공간에 하나, 총 두 대의 공유 프린터기를 설치하여 모든 학생들이 필요한 자료를 쉽고 빠르게 인쇄할 수 있도록 지원할 것입니다. 이를 통해 학습 자료 준비 시간을 단축하고, 더욱 효율적인 학습 환경을 조성할 수 있을 것입니다.' 
  },
};

const PledgeDetail = () => {
  const { id } = useParams();
  const pledge = pledgeData[id];

  if (!pledge) {
    return <Container className="py-5 text-center">공약을 찾을 수 없습니다.</Container>;
  }

  return (
    <Container className="py-5">
      {id === '6' ? (
        <div className="text-center mb-3">
          <Image src={photoPrinter} alt={pledge.title} fluid style={{ height: 'auto' }} />
        </div>
      ) : (
        <h1 className="pledge-detail-title text-center mb-3">{pledge.title}</h1>
      )}
      <p className="text-center highlight-text mb-3">{pledge.summary.split('\n').map((line, index) => (<React.Fragment key={index}>{line}{index < pledge.summary.split('\n').length - 1 && <br />}</React.Fragment>))}</p>
      <p style={{ fontSize: '1.4rem', lineHeight: '1.1' }}>{pledge.description}</p>
    </Container>
  );
};

export default PledgeDetail;
