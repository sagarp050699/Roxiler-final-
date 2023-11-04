import { useEffect, useState } from "react";
import axios from "axios";
import TransactionsList from "../components/TransactionsList";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const response = await axios.get("http://localhost:3000/api/transactions");
    const data = response.data;
    setTransactions(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (transactions.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      <div className="w-[90%]  max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-20">
          {transactions.map((transaction) => {
            return <TransactionsList {...transaction} key={transaction._id} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default TransactionsPage;
