import css from './Transaction.module.css';

export default function TransactionTable({ id, type, amount, currency }) {
  return (
    <tr key={id} className={css.trow}>
      <td className={css.trow_data}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}