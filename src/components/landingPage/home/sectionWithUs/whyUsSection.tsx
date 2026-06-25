import WhyUsCard from "./whyUsCard";

const whyUs = [
  {
    id: 1,
    title: "Guia profesional",
    description:
      "Experienced and friendly guides make your holiday safe and comfortable.",
  },
  {
    id: 2,
    title: "Precios accesibles",
    description:
      "Affordable prices and attractive promotions, plus FREE entrance tickets.",
  },
  {
    id: 3,
    title: "Reserva facil",
    description:
      "Fast and simple booking process so you can secure your trip instantly.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-extrabold uppercase">
          Por qué viajar con
          <span className="text-blue-600"> Nosotros</span>
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Descubre por qué somos la mejor opción para tus aventuras en Cusco
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whyUs.map((item) => (
            <WhyUsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
