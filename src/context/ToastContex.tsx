import { IToastMessage } from "@/types/toast-message";
import { createContext, useContext, useState, ReactNode } from "react";

type ToastContextType = {
  toastMessages: IToastMessage[];
  showToast: (message: IToastMessage) => void;
  hideToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toastMessages, setToastMessages] = useState<IToastMessage[]>([]);

  const showToast = (message: IToastMessage) => {
    setToastMessages((oldState) => [...oldState, message]);
    setTimeout(() => hideToast(message.id), message.duration);
  };

  const hideToast = (id: string) => {
    setToastMessages((oldState) =>
      oldState.filter((message) => message.id !== id)
    );
  };

  return (
    <ToastContext.Provider value={{ showToast, toastMessages, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
