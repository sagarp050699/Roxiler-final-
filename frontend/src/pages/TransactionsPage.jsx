import { useEffect, useState } from "react";
import axios from "axios";
import TransactionsList from "../components/TransactionsList";
import { Link, useParams } from "react-router-dom";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPage] = useState(null);
  const { pageNumber } = useParams();
  const fetchTransactions = async () => {
    let url = "http://localhost:3000/api/transactions";
    if (pageNumber) {
      url += `?p=${pageNumber}`;
    }
    const response = await axios.get(url);
    const data = response.data;
    setTransactions(data.transactions);
    setCurrentPage(data.page);
    setTotalPage(data.totalPages);
  };

  useEffect(() => {
    fetchTransactions();
  }, [pageNumber]);

  if (transactions.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      <div className="w-[90%]  max-w-5xl mx-auto my-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-20">
          {transactions.map((transaction) => {
            return <TransactionsList {...transaction} key={transaction._id} />;
          })}
        </div>
        {/* pagination */}
        <div className="join">
          {[...Array(totalPages).keys()].map((pages) => (
            <>
              <Link key={pages} to={`/p/${pages}`}>
                <button
                  className={`join-item btn ${
                    pages == currentPage ? "bg-primary" : ""
                  }`}>
                  {pages + 1}
                </button>
              </Link>
            </>
          ))}
        </div>
        {/* end of pagination */}
      </div>
    </section>
  );
};
export default TransactionsPage;
