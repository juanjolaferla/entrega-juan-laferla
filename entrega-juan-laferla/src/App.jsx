/*componentes 1*/
/* Es un conjunto de elementos que cumplen una funcion especifica*/
/*ej. un boton un formulariouna card de un producto
ventajas de trabajar componentes:
-Reutilizamos codigo.
-Favorece la separacion de responsabilidades 
-El codigo es mas facil de entender 
-Mejara el rendimienr¿to de la aplicacion 

Caracterisitacias especieles 
-Renderizan un unico elelmento
-Pueden recibir props (propiedades).
Las props son objetos que contienen datos que un componente necesita para renderizarce correctamente. Estas se envian de forma unirediocciona. de padre a hijo*/

import TituloPrincipal from './componentes/TituloPrincipal'
import './App.css'

function App() {

  return (
    <>
      <h1 style={{colr:"red"}}>Hola mundo </h1>
      <h2 className="saludo">Bienvenidos </h2>
      <TituloPrincipal saludo = {"Hola comision "} nombre = {"Juanjo"}/>
    </>
  )
}

export default App
