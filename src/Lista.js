import Elemento from "./componenti/Elemento";
import ElementoNascosto from "./componenti/ElementoNascosto";
import Bottone from "./componenti/Bottone";
import { useState } from "react";


function Lista() {

    const mostraElementoNascosto = false;
    
    const [statoLista, modificaStatoLista]= useState(true);

    function cambioStato(){
        
       modificaStatoLista( !statoLista )
    }

  return (
    <div>
      <Elemento nome ="claudio" text="pinuzzo" /> {/* Elemento(claudio, buongiorno) */}
      <Elemento text="michele" />
      <Elemento text="carmine" />
      <Bottone mostra={cambioStato}/>

      { statoLista ? <Elemento nome="PINUZZOLO"/> : <ElementoNascosto />}
      { mostraElementoNascosto && <ElementoNascosto />}
      {/* se entrambi sono true ritorna quello a destra */}
    </div>
  );
}

export default Lista;
