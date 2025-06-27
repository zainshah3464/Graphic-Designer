export default function Loading() {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center bg-black text-white">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin" />

      {/* Loading Text */}
      <div className="text-lg">🚀 Loading, please wait...</div>
    </div>
  )
}
