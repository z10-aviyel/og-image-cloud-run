import { fetch } from 'undici';

// @ts-expect-error
if (typeof globalThis.fetch === 'undefined') {
  // @ts-expect-error
  globalThis.fetch = fetch;
}
