export default function ChallengesPage() {
  const challenges = [
    { title: "SQL Injection Practice", difficulty: "Easy" },
    { title: "XSS Attack Simulation", difficulty: "Medium" },
    { title: "Password Cracking Lab", difficulty: "Hard" },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">⚡ Daily Challenges</h1>
      <ul className="space-y-4">
        {challenges.map((c, i) => (
          <li key={i} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700">
            <h2 className="text-2xl font-semibold">{c.title}</h2>
            <p className="text-gray-400">Difficulty: {c.difficulty}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
