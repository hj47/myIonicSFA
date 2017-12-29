
import { Product, Insurance } from './Product';
export const Products: Product[] = [
  { id: 100, name: '삼성생명 New 통합 나이에 딱맞는 CI보험', age_from: 20, age_to: 60, faceAmount_from: 10000000, faceAmount_to: 1000000000,
    premium_from: 0, premium_to: 0, type_code: '통합' },
  { id: 110, name: '통합 유니버셜 프라임 종신보험 1.0', age_from: 20, age_to: 40, faceAmount_from: 10000000, faceAmount_to: 1000000000,
    premium_from: 0, premium_to: 0, type_code: '보장/종신' },
  { id: 120, name: '우리아이 통합 보장보험', age_from: 0, age_to: 10, faceAmount_from: 10000000, faceAmount_to: 1000000000,
    premium_from: 0, premium_to: 0, type_code: '통합' },
  { id: 130, name: '삼성생명 뉴 인덱스 변액 연금보험', age_from: 20, age_to: 70, faceAmount_from: 10000000, faceAmount_to: 1000000000,
    premium_from: 0, premium_to: 0, type_code: '금융/변액' }
];

export const Insurances: Insurance[] = [
  { id: 900, name: '소액질병치료비특약N', age_from: 20, age_to: 60, faceAmount_from: 10000000, faceAmount_to: 1000000000,
    premium_from: 0, premium_to: 0, type_code: '실손' },
  { id: 910, name: '교통재해사망특약D', age_from: 20, age_to: 60, faceAmount_from: 10000000, faceAmount_to: 1000000000,
    premium_from: 0, premium_to: 0, type_code: '사망' },
  { id: 920, name: '암사망특약D', age_from: 20, age_to: 60, faceAmount_from: 10000000, faceAmount_to: 1000000000,
    premium_from: 0, premium_to: 0, type_code: '사망' },
  { id: 930, name: '질병고도장애(1,2급)생활자금특약N', age_from: 20, age_to: 60, faceAmount_from: 10000000, faceAmount_to: 1000000000,
    premium_from: 0, premium_to: 0, type_code: '장애' }
];
