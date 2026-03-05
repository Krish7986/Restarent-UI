export default function Navbar({ dark = false }) {
  const headerClass = dark
    ? "sticky top-0 z-20 bg-black/40 backdrop-blur border-b border-white/15 text-white"
    : "sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200 text-gray-900";

  const linkClass = dark
    ? "hover:text-red-300 transition-colors"
    : "hover:text-red-500 transition-colors";

  return (
    <header className={headerClass}>
      <nav className="max-w-6xl mx-auto px-8 flex items-center justify-between h-16">
        <div className="font-bold text-x">
          Restaurant<span className="text-red-500">Pro</span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <a href="#home" className={linkClass}>
              Home
            </a>
          </li>
          <li>
            <a href="#menu" className={linkClass}>
              Menu
            </a>
          </li>
          <li>
            <a href="#about" className={linkClass}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className={linkClass}>
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#reservation"
          className="inline-flex items-center rounded-full bg-red-500 text-white text-sm px-4 py-2 hover:bg-red-600 transition-colors"
        >
          Make a reservation
        </a>
      </nav>
    </header>
  );
}
