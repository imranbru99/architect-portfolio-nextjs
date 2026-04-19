export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 border border-white/10 animate-pulse">
        <div className="h-4 w-4 rounded-full bg-blue-500 animate-bounce" />
        <span className="text-slate-300 font-medium">Fetching Technical Journal...</span>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-16 animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-80 rounded-[2rem] bg-slate-900/50 border border-white/5" />
        ))}
      </div>
    </div>
  );
}