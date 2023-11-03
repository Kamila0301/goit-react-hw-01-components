import styled from 'styled-components';

export const Card = styled.div`
  width: 360px;
  height: 150px;
  margin: auto;
  padding: 100px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 120px;

  border-radius: 50%;
  background-color: grey;
  padding-bottom: 0;
`;

export const UserName = styled.p`
  font-size: 40px;

  color: black;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  font-size: 20px;
  color: grey;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 20px;
  color: grey;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 25px;
  border: 1px solid grey;
`;

export const Span = styled.span`
  display: block;
  font-size: 20px;
  color: grey;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 22px;
  color: black;
`;
