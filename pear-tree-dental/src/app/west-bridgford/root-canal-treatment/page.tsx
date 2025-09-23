import { WestBridgfordServicePage } from "@/components/location/WestBridgfordServicePage";
import { getWestBridgfordServiceEntry } from "../serviceConfig";

const entry = getWestBridgfordServiceEntry("root-canal-treatment");

export const metadata = entry.metadata;

export default function Page() {
  return <WestBridgfordServicePage config={entry.config} />;
}
