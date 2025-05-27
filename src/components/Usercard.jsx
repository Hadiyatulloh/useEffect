import './usercard.css';

function Usercard({ product }) {
  const { images, title, rating, price } = product;

  return (
    <div className="card">
      <img src={images[0]} alt={title} />
      <h3>{title}</h3>
      <p>Rating: {rating} ⭐</p>
      <p>Price: ${price}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default Usercard;
