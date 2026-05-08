import LoadingSpinner from "./LoadingSpinner";

export default function PageLoader({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      <div className="animate-fade-in">
        <LoadingSpinner size="lg" />
        <p className="mt-6 text-center text-gray-400 animate-pulse-slow">
          {message}
        </p>
      </div>
    </div>
  );
}
