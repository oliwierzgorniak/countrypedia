import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getFlag from "./func/getFlag";
import { SERVER_URL } from "../../consts";
import InfoCard from "../../components/InforCard/InfoCard";
import sections from "../../assets/infoSections.json";
import styles from "./Country.module.css";
import Back from "../../components/Back/Back";

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
    <>
      <Back />
      <h1>
        {country} {getFlag(country)}
      </h1>

      <article className={styles.container}>
        {data &&
          sections.map(({ title, infoKeys }) => (
            <InfoCard
              title={title}
              infoKeys={infoKeys}
              data={data[title.text]}
              key={title.text}
            />
          ))}
      </article>
    </>
  ) : null;
}
