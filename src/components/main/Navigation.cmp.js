import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';

const Navigation = () => (
  <nav>
    <Row>
      <Col s={12} m={8} offset="m2">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo ">
            Herramienta de Análisis y Visualización
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Inicio</Link>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </nav>
);

export default Navigation;
