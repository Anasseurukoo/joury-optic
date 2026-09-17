import type { MetadataRoute } from "next";
import { withBasePath } from "../lib/paths";

export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Joury Optic",
    short_name: "Joury",
    description: "Opticien à Casablanca — montures, conseil, technologies verrières et essayage.",
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#071f20",
    theme_color: "#071f20",
    icons: [
      { src: withBasePath("/brand/icon-192.png"), sizes: "192x192", type: "image/png" },
      { src: withBasePath("/brand/icon-512.png"), sizes: "512x512", type: "image/png" },
    ],
  };
}
