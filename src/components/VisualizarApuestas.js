import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import loadingImage from "./../assets/images/loading.jpg";
import { NavLink } from "react-router-dom";

export default class VisualizarApuestas extends Component {
  cajaId = React.createRef();
  cajaUsuario = React.createRef();
  cajaResultado = React.createRef();
  cajaFecha = React.createRef();

  state = {
    status: false,
    apuestas: [],
  };

  loadApuestas = () => {
    let request = "api/apuestas";
    let url = Global.apiEjemplos + request;
    axios.get(url).then((response) => {
      this.setState({
        apuestas: response.data,
        status: true,
      });
    });
  };

  insertarApuesta = (e) => {
    e.preventDefault();
    let request = "api/apuestas";
    let url = Global.apiEjemplos + request;
    let id = parseInt(this.cajaId.current.value);
    let usuario = this.cajaUsuario.current.value;
    let resultado = this.cajaResultado.current.value;
    let fecha = this.cajaFecha.current.value;

    let apuesta = {
      idApuesta: id,
      usuario: usuario,
      resultado: resultado,
      fecha: fecha,
    };
    axios.post(url, apuesta).then((resonse) => {
      this.setState({
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadApuestas();
  };

  render() {
    if (this.state.status == false) {
      return (
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
      );
    } else {
      return (
        <div>
          <h1>Apuestas</h1>
          <table className="table table-bordered table-secondary">
            <thead>
              <tr>
                <th>Id apuesta</th>
                <th>Usuario</th>
                <th>Reesultado</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {this.state.apuestas.map((a, index) => {
                return (
                  <tr key={index}>
                    <td>{a.idApuesta}</td>
                    <td>{a.usuario}</td>
                    <td>{a.resultado}</td>
                    <td>{a.fecha}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2>Crear nueva apuesta:</h2>
          <form>
            <label>Id apuesta: </label>
            <input
              type="text"
              ref={this.cajaId}
              className="form-control"
              placeholder="Se genera automaticamente"
              disabled
            />
            <label>Usuario apuesta: </label>
            <input
              type="text"
              ref={this.cajaUsuario}
              className="form-control"
              placeholder="Escriba el usuario"
            />
            <label>Resultado apuesta: </label>
            <input
              type="text"
              ref={this.cajaResultado}
              className="form-control"
              placeholder="Escriba el resultado"
            />
            <label>Fecha apuesta: </label>
            <input
              type="date"
              ref={this.cajaFecha}
              className="form-control"
              placeholder="Escriba la fecha"
            />
            <button onClick={this.insertarApuesta} className="btn btn-danger">
              Insertar apuesta
            </button>
          </form>
        </div>
      );
    }
  }
}
