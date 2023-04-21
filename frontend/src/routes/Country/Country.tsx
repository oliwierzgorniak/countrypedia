import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getFlag from "./func/getFlag";
import { SERVER_URL } from "../../consts";
import sections from "../../assets/infoSections.json";
import InfoCard from "../../components/InforCard/InfoCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Back from "../../components/Back/Back";
import styles from "./Country.module.css";
import fetchData from "./func/fetchData";

export default function Root() {
  const { country } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | HTTPError>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(country, setData, setIsLoading, setError);
  }, []);

  if (!country) return <Error message="No country provided ❌" />;
  if (error) return <Error message={error.message} code={error.code} />;

  return (
    <>
      <Loading isLoading={isLoading} />
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
