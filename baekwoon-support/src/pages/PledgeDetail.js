import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import emojiPrinter from '../assets/compare/공약 1, 이모지.svg';
import photoPrinter from '../assets/compare/공약 1, 사진.png';
import photoPledge2 from '../assets/compare/공약2.png';
import photoPledge3 from '../assets/compare/공약3.png';
import photoPledge4 from '../assets/compare/공약4.png';
import photoPledge5 from '../assets/compare/공약5.png';
import photoPledge6 from '../assets/compare/공약6.png';

// 임시 데이터
const pledgeData = {
  '1': { 
    title: '공유 프린터기 설치', 
    summary: '언제 어디서든 편리하게,\n공유 프린터로 학습 효율 UP!', 
    description: ' 현재 학교에는 학생들이 자유롭게 사용할 수 있는 프린터가 부족하여 불편함을 겪는 경우가 많습니다.\n 이에 저희는 1, 2학년 학생들이 주로 사용하는 공간에 하나, 그리고 3학년 학생들이 주로 사용하는 공간에 하나, 총 두 대의 공유 프린터기를 설치하여 모든 학생들이 필요한 자료를 쉽고 빠르게 인쇄할 수 있도록 지원할 것입니다.\n 이를 통해 학습 자료 준비 시간을 단축하고, 더욱 효율적인 학습 환경을 조성할 수 있을 것입니다.' 
  ,image : photoPrinter},
  '2': { 
    title: '백운 앱 개발', 
    summary: '스마트한 학교 생활을 위한 필수 앱!\n백운 앱으로 편리함을 더하다!', 
    description: ' 학생들의 학교 생활을 더욱 편리하게 만들어 줄 백운 앱을 개발할 예정입니다.\n 이 앱은 급식 메뉴, 학사 일정, 시간표, 프로젝트 인원 매칭 , 학교 공지사항 등 학생들이 필요로 하는 모든 정보를 한곳에 모아 제공할 것입니다. 또한, 익명 건의함, 설문조사 기능 등을 통해 학생들의 의견을 실시간으로 수렴하고 학교 운영에 반영할 수 있는 소통의 창구 역할도 할 것입니다.\n 저희가 만들 백운 앱을 통해 학생들은 필요한 정보를 빠르게 얻고, 학교와 더욱 활발하게 소통하며, 스마트한 학교 생활을 누릴 수 있을 것입니다.', 
    image: photoPledge2 
  },
  '3': { 
    title: '백운 독서실', 
    summary: '나만의 학습 공간,\n백운 독서실에서 집중력 UP!', 
    description: ' 현재 학교 내 학습 공간이 부족하여 학생들이 학습에 어려움을 겪는 경우가 많습니다.\n 이에 저희는 점심시간에 기존 유휴 공간(대강의실, 진로카페)를 활용하여 개인별 학습 공간이 확보된 독서실을 운영하여 최적의 학습 환경을 제공할 것입니다. 또한, 백운 독서실의 출석이 누적됨에 따라 이를 보상하는 시스템을 구축하여 많은 학생들의 자기주도학습을 유도할 것 입니다.\n 백운 독서실을 통해 학생들은 학습 효율을 높이고, 학업 성취도를 향상시킬 수 있을 것입니다.', 
    image: photoPledge3 
  },
  '4': { 
    title: '스터디 윗 백운', 
    summary: '함께 성장하는 즐거움,\n스터디 윗 백운과 다함께 학업 성취!', 
    description: ' 학생들이 서로 협력하며 학습 능력을 향상시킬 수 있도록 스터디 윗 백운 프로그램을 운영할 예정입니다. \n 스터디 윗 백운 프로그램을 진행하며 학생회가 학년별 학습자료, 질문방을 개설하고 열정을 품은 타이머(열품타) 스터디 그룹을 운영하여\n 학생들의 자기 주도 학습 능력을 키우고, 협력 학습을 통해 함께 성장하는 즐거움을 경험할 수 있게끔 할 것입니다.', 
    image: photoPledge4 
  },
  '5': { 
    title: '백운고 인스타 활성화', 
    summary: '학교 소식을 한눈에!\n백운고 인스타로 소통 UP!', 
    description: ' 학생들과 학교 간의 소통을 활성화하고 학교 소식을 더욱 빠르고 재미있게 전달하기 위해 백운고 인스타그램을 활성화할 계획입니다. \n 학교 행사 내용을 중심으로 학생들이 궁금해하는 다양한 정보를 인스타그램을 통해 실시간으로 공유하고, 학생들의 참여를 유도하는 이벤트 (점심시간 버스킹, 릴스 이벤트 등) 를 진행하여 소통을 강화할 것입니다. \n 더욱 활성화된 백운고 인스타그램을 통해 학생들은 학교 소식을 더욱 쉽게 접하고, 학교와 더욱 가까워질 수 있을 것입니다.', 
    image: photoPledge5 
  },
  '6': { 
    title: '수험생 응원 이벤트', 
    summary: '시험을 앞둔 모든 학생들을 \n 백운 서포터즈가 응원합니다!', 
    description: ' 시험 (중간고사 / 기말고사, 수능) 을 앞둔 수험생들을 응원하고 격려하기 위한 수험생 응원 이벤트를 개최할 예정입니다. \n 이 이벤트는 후배의 수능 응원 메시지및 간식 전달, 내신 시험 응원 간식 제공, 스트레스 해소를 위한 프로그램 운영 등 다양한 방식으로 진행될 것입니다. \n 이러한 이벤트 진행을 통해 학생들은 친구, 선/후배의 따뜻한 마음을 느끼며 힘을 얻을 수 있을 것입니다.', 
    image: photoPledge6 
  },
};

const PledgeDetail = () => {
  const { id } = useParams();
  const pledge = pledgeData[id];

  if (!pledge) {
    return <Container className="py-5 text-center">공약을 찾을 수 없습니다.</Container>;
  }

  return (
    <>
      <Image src={pledge.image} alt={pledge.title} fluid className="mb-4" style={{ width: '100%', objectFit: 'cover', maxHeight: '300px' }} />
      <Container>
        
        <p className="text-center highlight-text mb-3 pre-wrap-text">{pledge.summary}</p>
        <p className="pre-wrap-text" style={{ fontSize: '1.4rem', lineHeight: '1.3' }}>{pledge.description}</p>
      </Container>
    </>
  );
};

export default PledgeDetail;
