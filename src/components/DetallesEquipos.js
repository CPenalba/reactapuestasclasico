import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "./Global";
import loadingImage from "./../assets/images/loading.jpg";

export default class DetallesEquipos extends Component {
  state = {
    equipo: null,
  };

  findEquipo = () => {
    let id = this.props.idEquipo;
    let request = "api/equipos/" + id;
    var url = Global.apiEjemplos + request;
    axios.get(url).then((response) => {
      this.setState({
        equipo: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.findEquipo();
  };

  componentDidUpdate = (valorAntiguo) => {
    if (valorAntiguo.idEquipo != this.props.id) {
      this.findEquipo();
    }
  };

  render() {
    return (
      <div>
        <h1>Detalles equipo: {this.props.idEquipo}</h1>
        {this.state.equipo ? (
          <ul className="list-group">
            <li className="list-group-item">
              Id equipo: {this.state.equipo.idEquipo}
            </li>
            <li className="list-group-item">
              Nombre: {this.state.equipo.nombre}
            </li>
            <li className="list-group-item">
              Imagen:{" "}
              <img
                src={this.state.equipo.imagen}
                style={{ width: "150px", height: "150px" }}
              ></img>
            </li>

            <li className="list-group-item">
              Champions: {this.state.equipo.champions}
            </li>
            <li className="list-group-item">Web: {this.state.equipo.web}</li>
            <li className="list-group-item">
              Descripcion: {this.state.equipo.descripcion}
            </li>
          </ul>
        ) : (
          <img
            src={loadingImage}
            alt="Loading..."
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5%",
            }}
          />
        )}
      </div>
    );
  }
}
