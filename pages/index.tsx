import { Title } from "../components/styles/index.styles";
import QueryCountry from "../components/QueryCountry";

export default function Index() {
  return (
    <div>
      <Title>Hello Covid</Title>
      <p>Last Updated: xxx</p>

      <QueryCountry />

      <div>
        <h2>Daily Summary:</h2>
      </div>
    </div>
  );
}
