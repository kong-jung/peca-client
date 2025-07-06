import styled from '@emotion/styled';
import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Card = styled.div<{bg: string}>`
  width: 320px;
  height: 180px;
  border-radius: 20px;
  background: ${({ bg }) => bg};
  color: #fff;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

const School = styled.div`
  font-size: 12px;
`;

const Job = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const Motto = styled.div`
  font-size: 12px;
  margin: 8px 0;
`;

const TagRow = styled.div`
  display: flex;
  gap: 8px;
`;

const Tag = styled.a`
  background: #fff2;
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
`;

export interface TagType {
  type: "github" | "instagram" | "mail";
  value: string;
}
export interface CardType {
  id: number;
  name: string;
  school: string;
  job: string;
  motto: string;
  tags: TagType[];
  color: string;
  profile: string;
}

export default function CardItem({ card }: { card: CardType }) {
  return (
    <Card bg={card.color}>
      <TopRow>
        <ProfileImg src={card.profile} alt="profile" />
        <div>
          <Name>{card.name}</Name>
          <School>{card.school}</School>
        </div>
      </TopRow>
      <div>
        <Job>{card.job}</Job>
        <Motto>{card.motto}</Motto>
        <TagRow>
          {card.tags.map((tag) => {
            if (tag.type === "github")
              return <Tag key="github" href={`https://github.com/${tag.value}`} target="_blank" rel="noopener noreferrer"><FaGithub />깃허브</Tag>;
            if (tag.type === "instagram")
              return <Tag key="instagram" href={`https://instagram.com/${tag.value}`} target="_blank" rel="noopener noreferrer"><FaInstagram />인스타</Tag>;
            if (tag.type === "mail")
              return <Tag key="mail" href={`mailto:${tag.value}`}><FaEnvelope />메일</Tag>;
            return null;
          })}
        </TagRow>
      </div>
    </Card>
  );
}