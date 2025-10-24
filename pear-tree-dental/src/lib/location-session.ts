export type Coords = { lat: number; lng: number; ts: number } | null;

const KEY_COORDS = "ptd.coords";
const KEY_PROMPT_SHOWN = "ptd.locPromptShown";
export const EVENT_LOCATION = "ptd:location";

let _coords: Coords = null;

export const LocationSession = {
  get(): Coords {
    if (_coords) return _coords;
    if (typeof window === "undefined") return null;
    try {
      const raw = window.sessionStorage.getItem(KEY_COORDS);
      if (!raw) return null;
      _coords = JSON.parse(raw);
      return _coords;
    } catch {
      return null;
    }
  },
  set(c: Coords) {
    _coords = c;
    if (typeof window !== "undefined" && c) {
      window.sessionStorage.setItem(KEY_COORDS, JSON.stringify(c));
      try {
        window.dispatchEvent(new CustomEvent(EVENT_LOCATION, { detail: c }));
      } catch {
        // ignore if CustomEvent not available
      }
    }
  },
  markPromptShown() {
    if (typeof window !== "undefined") window.sessionStorage.setItem(KEY_PROMPT_SHOWN, "1");
  },
  wasPromptShown(): boolean {
    if (typeof window === "undefined") return true;
    return window.sessionStorage.getItem(KEY_PROMPT_SHOWN) === "1";
  },
  keys: { KEY_COORDS, KEY_PROMPT_SHOWN },
};

