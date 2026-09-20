import Clarity from '@microsoft/clarity';

/** Microsoft Clarity project (kampalo.com + app.kampalo.com). */
export const CLARITY_PROJECT_ID = 'yld0ipfw7j';

let started = false;

function canStart() {
  if (typeof window === 'undefined') return false;
  if (window.navigator?.webdriver) return false;
  return true;
}

/**
 * Start Clarity once. `surface` is a custom tag so one project can split
 * landing vs SPA sessions.
 */
export function initClarity(surface) {
  if (started || !canStart()) return;
  try {
    Clarity.init(CLARITY_PROJECT_ID);
    started = true;
  } catch {
    return;
  }
  if (surface) {
    try {
      Clarity.setTag('app', surface);
    } catch {
      // Queue may not exist yet; Clarity still records the session.
    }
  }
}
