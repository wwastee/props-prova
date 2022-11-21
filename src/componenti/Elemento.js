function Elemento(props) {
  const text = props;

  return <div>{props.nome ? props.nome : props.text}</div>;
}

export default Elemento;
