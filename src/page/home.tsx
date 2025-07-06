import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  background: #9796F0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  padding-top: 150px;
  font-size: 120px;
  font-weight: 1000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Body = styled.p`
  font-size: 24px;
  font-weight: 10;
  color: #fff;
  margin-top: 12px;
  text-align: center;
`;

const Button = styled.button`
  width: 300px;
  height: 80px;
  background: none;
  border: 5px solid #fff;
  border-radius: 12px;
  color: #fff;
  font-size: 24px;
  font-weight: 1000;
  margin-top: 240px;
  cursor: pointer;
`;

const home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <Header>
        PECA
        <Body>비즈니스적인 명함 교환에 지치셨나요?<br />
        딱딱한 명함 교환은 잠시 내려두고 사적인 명함 교환을 해보세요!</Body>
      </Header>
      <Button onClick={() => navigate('/make')}>명함만들기</Button>
    </HomeWrapper>
  );
};

export default home; 