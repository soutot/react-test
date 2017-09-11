import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  onPaginationClick(page) {
    this.setState({
      page,
    });
  }

  renderResults() {
    const { filteredProductsList } = this.props;
    const { page } = this.state;
    const content = [];
    const pagesCounter = filteredProductsList && filteredProductsList.length / 4;
    const pagination = [];
    const itemsToRender = filteredProductsList.filter((item, i) => {
      // return ((i / 4) - page - 1) < 1;
      return i < 4;
    });

    itemsToRender.forEach((product) => {
      const item = (
        <li
          key={product.id}
          style={{
            backgroundColor: '#ffffff',
            display: 'flex',
            height: '150px',
            justifyContent: 'space-between',
            borderBottom: '1px solid',
            padding: '10px',
          }}
        >
          <div
            style={{
              flex: 2,
            }}
          >
            <img
              alt={product.title}
              src={product.thumbnail}
            />
          </div>
          <div
            style={{
              flex: 4,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ flex: 1 }}>{product.price}</span>
            <span style={{ flex: 1 }}>{product.title}</span>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <span>{product.condition}</span>
          </div>
        </li>
        );

      content.push(item);
    });

    // if (pagesCounter) {
    //   for (const i = page - 1; i < pagesCounter; i + 1) {
    //     const item = (
    //       <li key={i}>
    //         <a href="/" onClick={() => this.onPaginationClick(i)}>
    //           {i}
    //         </a>
    //       </li>
    //     );
    //     pagination.push(item);
    //   }
    // }
    return (
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          listStyle: 'none',
          width: '65vw',
        }}
      >
        {content}
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            listStyle: 'none',
            width: '65vw',
          }}
        >
          {pagination}
        </ul>
      </ul>
    );
  }
  render() {
    return (
      <section
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
      {this.renderResults()}
      </section>
    );
  }
}

const mapStateToProps = ({ products }) => {
  const {
    filteredProductsList,
  } = products;

  return {
    filteredProductsList,
  };
};

export default connect(mapStateToProps, {})(Results);
