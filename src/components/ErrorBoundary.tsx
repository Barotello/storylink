import React, { Component, ErrorInfo, ReactNode } from "react";
import { logger } from "@/utils/logger"; // logger'ı import et

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Bir sonraki render'da fallback UI'ı göstermek için state'i güncelleyin.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error("Uygulama hatası yakalandı:", error, errorInfo);
    // Hata raporlama servisine log gönderebilirsiniz
  }

  public render() {
    if (this.state.hasError) {
      // Herhangi bir fallback UI'ı render edebilirsiniz
      return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
          <div className="text-center p-4">
            <h1 className="text-4xl font-bold mb-4">Oops! Bir şeyler ters gitti.</h1>
            <p className="text-xl mb-4">Uygulamada beklenmedik bir hata oluştu.</p>
            <p className="text-sm text-subtle-light dark:text-subtle-dark">Lütfen sayfayı yenilemeyi deneyin veya daha sonra tekrar gelin.</p>
            <button
              className="mt-6 px-6 py-3 bg-primary-app text-white rounded-full hover:bg-primary-app/90 transition-colors"
              onClick={() => window.location.reload()}
            >
              Sayfayı Yenile
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;