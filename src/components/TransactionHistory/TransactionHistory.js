import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
    <div className={styles.transTable}>
    <table className={styles.transactionHistory}>
        <thead className={styles.table}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <tr key={item.id} className={styles.even} >
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}            
        </tbody>
    </table>
    </div>
)
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
        }),
    ),
};

export default TransactionHistory;