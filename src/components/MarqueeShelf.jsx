export default function MarqueeShelf({ items }) {
  const loop = [...items, ...items];

  return (
    <div className="marquee-shell">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="marquee-book">
            <span />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
