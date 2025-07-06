import styled from '@emotion/styled';
import FriendCard from '../components/FriendCard';
import { dummyFriends } from '../data/dummyFriend';

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 40px 0 0 60px;
`;
const Sub = styled.div`
  font-size: 20px;
  color: #888;
  margin: 4px 0 32px 60px;
`;
const ScrollContainer = styled.div`
  width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 24px;
`;
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 40px 0 40px 60px;
  min-width: max-content;
`;

export default function FriendList() {
  return (
    <div>
      <Title>지금까지 교환된 친구</Title>
      <Sub>{dummyFriends.length}개</Sub>
      <ScrollContainer>
        <Grid>
          {dummyFriends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </Grid>
      </ScrollContainer>
    </div>
  );
}
