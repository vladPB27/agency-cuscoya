type Props = {
  id: number;
  title: string;
  description: string;
};

export default function WhyUsCard({ id, title, description }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
        {id}
      </div>

      <h3 className="mb-2 font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
