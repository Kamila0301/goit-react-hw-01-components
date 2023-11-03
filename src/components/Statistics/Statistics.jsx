import {
  Section,
  Title,
  Stats,
  List,
  Label,
  Persentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <Stats>
        {stats.map(item => {
          return (
            <List key={item.id}>
              <Label>{item.label}</Label>
              <Persentage>{item.percentage}%</Persentage>
            </List>
          );
        })}
      </Stats>
    </Section>
  );
};
