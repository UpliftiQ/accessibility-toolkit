import { useEffect, type RefObject } from "react";

const ACCEPTABLE_DRIFT_SECONDS = 0.25;

/**
 * Mirrors the primary video's playback state to an optional visual
 * sign-language video. The primary media remains the single control source.
 */
export function useSyncedVideo(
  primaryRef: RefObject<HTMLVideoElement | null>,
  signRef: RefObject<HTMLVideoElement | null>,
  enabled: boolean
) {
  useEffect(() => {
    const primary = primaryRef.current;
    const sign = signRef.current;

    if (!enabled || !primary || !sign) return;

    const syncTime = () => {
      if (Number.isFinite(primary.currentTime) && Math.abs(sign.currentTime - primary.currentTime) > ACCEPTABLE_DRIFT_SECONDS) {
        sign.currentTime = primary.currentTime;
      }
    };

    const syncRate = () => {
      sign.playbackRate = primary.playbackRate;
    };

    const play = () => {
      syncTime();
      syncRate();
      void sign.play().catch(() => {
        // Browsers can block secondary autoplay. A later primary event retries.
      });
    };

    const pause = () => sign.pause();

    primary.addEventListener("play", play);
    primary.addEventListener("pause", pause);
    primary.addEventListener("ended", pause);
    primary.addEventListener("seeking", syncTime);
    primary.addEventListener("seeked", syncTime);
    primary.addEventListener("timeupdate", syncTime);
    primary.addEventListener("ratechange", syncRate);

    syncRate();
    syncTime();

    return () => {
      primary.removeEventListener("play", play);
      primary.removeEventListener("pause", pause);
      primary.removeEventListener("ended", pause);
      primary.removeEventListener("seeking", syncTime);
      primary.removeEventListener("seeked", syncTime);
      primary.removeEventListener("timeupdate", syncTime);
      primary.removeEventListener("ratechange", syncRate);
    };
  }, [enabled, primaryRef, signRef]);
}
