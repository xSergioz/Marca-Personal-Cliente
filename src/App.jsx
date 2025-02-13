import { useState } from 'react'
import { Route, Routes} from 'react-router-dom';
import Alumno from './paginas/Alumno';
import CentroEducativo from './paginas/CentroEducativo';
import Empresa from './paginas/Empresa';
import Inicio from './paginas/Inicio';
import Cabecera from './componentes/Cabecera';
import Pie from './componentes/Pie';
import './App.css'

function App() {
  <>
  <Cabecera />
  <Routes>
    <Route path="/" element={
      <div>
        <Inicio />
        <Pie />
      </div>
    }/>
    <Route path="/alumno" element={
      <div>
        <Cabecera />
        <Alumno />
      </div>
    }/>
    <Route path="/empresa" element={
      <div>
        <Cabecera />
        <Empresa />
      </div>
    }/>
    <Route path="/centroeducativo" element={
      <div>
        <Cabecera />
        <Alumno />
      </div>
    }/>

  </Routes>
  </>
  
}

export default App
