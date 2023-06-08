
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import ItemCount from './componentes/ItemCount/ItemCount'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <>
     
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenidos"}/>

    </>
  )
}

export default App



{
   /*<h1 style={{color:"#FF5733"}}>Hola mundo </h1>
      <h2 className="saludo">Bienvenidos </h2>
      <TituloPrincipal saludo = {"Hola comision "} nombre = {"JuanJo"}/>
      <TituloPrincipal saludo = {"No jodam "} nombre = {"Maaaaaaaaas"}/>
      <ItemCount/>*/
}