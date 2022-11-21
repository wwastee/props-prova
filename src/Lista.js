import Elemento from "./componenti/Elemento";
import ElementoNascosto from "./componenti/ElementoNascosto";
import Bottone from "./componenti/Bottone";


function Lista() {

    const mostraElementoNascosto = false;

  return (
    <div>
      <Elemento nome ="claudio" text="pinuzzo" /> {/* Elemento(claudio, buongiorno) */}
      <Elemento text="michele" />
      <Elemento text="carmine" />
      <Bottone />
      { mostraElementoNascosto ? <Elemento nome="PINUZZOLO"/> : <ElementoNascosto />}
      { mostraElementoNascosto && <ElementoNascosto />}
      {/* se entrambi sono true ritorna quello a destra */}
    </div>
  );
}

export default Lista;
