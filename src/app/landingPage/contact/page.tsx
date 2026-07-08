import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const phone = "51900671114";

  const whatsappMessage = encodeURIComponent(
    "Hola, quisiera información sobre sus tours."
  );

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-cyan-700 to-blue-500 py-20 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contáctanos
          </h1>

          <p className="mt-6 text-lg text-emerald-100">
            ¿Tienes alguna consulta sobre nuestros tours?
            Nuestro equipo estará encantado de ayudarte a
            planificar tu próxima aventura.
          </p>

          <Link
            href={`https://wa.me/${phone}?text=${whatsappMessage}`}
            target="_blank"
          >
            <Button
              className="mt-8"
              size="lg"
              variant="secondary"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Escribir por WhatsApp
            </Button>
          </Link>
        </div>
      </section>

      {/* Información + Formulario */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Información */}
          <div>

            <h2 className="text-3xl font-bold mb-8">
              Información de contacto
            </h2>

            <div className="space-y-5">

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Phone className="text-emerald-600" />
                  <div>
                    <p className="font-semibold">
                      WhatsApp
                    </p>
                    <p className="text-muted-foreground">
                      +{phone}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Mail className="text-emerald-600" />
                  <div>
                    <p className="font-semibold">
                      Correo
                    </p>
                    <p className="text-muted-foreground">
                      cuscoya@gmail.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <MapPin className="text-emerald-600" />
                  <div>
                    <p className="font-semibold">
                      Dirección
                    </p>
                    <p className="text-muted-foreground">
                      Cusco, Perú
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Clock className="text-emerald-600" />
                  <div>
                    <p className="font-semibold">
                      Horario
                    </p>
                    <p className="text-muted-foreground">
                      Lunes - Domingo
                    </p>
                    <p className="text-muted-foreground">
                      08:00 am - 08:00 pm
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Formulario */}
          <div>

            <Card>
              <CardContent className="p-8">

                <h2 className="text-3xl font-bold mb-6">
                  Envíanos un mensaje
                </h2>

                <form className="space-y-5">

                  <Input
                    placeholder="Nombre completo"
                  />

                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                  />

                  <Input
                    placeholder="Número de teléfono"
                  />

                  <Textarea
                    rows={6}
                    placeholder="Escribe tu mensaje..."
                  />

                  <Button
                    className="w-full"
                    size="lg"
                  >
                    Enviar mensaje
                  </Button>

                </form>

              </CardContent>
            </Card>

          </div>

        </div>
      </section>

      {/* Google Maps */}
      <section className="container mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Nuestra ubicación
        </h2>

        <div className="overflow-hidden rounded-2xl shadow-lg">

          <iframe
            src="https://www.google.com/maps?q=Cusco,+Peru&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />

        </div>

      </section>

      {/* CTA */}
      <section className="bg-slate-600 py-20 text-white">

        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            ¿Listo para vivir una experiencia inolvidable?
          </h2>

          <p className="mt-4 text-lg text-emerald-100">
            Reserva hoy mismo y descubre los mejores destinos de Cusco.
          </p>

          <Link
            href={`https://wa.me/${phone}?text=${whatsappMessage}`}
            target="_blank"
          >
            <Button
              size="lg"
              variant="secondary"
              className="mt-8"
            >
              Reservar por WhatsApp
            </Button>
          </Link>

        </div>

      </section>
    </main>
  );
}