import { getTreatmentPrice } from "@/data/pricing";

export default function Page() {
  const fromPrice = getTreatmentPrice("Ceramic Bridge");
  return (
    <div>
      Nottingham Dental Bridges Service — From {fromPrice}
    </div>
  );
}
