import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// 임시 데이터
const pledgeData = {
  '1': { title: '공약 1', summary: '학생들의 복지를 위한 약속!', description: '공약 1에 대한 상세 설명입니다. 학생들의 편안하고 즐거운 학교 생활을 위해... (상세 내용)' },
  '2': { title: '공약 2', summary: '더 즐거운 학교 생활!', description: '공약 2에 대한 상세 설명입니다. 모두가 함께 참여하고 즐길 수 있는... (상세 내용)' },
  '3': { title: '공약 3', summary: '소통으로 만드는 학교!', description: '공약 3에 대한 상세 설명입니다. 학생들의 의견을 적극적으로 반영하여... (상세 내용)' },
  '4': { title: '공약 4', summary: '학업 스트레스 타파!', description: '공약 4에 대한 상세 설명입니다. 다양한 프로그램을 통해 학업 부담을 줄이고... (상세 내용)' },
  '5': { title: '공약 5', summary: '안전하고 깨끗한 환경!', description: '공약 5에 대한 상세 설명입니다. 학교 시설을 개선하고... (상세 내용)' },
};

const PledgeDetail = () => {
  const { id } = useParams();
  const pledge = pledgeData[id];

  return (
    <Container className="py-5">
      <h1 className="pledge-detail-title text-center mb-3">{pledge.title}</h1>
      <p className="text-center highlight-text mb-5">{pledge.summary}</p>
      <p style={{ fontSize: '1.2rem' }}>{pledge.description}</p>
    </Container>
  );
};

export default PledgeDetail;