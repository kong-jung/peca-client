import styled from '@emotion/styled';
import CardItem, { type CardType } from '../components/cardItem';
import { dummyCards } from '../data/dummyCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 32px;
  padding: 40px 0;
  justify-items: center;
`;

export default function CardList() {
  return (
    <Grid>
      {dummyCards.map((card: CardType) => (
        <CardItem key={card.id} card={card} />
      ))}
    </Grid>
  );
}