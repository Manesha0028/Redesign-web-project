export default function StatCard({ icon, value, label }) {
  return (
    <div className="card statCard">
      <div className="statIcon">{icon}</div>
      <div>
        <div className="statValue">{value}</div>
        <div className="muted">{label}</div>
      </div>
    </div>
  );
}
