export default function JobCardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 animate-fade-in">
          <div className="skeleton h-6 w-3/4 rounded mb-4" />
          <div className="skeleton h-4 w-1/2 rounded mb-6" />
          <div className="flex justify-between items-center">
            <div className="skeleton h-5 w-28 rounded" />
            <div className="skeleton h-10 w-20 rounded-lg" />
          </div>
        </div>
      ))}
    </>
  );
}
