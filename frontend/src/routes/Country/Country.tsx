import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getFlag from "./func/getFlag";
import { SERVER_URL } from "../../consts";
import InfoCard from "../../components/InforCard/InfoCard";
import sections from "../../assets/infoSections.json";
import styles from "./Country.module.css";
import Back from "../../components/Back/Back";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function Root() {
  const { country } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | HTTPError>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(SERVER_URL + country);
      console.log(req);
      if (req.ok) {
        const json = await req.json();
        setData(json);
        setIsLoading(false);
      } else {
        const message = await req.text();
        setError({ message: message, code: req.status });
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  if (!country) return <Error message="No country provided ❌" />;
  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} code={error.code} />;

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
