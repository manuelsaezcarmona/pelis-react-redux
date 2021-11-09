export function ItemList({ item }) {
  const template = (
    <li>
      {item.year} - {item.title} - {item.country}
    </li>
  );
  return template;
}
