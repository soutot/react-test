import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import '../App.css';
import {
  searchForProduct,
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
    const { productsList } = this.props;

    const filteredProductsList = productsList.filter((item) => {
      return searchText ? item.tipo.includes(searchText) : false;
    });
    if (filteredProductsList.length > 0) {
      this.props.searchForProduct(filteredProductsList);
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
      searchText: product.tipo,
    });
  }

  renderSearchAutoComplete() {
    const { searchText } = this.state;
    const { productsList } = this.props;
    const content = [];
    const productsFiltered = productsList.filter((item) => {
      return (searchText && item.tipo !== searchText) ? item.tipo.includes(searchText) : false;
    });

    productsFiltered.forEach((product) => {
      content.push(
        <a
          href=""
          onClick={(e) => { this.onAutoCompleteTextClick(e, product); }}
          key={product.id}
        >
          <li>{product.tipo}</li>
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
            Logo
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
    productsList,
  } = products;

  return {
    productsList,
  };
};

export default connect(mapStateToProps,
  {
    searchForProduct,
  }
)(Search);
