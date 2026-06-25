import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function PackageCard({
  title,
  description,
  image,
  price,
}: Props) {
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
          <Button className="flex-1">Choose</Button>
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
