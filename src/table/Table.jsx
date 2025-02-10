import Row from './Row';

export default function Table() {
  return (
    <table border={1}>
      <tbody>
        <Row no={1} text="Satu" />
        <Row no={2} text="Dua" />
        <Row no={3} text="Tiga" />
      </tbody>
    </table>
  );
}
