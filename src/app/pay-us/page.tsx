import { permanentRedirect } from "next/navigation";

export default function PayUsPage() {
  permanentRedirect("/pay-now/");
}
