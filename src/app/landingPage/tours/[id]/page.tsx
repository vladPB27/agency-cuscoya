import { ToursView } from "@/components/landingPage/toursView";

type Props = {
  params: Promise<{ id: string }>;
};

export default function TourDetailPage({ params }: Props) {
  return <ToursView params={params} />;
}
