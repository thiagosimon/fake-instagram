import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MainHeader } from './styles';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';


class Header extends Component {
    componentDidMount() {}

    render() {
        return (
          <MainHeader id="main-header">
            <div className="header-content">
              <Link to="/">
                <img src={logo} alt="fakeInsta" />
              </Link>
              <Link to="/new">
                <img src={camera} alt="Enviar" />
              </Link>
            </div>
          </MainHeader>
        );
    }
}

export default Header;
