// src/utils/logger.ts
export const logger = {
  info: (...args: any[]) => {
    if (import.meta.env.MODE === 'development') {
      console.info("[INFO]", ...args);
    }
  },
  warn: (...args: any[]) => {
    if (import.meta.env.MODE === 'development') {
      console.warn("[WARN]", ...args);
    }
  },
  error: (...args: any[]) => {
    console.error("[ERROR]", ...args);
    // Üretim ortamında bir hata izleme servisine (örn. Sentry) gönderebilirsiniz.
  },
  debug: (...args: any[]) => {
    if (import.meta.env.MODE === 'development') {
      console.debug("[DEBUG]", ...args);
    }
  },
};