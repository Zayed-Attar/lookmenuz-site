export function getRestaurantIdFromDomain(): string | null {
  if (typeof window === "undefined") return null;

  const host = window.location.hostname;
  // Example: grandmehfil.lookmenuz.com → ["grandmehfil", "lookmenuz", "com"]
  const parts = host.split(".");

  // Return the first part only if not localhost
  if (host.includes("lookmenuz.com")) {
    return parts[0]; // grandmehfil
  }

  // Local testing fallback
  return "grandmehfil";
}
