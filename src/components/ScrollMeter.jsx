import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollMeter() {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-meter"
      aria-hidden="true"
      style={{ transform: `scaleX(${Math.min(progress * 1.08, 1)})` }}
    />
  );
}
