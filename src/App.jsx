function App() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Sign In</h1>

        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://img.freepik.com/premium-vector/vd-abstract-logo_675030-163.jpg?w=2000"
            alt="logo"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Welcome</h2>
            <p className="text-sm text-gray-600">Sign in to continue</p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <label htmlFor="email" className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <label htmlFor="password" className="text-sm text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
