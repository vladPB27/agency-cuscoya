import BookingBox from "./bookingBox";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Machu_Picchu%2C_Peru_%282018%29.jpg"
        alt="Cusco machu picchu"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/10" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 rounded-full bg-black px-4 py-1 text-sm text-white">
          ⭐ Number 1 · Cusco Travel Experiences
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold uppercase md:text-6xl">
          Descubre las maravillas que te ofrece<span className="text-blue-600"> Cusco</span>
        </h1>

        <h2 className="max-w-4xl mt-4 text-2xl font-semibold md:text-lg">
          Descubre experiencias auténticas en el corazón de los Andes
        </h2>

        <div className="mt-10 w-full max-w-3xl">
          <BookingBox />
        </div>
      </div>
    </section>
  );
}
