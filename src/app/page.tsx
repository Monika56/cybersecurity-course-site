import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-6">🚀 Cyber Lab</h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl">
        Your hands-on journey from beginner to pro in cybersecurity.
        Learn, practice, and compete — all in one place.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/curriculum" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500">
          View Curriculum
        </Link>
        <Link href="/challenges" className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-500">
          Daily Challenges
        </Link>
        <Link href="/leaderboard" className="px-6 py-3 bg-yellow-500 rounded-lg hover:bg-yellow-400 text-black">
          Leaderboard
        </Link>
        <Link href="/profile" className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-500">
          My Profile
        </Link>
        <Link href="/login" className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-500">
          Login / Sign Up
        </Link>
      </div>
    </main>
  );
}
