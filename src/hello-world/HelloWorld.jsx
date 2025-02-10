export default function HelloWorld() {
  const props = {
    name: 'Pak Eko',
    styles: {
      color: 'red',
      textTransform: 'uppercase',
      fontStyle: 'underline',
    },
  };
  return (
    <>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </>
  );
}

function HeaderHelloWorld(props) {
  return <h1 style={props.styles}>Hello World {props.name}</h1>;
}

function ParagraphHelloWorld() {
  return <p>Belajar React menyenangkan</p>;
}
