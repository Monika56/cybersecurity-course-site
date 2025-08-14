export default function LeaderboardPage() {
  const users = [
    { name: "Alice", points: 1200 },
    { name: "Bob", points: 950 },
    { name: "Charlie", points: 800 },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">🏆 Leaderboard</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i} className="border-b border-gray-700 hover:bg-gray-800">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
