export default function CurriculumPage() {
  const modules = [
    { title: "Cybersecurity Basics", desc: "Understand networks, firewalls, and attack types." },
    { title: "Ethical Hacking", desc: "Learn penetration testing techniques." },
    { title: "Incident Response", desc: "Handle breaches like a pro." },
    { title: "Advanced Threat Analysis", desc: "Detect and counter complex attacks." },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">📚 Curriculum</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((m, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700">
            <h2 className="text-2xl font-semibold">{m.title}</h2>
            <p className="text-gray-300 mt-2">{m.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
