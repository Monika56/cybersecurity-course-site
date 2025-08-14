export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">👤 My Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg max-w-lg">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Completed Challenges:</strong> 12</p>
        <p><strong>Total Points:</strong> 850</p>
      </div>
    </main>
  );
}
