import { base } from '$app/paths';

export function asset(path: string): string {
  return `${base}${path}`;
}

export function url(path: string): string {
  return `${base}${path}`;
}