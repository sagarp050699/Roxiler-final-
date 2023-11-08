const TransactionsList = ({ transactions }) => {
  console.log(transactions);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {transactions.map((transaction) => {
            const { id, title, price, description, category, sold, image } =
              transaction;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>₹{price}</td>
                <td>{category}</td>
                {sold ? (
                  <td className="text-secondary">Sold</td>
                ) : (
                  <td>Not sold</td>
                )}
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={image} alt={title} />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    // <div className="border border-gray-700">
    //   <div className="relative">
    //     <img
    //       src={image}
    //       alt={title}
    //       className=" object-cover w-full h-36  px-3 rounded-t-2xl "
    //     />
    //     {sold ? (
    //       <p className="absolute top-0 right-0 bg-secondary text-primary-content rounded-md px-2 py-1">
    //         sold
    //       </p>
    //     ) : null}
    //   </div>
    //   <div className="py-5 ps-5">
    //     <h2 className=" py-2 opacity-75 tracking-wide">{title}</h2>
    //     <h2 className=" py-2 opacity-75 tracking-wide">{category}</h2>
    //     {sold && (
    //       <p className=" font-semibold text-xl tracking-wide">
    //         Date of sale : {dateOfSale.split("T")[0]}
    //       </p>
    //     )}
    //     <p className=" font-semibold text-xl tracking-wide text-accent">
    //       ₹ {price}
    //     </p>
    //   </div>
    // </div>
  );
};
export default TransactionsList;
