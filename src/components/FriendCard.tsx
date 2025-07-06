import styled from "@emotion/styled";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import type { FriendCardType } from "../data/dummyFriend";

const Card = styled.div<{bg: string}>`
  width: 500px;
  height: 600px;
  background: ${({ bg }) => bg};
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 24px 16px 16px 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-bottom: 32px;
`;
const CardProfile = styled.div`
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

export default function FriendCard({ friend }: { friend: FriendCardType }) {
  return (
    <Card bg={friend.color}>
      <CardProfile>
        <CardIcon><CardIconImage src={friend.profile} alt="icon" /></CardIcon>
      </CardProfile>
      <CardNameAff>
        <CardName>{friend.name}</CardName>
        <CardAff>{friend.school}</CardAff>
      </CardNameAff>
      <CardJob>{friend.job}</CardJob>
      <CardLinksWrap>
        {friend.tags.map(tag => {
          if (tag.type === "instagram")
            return <CardLink key="instagram" href={`https://instagram.com/${tag.value}`} target="_blank" rel="noopener noreferrer"><FaInstagram /> 인스타</CardLink>;
          if (tag.type === "github")
            return <CardLink key="github" href={`https://github.com/${tag.value}`} target="_blank" rel="noopener noreferrer"><FaGithub /> 깃허브</CardLink>;
          if (tag.type === "mail")
            return <CardLink key="mail" href={`mailto:${tag.value}`}><FaEnvelope /> 메일</CardLink>;
          return null;
        })}
      </CardLinksWrap>
      <CardQuote>“{friend.motto}”</CardQuote>
      <CardActivity>
        <CardActivityName>{friend.activityName}</CardActivityName>
        <CardActivityPeriod>{friend.activityPeriod}</CardActivityPeriod>
        <CardActivityDesc>{friend.activityDesc}</CardActivityDesc>
      </CardActivity>
    </Card>
  );
} 