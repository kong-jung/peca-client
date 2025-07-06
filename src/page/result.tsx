// TODO: 이 페이지의 값들은 추후 react-query로 백엔드에서 받아오도록 처리
import React from "react";
import styled from "@emotion/styled";
import { useCardStore } from "../store/cardStore";
import icon from "../assets/icon.png";

const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  margin: 60px 0 0 80px;
`;
const Card = styled.div`
  width: 500px;
  height: 600px;
  background: radial-gradient(ellipse at 70% 30%, #6a8dff 60%, #bcbcff 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 24px 16px 16px 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;
const CardProfile = styled.div`
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 120px;
`;
const CardIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #f2f2f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #bcbcff;
  margin-bottom: 8px;
`;
const CardIconImage = styled.img`
  width: 64px;
  height: 64px;
`;
const CardNameAff = styled.div`
  display: flex;
  align-items: center;
  min-height: 48px;
  justify-content: flex-start;
  gap: 12px;
`;
const CardName = styled.div`
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 2px;
`;
const CardAff = styled.div`
  font-size: 18px;
  color: #e0e0ff;
`;
const CardJob = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin: 12px 0 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const CardLinksWrap = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;
const CardLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #6a8dff;
  border-radius: 12px;
  padding: 4px 16px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: #e5d8ff;
  }
`;
const CardQuote = styled.div`
  margin: 18px 0 20px 0;
  font-size: 20px;
  color: #fff;
  text-align: center;
  width: 100%;
`;
const CardActivity = styled.div`
  background: rgba(255,255,255,0.3);
  border-radius: 12px;
  padding: 18px 20px;
  width: 90%;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const CardActivityName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`;
const CardActivityPeriod = styled.div`
  font-size: 14px;
  color: #e0e0ff;
  margin-bottom: 4px;
`;
const CardActivityDesc = styled.div`
  font-size: 15px;
  color: #fff;
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  margin-top: 10px;
  width: 50%;
  margin-right: 160px;
`;
const InfoName = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 8px;
`;
const InfoAff = styled.div`
  font-size: 22px;
  color: #888;
  margin-bottom: 18px;
`;
const InfoDesc = styled.div`
  font-size: 18px;
  color: #444;
  margin-bottom: 24px;
  max-width: 700px;
`;
const InfoProject = styled.div`
  background: linear-gradient(90deg, #6a8dff 60%, #bcbcff 100%);
  color: #fff;
  border-radius: 10px;
  padding: 18px 24px;
  font-size: 18px;
  margin-bottom: 32px;
`;
const InfoProjectTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2px;
`;
const InfoProjectPeriod = styled.span`
  font-size: 15px;
  color: #dbe6ff;
  margin-left: 12px;
`;
const InfoProjectDesc = styled.div`
  font-size: 15px;
  margin-top: 6px;
`;
const InfoUrl = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 18px;
`;
const InfoUrlLink = styled.a`
  font-size: 20px;
  color: #222;
  display: block;
  margin-bottom: 12px;
  text-decoration: none;
`;
const BtnRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 40px;
`;
const Btn = styled.button`
  width: 180px;
  height: 56px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border: 2px solid #bcbcff;
  background: #fff;
  color: #6a8dff;
  right: 0;
`;
const BtnPrimary = styled(Btn)`
  background: #6a8dff;
  color: #fff;
`;

const Result: React.FC = () => {
  const card = useCardStore();
  return (
    <PageWrapper>
      <Content>
        <Card>
          <CardProfile>
            <CardIcon><CardIconImage src={icon} alt="icon" /></CardIcon>
          </CardProfile>
          <CardNameAff>
            <CardName>{card.name || "백엔드처리"}</CardName>
            <CardAff>{card.aff || "백엔드처리"}</CardAff>
          </CardNameAff>
          <CardJob>{card.job || "백엔드처리"}</CardJob>
          <CardLinksWrap>
            {card.insta && (
              <CardLink href={card.insta.startsWith('http') ? card.insta : `https://instagram.com/${card.insta}`} target="_blank" rel="noopener noreferrer">
                인스타
              </CardLink>
            )}
            {card.github && (
              <CardLink href={card.github.startsWith('http') ? card.github : `https://github.com/${card.github}`} target="_blank" rel="noopener noreferrer">
                깃허브
              </CardLink>
            )}
            {card.mail && (
              <CardLink href={`mailto:${card.mail}`}>
                메일
              </CardLink>
            )}
          </CardLinksWrap>
          <CardQuote>“{card.quote || "백엔드처리"}”</CardQuote>
          <CardActivity>
            <CardActivityName>{card.activityName || "백엔드처리"}</CardActivityName>
            <CardActivityPeriod>{card.activityPeriod || "백엔드처리"}</CardActivityPeriod>
            <CardActivityDesc>{card.activityDesc || "백엔드처리"}</CardActivityDesc>
          </CardActivity>
        </Card>
        <InfoSection>
          <InfoName>{card.name || "백엔드처리"}</InfoName>
          <InfoAff>{card.aff || "백엔드처리"}</InfoAff>
          {/* TODO: 소개(InfoDesc)도 백엔드에서 받아오기 */}
          <InfoDesc>
            {card.job && card.quote
              ? `백엔드처리`
              : `백엔드처리`}
          </InfoDesc>
          {/* TODO: 프로젝트명, 기간, 설명 등도 백엔드에서 받아오기 */}
          <InfoProject>
            <InfoProjectTitle>{card.activityName || "백엔드처리"}
              <InfoProjectPeriod>{card.activityPeriod || "백엔드처리"}</InfoProjectPeriod>
            </InfoProjectTitle>
            <InfoProjectDesc>{card.activityDesc || "백엔드처리"}</InfoProjectDesc>
          </InfoProject>
          <InfoUrl>깃허브</InfoUrl>
          <InfoUrlLink href={card.github || "백엔드처리"} target="_blank" rel="noopener noreferrer">{card.github || "백엔드처리"}</InfoUrlLink>
          <InfoUrl>인스타</InfoUrl>
          <InfoUrlLink href={card.insta || "백엔드처리"} target="_blank" rel="noopener noreferrer">{card.insta || "백엔드처리"}</InfoUrlLink>
          <InfoUrl>메일</InfoUrl>
          <InfoUrlLink href={card.mail || "백엔드처리"} target="_blank" rel="noopener noreferrer">{card.mail || "백엔드처리"}</InfoUrlLink>
          <BtnRow>
            <Btn>복사하기</Btn>
            <BtnPrimary>명함 수정하기</BtnPrimary>
          </BtnRow>
        </InfoSection>
      </Content>
    </PageWrapper>
  );
};

export default Result;
