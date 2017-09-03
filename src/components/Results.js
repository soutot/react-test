
import React, { Component } from 'react';

export default class Results extends Component {
  render() {
    return (
      <section
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            listStyle: 'none',
            width: '65vw',
          }}
        >
          <li
            style={{
              backgroundColor: '#ffffff',
              display: 'flex',
              flex: 1,
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
              imagem
            </div>
            <div
              style={{
                flex: 4,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{ flex: 1 }}>Valor</span>
              <span style={{ flex: 1 }}>Descrição</span>
            </div>
            <div
              style={{
                flex: 1,
              }}
            >
              <span>alguma coisa</span>
            </div>
          </li>

          <li
            style={{
              backgroundColor: '#ffffff',
              display: 'flex',
              flex: 1,
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
              imagem
            </div>
            <div
              style={{
                flex: 4,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{ flex: 1 }}>Valor</span>
              <span style={{ flex: 1 }}>Descrição</span>
            </div>
            <div
              style={{
                flex: 1,
              }}
            >
              <span>alguma coisa</span>
            </div>
          </li>
          <li
            style={{
              backgroundColor: '#ffffff',
              display: 'flex',
              flex: 1,
              justifyContent: 'space-between',
              padding: '10px',
            }}
          >
            <div
              style={{
                flex: 2,
              }}
            >
              imagem
            </div>
            <div
              style={{
                flex: 4,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{ flex: 1 }}>Valor</span>
              <span style={{ flex: 1 }}>Descrição</span>
            </div>
            <div
              style={{
                flex: 1,
              }}
            >
              <span>alguma coisa</span>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
