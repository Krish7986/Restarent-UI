// src/components/Reservation.jsx
export default function Reservation() {
  return (
    <section id="reservation" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-2">
          Make a Reservation
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Book a table in advance and enjoy a seamless dining experience.
        </p>

        <form className="grid gap-4 sm:grid-cols-2 bg-white p-6 rounded-2xl shadow">
          <input
            type="text"
            placeholder="Full name"
            className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-400 sm:col-span-1"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-400 sm:col-span-1"
          />
          <input
            type="date"
            className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-400 sm:col-span-1"
          />
          <input
            type="time"
            className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-400 sm:col-span-1"
          />
          <input
            type="number"
            min="1"
            placeholder="No. of guests"
            className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-400 sm:col-span-1"
          />
          <textarea
            rows="3"
            placeholder="Special requests (optional)"
            className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-400 sm:col-span-2"
          />
          <button
            type="submit"
            className="sm:col-span-2 w-full rounded-md bg-red-500 text-white py-2.5 text-sm font-medium hover:bg-red-600 transition"
          >
            Confirm booking
          </button>
        </form>
      </div>
    </section>
  );
}
