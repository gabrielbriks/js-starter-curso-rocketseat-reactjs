import React, { Component } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";
import Product from "../products";

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1 /*Adicionando page = 1, como defaul ao inciar o app */
  };

  //Função que irá ser executada assim que o componente for exibido em tela.
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    /*Desestruturando. Pegando o docs e adicionando todo o resto para a a nossa "productInfo"*/
    const { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    const { page, productInfo } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  };

  /*Metodo que levará para a proxima pagina.*/
  nextPage = () => {
    const { page, productInfo } = this.state;

    /*Pages: Retorna o número total de paginas */
    if (page == productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  render() {
    const { products, page, productInfo } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Próxima
          </button>
        </div>
      </div>
    );
  }
}
