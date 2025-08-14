export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6">🔑 Login</h1>
      <form className="bg-gray-800 p-6 rounded-lg w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white"
        />
        <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-500">
          Sign In
        </button>
      </form>
    </main>
  );
}
