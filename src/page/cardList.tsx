import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CardItem, { type CardType, type TagType } from '../components/cardItem';
import { supabase } from '../supabaseClient';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 32px;
  padding: 40px 0;
  justify-items: center;
`;

// 숫자 color를 gradient로 변환하는 함수
const colorMap = [
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
  'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
  'linear-gradient(135deg, #ffb347 0%, #ffcc33 100%)',
  'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
  'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
  'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
];

export default function CardList() {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const { data, error } = await supabase.from('card').select('*');
      if (error) {
        console.error(error);
        return;
      }
      const mapped = (data ?? []).map((row: any) => {
        const tags: TagType[] = [];
        if (row.url1) tags.push({ type: 'instagram', value: row.url1 });
        if (row.url2) tags.push({ type: 'github', value: row.url2 });
        // color가 숫자면 gradient로 변환, 아니면 그대로 사용
        let color = colorMap[0];
        if (typeof row.color === 'number' && colorMap[row.color]) {
          color = colorMap[row.color];
        } else if (typeof row.color === 'string') {
          color = row.color;
        }
        return {
          id: row.card_id,
          name: row.u_name,
          school: row.affiliation,
          job: row.job,
          motto: row.moto,
          tags,
          color,
          profile: '/default-profile.png', // 기본 이미지 경로 사용
        };
      });
      setCards(mapped);
    };
    fetchCards();
  }, []);

  return (
    <Grid>
      {cards.map((card: CardType) => (
        <CardItem key={card.id} card={card} />
      ))}
    </Grid>
  );
}