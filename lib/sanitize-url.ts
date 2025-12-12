/**
 * Sanitizes URLs to prevent XSS attacks via javascript: and data: protocols
 * Addresses CVE-2025-55182
 */

const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|tel|sms|ftp):)/i;
const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|svg\+xml|webp)|text\/plain);/i;

/**
 * Sanitizes a URL to prevent javascript: protocol injection attacks
 * @param url - The URL to sanitize
 * @returns A safe URL or '#' if the URL is potentially malicious
 */
export function sanitizeUrl(url: string | undefined | null): string {
  if (!url) {
    return '#';
  }

  const trimmedUrl = url.trim();

  // Allow relative URLs
  if (trimmedUrl.startsWith('/') || trimmedUrl.startsWith('#')) {
    return trimmedUrl;
  }

  // Allow safe protocols
  if (SAFE_URL_PATTERN.test(trimmedUrl)) {
    return trimmedUrl;
  }

  // Allow safe data URLs (images only)
  if (DATA_URL_PATTERN.test(trimmedUrl)) {
    return trimmedUrl;
  }

  // Block javascript:, data: (unsafe), vbscript:, and other potentially dangerous protocols
  console.warn(`Potentially unsafe URL blocked: ${trimmedUrl}`);
  return '#';
}

/**
 * Checks if a URL is safe to use
 * @param url - The URL to check
 * @returns true if the URL is safe, false otherwise
 */
export function isSafeUrl(url: string | undefined | null): boolean {
  if (!url) {
    return false;
  }

  const trimmedUrl = url.trim();

  return (
    trimmedUrl.startsWith('/') ||
    trimmedUrl.startsWith('#') ||
    SAFE_URL_PATTERN.test(trimmedUrl) ||
    DATA_URL_PATTERN.test(trimmedUrl)
  );
}
