import { useParams } from "react-router-dom";
import InfoCard from "../../components/InforCard/InfoCard";
import sections from "../../assets/infoSections.json";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../../consts";
import getFlag from "./func/getFlag";

export default function Root() {
  const { country } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(SERVER_URL + country);
      const json = await req.json();
      setData(json);
      console.log(json);
    }

    fetchData();
  }, []);

  return country ? (
    <main>
      <article>
        <h1>
          {country}
          {getFlag(country)}
        </h1>
      </article>

      {data &&
        sections.map(({ title, infoKeys }) => (
          <InfoCard
            title={title}
            infoKeys={infoKeys}
            data={data[title.text]}
            key={title.text}
          />
        ))}
    </main>
  ) : null;
}
