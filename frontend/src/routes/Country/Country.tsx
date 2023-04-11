import { useParams } from "react-router-dom";
import InfoCard from "../../components/InforCard/InfoCard";
import sections from "../../assets/infoSections.json";

export default function Root() {
  const { country } = useParams();

  return (
    <main>
      <article>
        <h1>{country}</h1>
      </article>
      {sections.map(({ title, infoKeys }) => (
        <InfoCard title={title} infoKeys={infoKeys} />
      ))}
    </main>
  );
}
