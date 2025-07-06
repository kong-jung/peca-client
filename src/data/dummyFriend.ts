import type { CardType } from '../components/cardItem';

export interface FriendCardType extends CardType {
  activityName: string;
  activityPeriod: string;
  activityDesc: string;
}

export const dummyFriends: FriendCardType[] = [
  {
    id: 101,
    name: "김민수",
    school: "서울과학고등학교",
    job: "AI Engineer",
    motto: "끊임없이 배우고 성장하자",
    tags: [
      { type: "github" as const, value: "kimminsu" },
      { type: "instagram" as const, value: "minsu_ai" },
      { type: "mail" as const, value: "minsu@ai.com" }
    ],
    color: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
    profile: "https://avatars.githubusercontent.com/u/101?v=4",
    activityName: "AI 챌린지",
    activityPeriod: "2023.01 ~ 2023.12",
    activityDesc: "AI 모델 개발 및 대회 수상 경험"
  },
  {
    id: 102,
    name: "박지현",
    school: "대전외국어고등학교",
    job: "UX Designer",
    motto: "디자인은 소통이다",
    tags: [
      { type: "github" as const, value: "jihyunpark" },
      { type: "instagram" as const, value: "jihyun_design" },
      { type: "mail" as const, value: "jihyun@ux.com" }
    ],
    color: "linear-gradient(135deg, #ffb347 0%, #ffcc33 100%)",
    profile: "https://avatars.githubusercontent.com/u/102?v=4",
    activityName: "디자인 프로젝트",
    activityPeriod: "2022.03 ~ 2022.12",
    activityDesc: "앱 UX/UI 디자인 및 사용자 테스트"
  },
  {
    id: 103,
    name: "이수빈",
    school: "부산국제고등학교",
    job: "Data Scientist",
    motto: "데이터로 세상을 바꾸자",
    tags: [
      { type: "github" as const, value: "soobinlee" },
      { type: "instagram" as const, value: "soobin_data" },
      { type: "mail" as const, value: "soobin@data.com" }
    ],
    color: "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)",
    profile: "https://avatars.githubusercontent.com/u/103?v=4",
    activityName: "데이터 분석 경진대회",
    activityPeriod: "2021.09 ~ 2022.02",
    activityDesc: "공공 데이터 활용 분석 및 시각화"
  },
  {
    id: 104,
    name: "최유진",
    school: "경기과학고등학교",
    job: "Web Developer",
    motto: "코드는 예술이다",
    tags: [
      { type: "github" as const, value: "yujinchoi" },
      { type: "instagram" as const, value: "yujin_web" },
      { type: "mail" as const, value: "yujin@web.com" }
    ],
    color: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
    profile: "https://avatars.githubusercontent.com/u/104?v=4",
    activityName: "웹 서비스 개발",
    activityPeriod: "2022.05 ~ 2023.03",
    activityDesc: "실시간 채팅 웹앱 개발 및 배포"
  },
  {
    id: 105,
    name: "정하늘",
    school: "광주과학고등학교",
    job: "Mobile App Developer",
    motto: "도전은 나의 힘",
    tags: [
      { type: "github" as const, value: "haneuljung" },
      { type: "instagram" as const, value: "haneul_mobile" },
      { type: "mail" as const, value: "haneul@app.com" }
    ],
    color: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    profile: "https://avatars.githubusercontent.com/u/105?v=4",
    activityName: "모바일 앱 공모전",
    activityPeriod: "2023.04 ~ 2023.10",
    activityDesc: "헬스케어 앱 개발 및 공모전 수상"
  }
]; 