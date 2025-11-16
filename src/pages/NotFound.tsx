import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { logger } from "@/utils/logger"; // logger'ı import et

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    logger.warn(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-subtle-light dark:text-subtle-dark mb-4">Oops! Sayfa bulunamadı.</p>
        <a href="/" className="text-primary-app hover:text-primary-app/80 underline">
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
};

export default NotFound;