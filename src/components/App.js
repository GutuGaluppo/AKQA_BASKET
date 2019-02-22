import React from 'react'
import ProductsTable from './ProductsTable';
import Logo from './Logo';
import BuyButton from './BuyButton';
import Footer from './Footer';


class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        title: "Cotton T-Shirt, Medium",
        price: 1.99,
        qty: 1,
      },
      {
        id: 2,
        title: "Baseball Cap, One Size",
        price: 2.99,
        qty: 2,
      },
      {
        id: 3,
        title: "Swim Shorts, Medium",
        price: 3.99,
        qty: 1,
      }
    ],
  }

  onChange = (index, val) => {
    if (val < 0 || val > 10) {
      return
    }
    this.setState({
      products: this.state.products.map((product, i) => (
        i === index ? { ...product, qty: val } : product
      ))
    })
  }

  deleteItem = (id) => {
    this.setState({
      products: this.state.products.filter(product =>
        product.id !== id)
    })
  }


  render() {
    return (
      <div>
        <div className="content">
          <div>
            <Logo />
            <div>
              <h2>Your Basket</h2>
              <p className="p-cnt">
                Items you have added to your basket are shown below.
              <br />
                Ajust the quantities or remove items before continuing your purchsde.
              </p>
            </div>
          </div>
          <div>
            <ProductsTable
              products={this.state.products}
              onChange={this.onChange}
              deleteItem={this.deleteItem}
            />
            <SubTotal products={this.state.products} />
            <Tax products={this.state.products} />
            <Total products={this.state.products} />
            <BuyButton enabled={isEnable(this.state.products)} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
};

const isEnable = products =>
  products.some(product => product.qty > 0)

const getSubtotal = products =>
  products.reduce((sum, i) => (
    sum += i.qty * i.price
  ), 0)

const getVat = products =>
  products.reduce((sum, i) => (
    sum += (i.qty * i.price) * 0.20
  ), 0)

const getTotal = (products) => {
  return (getSubtotal(products) + getVat(products))
}

const SubTotal = ({ products }) => (
  <p className="cost">
    Subtotal:
      <span>
      £{getSubtotal(products).toFixed(2)}
    </span>
  </p>
);

const Tax = ({ products }) => (
  <p className="cost">
    VAT 20%:
    <span>
      £{getVat(products).toFixed(2)}
    </span>
  </p>
);

const Total = ({ products }) => (
  <p>
    <strong className="cost">
      Total Cost:
      <span>
        £{getTotal(products).toFixed(2)}
      </span>
    </strong>
  </p>
)

export default App;