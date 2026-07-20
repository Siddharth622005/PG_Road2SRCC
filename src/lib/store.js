import { useSyncExternalStore } from 'react';

// Tiny localStorage-backed store so shortlist state survives reloads and
// updates propagate across components without a state library.

const listeners = new Set();

function emit() {
  listeners.forEach((fn) => fn());
}

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  emit();
}

// ---------- shortlist ----------

const SHORTLIST_KEY = 'r2s-shortlist';
let shortlistCache = read(SHORTLIST_KEY, []);

function readShortlist() {
  return shortlistCache;
}

export function useShortlist() {
  const slugs = useSyncExternalStore(subscribe, readShortlist);
  return {
    slugs,
    has: (slug) => slugs.includes(slug),
    toggle: (slug) => {
      shortlistCache = slugs.includes(slug) ? slugs.filter((s) => s !== slug) : [...slugs, slug];
      write(SHORTLIST_KEY, shortlistCache);
    },
    remove: (slug) => {
      shortlistCache = slugs.filter((s) => s !== slug);
      write(SHORTLIST_KEY, shortlistCache);
    },
  };
}
