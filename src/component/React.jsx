import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";

function React() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#464859] text-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center tracking-wide">
        Welcome to <span className="text-yellow-400">React LMS</span>
      </h1>

      <p className="text-lg md:text-xl text-center text-gray-300 max-w-2xl mb-12">
        Built using <span className="text-blue-400">React</span> and <span className="text-purple-400">Vite</span>. Start learning today!
      </p>

      {/* 👇 CSS class slow-spin use kiya hai */}
      <div className="flex gap-10 items-center justify-center mb-12">
        <img
          src={reactLogo}
          alt="React Logo"
          className="w-32 h-32 slow-spin"
        />
        <img
          src={viteLogo}
          alt="Vite Logo"
          className="w-32 h-32 slow-spin"
        />
      </div>

      <a
        href="/React/ReactIntro"
        className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded font-semibold text-lg shadow-md"
      >
        🚀 Start Learning
      </a>
    </div>
  );
}

export default React;
