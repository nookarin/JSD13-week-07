export default function Section() {
  return (
    <section className="w-full p-5 bg-amber-100 flex">
      <ul className="list-inside list-disc flex-1">
        <span className="font-semibold">Database:</span>
        <li>MongoDB</li>
        <li>Postgresql</li>
      </ul>
    </section>
  );
}