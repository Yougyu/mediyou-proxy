// In-memory rate limiter: per-IP, per-instance (no cross-instance state in serverless)
const store = new Map();
const LIMIT = 20;
const WINDOW_MS = 60_000;

export function checkRateLimit(ip) {
  const now = Date.now();
  const entry = store.get(ip);
  if (!entry || now - entry.start > WINDOW_MS) {
    store.set(ip, { count: 1, start: now });
    return { allowed: true, remaining: LIMIT - 1 };
  }
  if (entry.count >= LIMIT) {
    return { allowed: false, remaining: 0, resetAt: entry.start + WINDOW_MS };
  }
  entry.count++;
  return { allowed: true, remaining: LIMIT - entry.count };
}

export function getClientIp(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0].trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown'
  );
}
