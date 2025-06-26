const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0f0f0f] border-b border-gray-800 px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">ZS</h1>
    <div className="space-x-4 text-sm">
      <a href="#hero" className="hover:text-blue-400">Home</a>
      <a href="/demo" className="hover:text-blue-400">Demos</a>
      <a href="#about" className="hover:text-blue-400">About</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </div>
  </nav>
)
export default Navbar
