import { WestBridgfordServicePage } from "@/components/location/WestBridgfordServicePage";
import { getWestBridgfordServiceEntry } from "../serviceConfig";

const entry = getWestBridgfordServiceEntry("dental-implants");

export const metadata = entry.metadata;

export default function WestBridgfordDentalImplantsPage() {
  return <WestBridgfordServicePage config={entry.config} />;
}
