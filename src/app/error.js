'use client'

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <head>
        <title>Error</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Pulse Alert Icon */}
        <div className="w-16 h-16 bg-red-600 bg-opacity-30 rounded-full flex items-center justify-center animate-pulse mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2">
          ⚠️ Oops! Something went wrong.
        </h2>

        {/* Error message */}
        <p className="text-gray-400 text-sm mb-6 max-w-md">
          {error.message || 'There was a problem with the website. Please try again later.'}
        </p>

        {/* Retry button */}
        <button
          onClick={() => reset()}
          className="bg-red-600 hover:bg-red-700 transition-colors px-5 py-2 rounded-md text-white font-medium"
        >
           Try Again
        </button>
      </body>
    </html>
  )
}
