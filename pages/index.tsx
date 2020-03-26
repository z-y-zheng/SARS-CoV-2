import { Title } from "../components/styles/index.styles";

export default function Index() {
  return (
    <div>
      <Title>Hello Covid</Title>
      <p>Last Updated: xxx</p>

      <div>
        <h2>Choose country:</h2>
        <select>
          <option value="CA">Canada</option>
        </select>
      </div>

      <div>
        <h4>Confirmed cases: xxx</h4>
        <h4>Recovered: xxx</h4>
        <h4>Deaths: xxx</h4>
      </div>

      <div>
        <h2>Daily Summary:</h2>
      </div>
    </div>
  );
}
