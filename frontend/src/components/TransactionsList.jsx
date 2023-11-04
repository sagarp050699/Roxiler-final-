const TransactionsList = ({
  category,
  dateOfSale,
  image,
  _id,
  price,
  sold,
  title,
}) => {
  return (
    <div className="border border-gray-700">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className=" object-cover w-full h-36  px-3 rounded-t-2xl "
        />
        {sold ? (
          <p className="absolute top-0 right-0 bg-secondary text-primary-content rounded-md px-2 py-1">
            sold
          </p>
        ) : null}
      </div>
      <div className="py-5 ps-5">
        <h2 className=" py-2 opacity-75 tracking-wide">{title}</h2>
        <h2 className=" py-2 opacity-75 tracking-wide">{category}</h2>
        {sold && (
          <p className=" font-semibold text-xl tracking-wide">
            Date of sale : {dateOfSale.split("T")[0]}
          </p>
        )}
        <p className=" font-semibold text-xl tracking-wide text-accent">
          ₹ {price}
        </p>
      </div>
    </div>
  );
};
export default TransactionsList;
