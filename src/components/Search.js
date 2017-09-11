import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import '../App.css';
import {
  searchForProduct,
  fetchProducts,
} from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      displayModal: false,
      modalText: '',
    };
  }

  onSearchButtonClick(event) {
    event.preventDefault();

    const { searchText } = this.state;
    const { apiProducts } = this.props;

    const filteredProductsList = apiProducts.filter((item) => {
      const title = item.title.toLowerCase();
      const text = searchText.toLowerCase();
      return text ? title.includes(text) : false;
    });
    if (filteredProductsList.length > 0) {
      this.props.searchForProduct(filteredProductsList);
      this.setState({
        searchText: '',
      });
      return;
    }

    window.alert('Nenhum produto selecionado');

    // this.setState({
    //   modalText: 'Nenhum produto selecionado',
    //   displayModal: true,
    // });
  }

  onSearchChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onAutoCompleteTextClick(e, product) {
    e.preventDefault();
    this.setState({
      searchText: product.title,
    });
  }

  renderSearchAutoComplete() {
    const { searchText } = this.state;
    const { productsList, apiProducts } = this.props;
    if (searchText) {
      if (!apiProducts) {
        fetch(`/products?q=${searchText}`)
        .then(res => res.json())
        .then((products) => {
          this.props.fetchProducts(products);
        })
        .catch((err) => {
          // window.alert('Ocorreu um erro ao solicitar os dados. Por favor, tente novamente');
          console.log('ERRO: ', err);
        });
      }
    } else {
      this.props.fetchProducts(null);
    }
    const content = [];
    const productsFiltered = apiProducts ? apiProducts.filter((item) => {
      const title = item.title.toLowerCase();
      const text = searchText.toLowerCase();
      return (text && title !== text) ? title.includes(text) : false;
    }) :
    [];

    productsFiltered.forEach((product) => {
      content.push(
        <a
          href=""
          onClick={(e) => { this.onAutoCompleteTextClick(e, product); }}
          key={product.id}
        >
          <li>{product.title}</li>
        </a>
      );
    });

    return (
      productsFiltered.length > 0 &&
        <ul
          className="search-complete"
        >
          {content}
        </ul>
    );
  }

  renderModal() {
    const {
      modalText,
      displayModal,
    } = this.state;

    if (displayModal) {
      return (
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            position: 'absolute',
            width: '100vw',
           // height: '100vh',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '30vw',
              height: '30vh',
              position: 'fixed',
            }}
          >
            <span>
              {modalText}
            </span>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  displayModal: false,
                });
              }}
              style={{
                backgroundColor: 'blue',
                width: '100px',
                textAlign: 'center',
              }}
            >
              OK
            </a>
          </div>
        </div>
      );
    }
    return '';
  }

  render() {
    return (
      <header
        className="header"
      >
        <div
          className="logo"
        >
          <div>
            <img
              src="https://logodownload.org/wp-content/uploads/2016/08/Mercado-Livre-logo-6.png"
              alt="Logo Mercado Livre"
              title="Logo Mercado Livre"
              style={{
                width: '50px',
              }}
            />
          </div>
        </div>
        <div
          className="search"
        >
          <input
            type="text"
            placeholder="Buscar"
            className="search-box"
            onChange={(e) => { this.onSearchChange(e); }}
            value={this.state.searchText}
          />
          <a
            href="/"
            className="search-button"
            onClick={(e) => { this.onSearchButtonClick(e); }}
          >
            <FontAwesome
              name="search"
              className="search-icon"
            />
          </a>
          {this.renderSearchAutoComplete()}
        </div>
        {this.renderModal()}
      </header>
    );
  }
}

const mapStateToProps = ({ products }) => {
  const {
    apiProducts,
  } = products;

  return {
    apiProducts,
  };
};

export default connect(mapStateToProps,
  {
    searchForProduct,
    fetchProducts,
  }
)(Search);
