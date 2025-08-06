export default function InfoCard({ region }) {
  if (!region) return <p className="text-gray-500">Hover or click a region</p>;

  return (
    <div className="p-6 space-y-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold">{region.name}</h2>
      <p className="text-gray-600">{region.description}</p>
      <ul className="space-y-1">
        {region.locations.map((loc) => (
          <li key={loc.label} className="text-gray-700">
            📍 {loc.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
