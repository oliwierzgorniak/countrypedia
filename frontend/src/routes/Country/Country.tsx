import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getFlag from "./func/getFlag";
import { SERVER_URL } from "../../consts";
import InfoCard from "../../components/InforCard/InfoCard";
import sections from "../../assets/infoSections.json";
import styles from "./Country.module.css";
import Back from "../../components/Back/Back";
import Loading from "../../components/Loading/Loading";

export default function Root() {
  const { country } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(SERVER_URL + country);
      const json = await req.json();

      setData(json);
    }

    fetchData();
  }, []);
  if (!country) return null;
  if (!data) return <Loading />;

  return (
    <>
      <h1 className={styles.title}>
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
      <Back />
    </>
  );
}
