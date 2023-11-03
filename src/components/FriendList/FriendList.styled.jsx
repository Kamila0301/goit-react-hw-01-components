import styled from 'styled-components';

export const SectionFriend = styled.div`
  width: 300px;
  height: 100%;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const ListItem = styled.ul`
  width: 300px;
`;

export const ListFriend = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  gap: 15px;
  box-shadow: 0px 1px 1px 1px rgba(150, 150, 150, 1);
  border-radius: 10px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50%;
`;

export const Photo = styled.img`
  border-radius: 10px;
  background-color: grey;
  padding: 5px;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 600;
`;
