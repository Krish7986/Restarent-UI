export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-200 text-center">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-white">RestaurantPro</h3>
          <p className="mt-3 text-sm text-slate-400 leading-6">
            Crafted dishes, warm ambience, and memorable evenings in every visit.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><a href="#home" className="hover:text-red-400 transition-colors">Home</a></li>
            <li><a href="#menu" className="hover:text-red-400 transition-colors">Menu</a></li>
            <li><a href="#about" className="hover:text-red-400 transition-colors">About</a></li>
            <li><a href="#reservation" className="hover:text-red-400 transition-colors">Reservation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>123 Food Street, Chennai</li>
            <li>+91 98765 43210</li>
            <li>Open: 10:00 AM - 11:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>Copyright {new Date().getFullYear()} RestaurantPro. All rights reserved.</p>
          <p>Designed with care for great dining experiences.</p>
        </div>
      </div>
    </footer>
  );
}
