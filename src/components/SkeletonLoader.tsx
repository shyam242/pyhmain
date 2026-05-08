export default function SkeletonLoader({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-4 animate-fade-in">
          {/* Title skeleton */}
          <div className="skeleton h-6 w-3/4 rounded" />

          {/* Content skeleton */}
          <div className="space-y-3">
            <div className="skeleton h-4 w-full rounded" />
            <div className="skeleton h-4 w-5/6 rounded" />
            <div className="skeleton h-4 w-4/5 rounded" />
          </div>

          {/* Button skeleton */}
          <div className="skeleton h-10 w-32 rounded-lg mt-6" />
        </div>
      ))}
    </div>
  );
}
