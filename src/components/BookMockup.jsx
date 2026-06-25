export default function BookMockup({
  title,
  meta,
  accent = "navy",
  tall = false,
  kicker = "Signature Edition",
  coverSrc,
}) {
  return (
    <article className={`book-card ${tall ? "tall" : ""} accent-${accent}`}>
      {coverSrc ? <img className="book-cover-image" src={coverSrc} alt={title} /> : null}
      <div className="book-spine" />
      <div className="book-sheen" />
      <div className="book-meta">
        <p className="book-kicker">{kicker}</p>
        <h3>{title}</h3>
        <p>{meta}</p>
      </div>
    </article>
  );
}
