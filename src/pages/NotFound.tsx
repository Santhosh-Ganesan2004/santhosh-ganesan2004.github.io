import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <div className="text-center bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-10 border border-blue-200/50 dark:border-blue-500/20 shadow-lg">
        <h1 className="text-6xl font-bold mb-4 text-blue-600 dark:text-blue-400">404</h1>
        <p className="text-2xl text-slate-700 dark:text-gray-300 mb-6">Oops! Page not found</p>
        <a href="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold shadow">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
