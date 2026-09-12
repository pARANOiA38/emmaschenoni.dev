export function SectionIntro({ label, title }: { label: string; title: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
    </div>
  );
}
