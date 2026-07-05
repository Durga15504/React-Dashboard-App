import Card from "../UI/Card";

function WindowInfo({ width, height }) {
  return (
    <Card>
      <h3>Window Size</h3>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </Card>
  );
}

export default WindowInfo;