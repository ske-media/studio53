import { headers } from "next/headers";
import { cache } from "react";
import type { DeviceType } from "@/lib/osiris53";

const MOBILE_UA_PATTERN =
  /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i;

/**
 * Détection serveur via User-Agent — stratégie Dual Site OSIRIS-53.
 * Aucune media query : deux arbres de composants distincts.
 */
export const getDeviceType = cache(async (): Promise<DeviceType> => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";

  return MOBILE_UA_PATTERN.test(userAgent) ? "mobile" : "desktop";
});
