import { useInView } from "../hooks/useInView";

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? "visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
