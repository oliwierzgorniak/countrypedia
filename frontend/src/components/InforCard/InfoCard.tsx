type InfoCardProps = {
  title: CardTitle;
  infoKeys: string[];
  data: { [key: string]: string | number | undefined };
};

export default function InfoCard({ title, infoKeys, data }: InfoCardProps) {
  return (
    <section>
      <h2>
        {title.text} {title.emoji}
      </h2>
      <ul>
        {infoKeys.map((key) => (
          <li key={key}>
            <span>{key}</span>
            <span>{data[key]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
