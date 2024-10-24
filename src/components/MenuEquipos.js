import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "./Global";

export default class MenuEquipos extends Component {
  state = {
    equipos: [],
  };

  loadEquipos = () => {
    let request = "api/equipos";
    let url = Global.apiEjemplos + request;
    axios.get(url).then((response) => {
      this.setState({
        equipos: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadEquipos();
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-dark"
          aria-label="Third navbar example"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Apuestas clasico
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/detalle">
                    Detalles
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/visualizar">
                    Visualizar apuestas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Equipos
                  </a>
                  <ul className="dropdown-menu">
                    {this.state.equipos.map((e, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            className="dropdown-item"
                            to={"/detalle/" + e.idEquipo}
                          >
                            {e.nombre}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
