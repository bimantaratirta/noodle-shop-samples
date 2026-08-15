import { SampleStub } from "@/components/SampleStub";
import { getSample } from "@/lib/samples";

/** Replace the stub with the real page when this direction gets built. */
export default function BaraPage() {
  return <SampleStub sample={getSample("bara")} />;
}
