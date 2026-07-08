"use client";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


type Props = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  price: number;
};

export default function PackageCard({
  id,
  title,
  description,
  image,
  price,
}: Props) {

  const router = useRouter();


  return (
    <div className="rounded-2xl bg-white shadow-lg overflow-hidden">
      <div className="relative h-52">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="font-bold uppercase">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>

        <p className="mt-4 text-xl font-semibold">
          ${price}
        </p>

        <div className="mt-6 flex gap-3">
          <Button className="flex-1">Seleccionar</Button>
          <Button variant="outline" className="flex-1"
            onClick={() => router.push(`/landingPage/tours/${id}`)}>Ver Detalles
          </Button>
        </div>
      </div>
    </div>
  );
}
