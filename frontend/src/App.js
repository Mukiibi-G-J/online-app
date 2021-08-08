import  data from "./data"
import './App.css';

function App() {
  return (
    <div className="container">
    <header className="row">
        <div >
            <a className="brand" href="#">Semuna Stores</a>
        </div>
        <div>
            <a href="#">Cart</a>
            <a href="#">Sign in</a>
            <a href="#">Hello </a>
        </div>

    </header>
    <main>
        <div className="row center">
          {
            data.products.map(product =>(

              <div ket= {product.id}className="card">
                <a herf={`/product/${product.id}`}>
                <img className="meduim"src={product.image}alt="product"/>
                </a>
                <div className="card-body">
                    <a herf={`/product/${product.id}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                        <span>
                            <i className="fa fa-star"></i>
                        </span>
                    </div>
                    <div className="pricing">
                        {product.price}
                    </div>
                </div>
             </div>
            
            
          ) ) }
            
            </div>

    </main>
    <footer className="row center">
        All right reserved
    </footer>
</div>
  );
}

export default App;
