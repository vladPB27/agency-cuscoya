import SectionHeader from "./sectionHeader";
import PackageCard from "./packageCard";
import {packages} from "@/app/data/packages";

export default function PackagesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
