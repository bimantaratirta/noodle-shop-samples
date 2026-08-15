import { SampleStub } from "@/components/SampleStub";
import { getSample } from "@/lib/samples";

/** Replace the stub with the real page when this direction gets built. */
export default function KalduPage() {
  return <SampleStub sample={getSample("kaldu")} />;
}
