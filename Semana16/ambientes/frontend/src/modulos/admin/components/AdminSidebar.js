import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AdminSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let active = this.props.abierto ? '' : 'active'

    return (
      <nav id="sidebar" className={active}>
        <div class="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
          <strong>BS</strong>
        </div>

        <ul class="list-unstyled components">
          <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
              <i class="fas fa-home"></i>
              Home
                    </a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-briefcase"></i>
              About
                    </a>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
              <i class="fas fa-copy"></i>
              Mantenimientos
                    </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <Link to={'/pabellones'}>Pabellones</Link>
              </li>
              <li>
                <Link to={'/ambientes'}>Ambientes</Link>
              </li>
              <li>
                <Link to={'/reservas'}>Reservas</Link>
              </li>
            </ul>
          </li>
        </ul>

        <ul class="list-unstyled CTAs">
          <li>
            <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
          </li>
          <li>
            <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default AdminSidebar;
