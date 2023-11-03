import styled from 'styled-components';

export const Section = styled.section`
  width: 300px;
  height: 100%;
  margin: 150px auto;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  color: black;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 20px 25px;
`;

export const Label = styled.span`
  font-size: 15px;
`;

export const Persentage = styled.span`
  font-size: 20px;
`;
