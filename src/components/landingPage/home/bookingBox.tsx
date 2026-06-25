import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BookingBox() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl">
      <h3 className="mb-4 font-semibold">Book Travel Now!</h3>

      <div className="grid gap-4 md:grid-cols-3">
        <Input type="date" />
        <Input placeholder="Passengers" />
        <Button className="w-full">Check Availability</Button>
      </div>
    </div>
  );
}
