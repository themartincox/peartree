import { getTreatmentPrice } from "@/data/pricing";

export default function Page() {
  const fromPrice = getTreatmentPrice("Root Canal (Single Canal)");
  return (
    <div>
      Nottingham Root Canal Treatment Service — From {fromPrice}
    </div>
  );
}
