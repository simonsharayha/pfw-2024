export function MovieRow({ title, year, actors, plotSummary, rating, image, index }) {
  const isSpecial = index === 0;
  const isTopRated = rating > 8.5; // Assuming top-rated movies have a rating of 8.5 or higher
  return (
    <tr className={`${isSpecial ? "special-row" : ""} ${isTopRated ? "top-rated" : ""}`}>
      <td>{title}</td>
      <td>{year}</td>
      <td>{actors.join(", ")}</td>
      <td>{plotSummary}</td>
      <td>{rating}</td>
      <td><img src={image} alt={title} /></td>
    </tr>
  )
}
