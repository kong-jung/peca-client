import React from "react";
import styled from "@emotion/styled";
import { FaRegBell } from "react-icons/fa";
import icon from "../assets/icon.png";

const Name = styled.p`
    font-size: 32px;
    color: #000;
    font-weight: 1000;
`

const HeaderWrapper = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  box-sizing: border-box;
  position: relative;
`;

const Service = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 100px;
`;

const SearchBox = styled.input`
  background: #f2f2f6;
  border: none;
  border-radius: 12px;
  padding: 8px 16px;
  font-size: 16px;
  width: 240px;
  margin-right: 48px;
  color: #888;
  &::placeholder {
    color: #888;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const MenuItem = styled.div`
  color: #D8D8D8;
  font-size: 18px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Badge = styled.span`
  background: #e5d8ff;
  color: #7c5dfa;
  border-radius: 12px;
  font-size: 16px;
  padding: 2px 10px;
  margin-left: 4px;
`;

const Inter = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Bell = styled.span`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const User = styled.span`
  color: #ccc;
  font-size: 16px;
  border-radius: 12px;
  padding: 4px;
`;

const UserIcon = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f2f2f6;
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Service>
        <img src={icon} alt="icon" style={{ width: 40, height: 40 }} />
        <Name>PECA</Name>
      </Service>
      <Main>
        <SearchBox placeholder="search" />
      </Main>
      <Menu>
        <MenuItem>
          프로필 <Badge>13</Badge>
        </MenuItem>
        <MenuItem>
          명함 그룹 <Badge>04</Badge>
        </MenuItem>
        <MenuItem>
          명함 <Badge>10</Badge>
        </MenuItem>
      </Menu>
      <Inter>
        <Bell><FaRegBell /></Bell>
        <UserIcon><circle /></UserIcon>
        <User>장인정신</User>
      </Inter>
    </HeaderWrapper>
  );
};

export default Header; 