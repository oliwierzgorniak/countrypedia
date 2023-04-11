type InfoCardProps = {
  title: CardTitle;
  infoKeys: string[];
};

export default function InfoCard({ title, infoKeys }: InfoCardProps) {
  return (
    <section>
      <h2>
        {title.text} {title.emoji}
      </h2>
      <ul>
        {infoKeys.map(({ key }) => (
          <li>
            <span>{key}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
