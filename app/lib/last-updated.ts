import { execSync } from "child_process";

export function getLastUpdated(): string {
  try {
    const isoDate = execSync("git log -1 --format=%cI").toString().trim();
    return new Date(isoDate).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    // Falls back if git history isn't available in the build environment
    return "2026";
  }
}