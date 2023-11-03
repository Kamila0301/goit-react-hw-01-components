import {
  TransTable,
  TransHead,
  TransRow,
  TransLi,
  TransBody,
  TransUl,
  TransLiB,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransTable>
      <TransHead>
        <TransRow>
          <TransLi>Type</TransLi>
          <TransLi>Amount</TransLi>
          <TransLi>Currency</TransLi>
        </TransRow>
      </TransHead>

      <TransBody>
        {items.map(item => {
          return (
            <TransUl key={item.id}>
              <TransLiB>{item.type}</TransLiB>
              <TransLiB>{item.amount}</TransLiB>
              <TransLiB>{item.currency}</TransLiB>
            </TransUl>
          );
        })}
      </TransBody>
    </TransTable>
  );
};
