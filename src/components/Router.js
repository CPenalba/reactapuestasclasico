import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MenuEquipos from "./MenuEquipos";
import DetallesEquipos from "./DetallesEquipos";
import VisualizarApuestas from "./VisualizarApuestas";

export default class Router extends Component {
  render() {
    function DetallesEquiposElement() {
      let { idEquipo } = useParams();
      return <DetallesEquipos idEquipo={idEquipo} />;
    }
    return (
      <BrowserRouter>
        <MenuEquipos />
        <Routes>
          <Route
            path="/detalle/:idEquipo"
            element={<DetallesEquiposElement />}
          />
          <Route path="/visualizar" element={<VisualizarApuestas />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
