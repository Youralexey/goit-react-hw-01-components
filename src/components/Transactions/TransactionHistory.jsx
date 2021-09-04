import PropTypes from "prop-types";
import TransactionTableHead from "./TransactionTableHead";
import TransactionTable from "./TransactionTable";
import css from "./Transaction.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transaction_history}>
      <thead>
        <TransactionTableHead />
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionTable
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
