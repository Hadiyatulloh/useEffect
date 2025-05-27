import { useEffect, useState } from 'react';
import './App.css';
import Usercard from './components/Usercard';

function App() {
  const [products, setProducts] = useState([]);

  async function getData() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    setProducts(data.products); 
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <header>
        <div className="header_div_1">
          <h1>LOGO</h1>
          <input type="text" />
          <p>Home</p>
        </div>
        <div className="header_div_2">
          <i className="fa-solid fa-bell fa-shake" style={{ color: "#ffffff" }}></i>
          <i className="fa-solid fa-message fa-shake" style={{ color: "#ffffff" }}></i>
          <button>Wallet</button>
          <img src="rasm1.png" alt="" />
        </div>
      </header>

      <div className="sections">
        <section className="section">
          <div className="sec_div">
            <div className="sec_h1">
              <i className="fa-solid fa-filter fa-beat" style={{ color: 'white' }}></i>
              <h1>Filters</h1>
            </div>
            <div className="sec_p">
              <p>Status</p><hr />
              <p>Price</p><hr />
              <p>Collections</p><hr />
              <p>Chains</p><hr />
              <p>Categories</p>
            </div>
          </div>
        </section>

        <section className="section_2">
          <div className="sec_2">
            <div className="sec_2p">
              <p>Items</p>
              <div className="sec_btn">
                <button>All items</button>
                <button>Sort By</button>
              </div>
            </div>
          </div>

          <div className="cards">
            {products.length > 0 ? (
              products.map(product => (
                <Usercard key={product.id} product={product} />
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </section>
      </div>

      <footer className="footer">
        <img src="footer.png" alt="" />
      </footer>
    </div>
  );
}

export default App;
