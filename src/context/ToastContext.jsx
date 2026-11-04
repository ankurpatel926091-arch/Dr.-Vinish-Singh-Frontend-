import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ type = "success", title, message, duration = 5000 }) => {
      const id = Date.now() + Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, type, title, message, duration }]);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      {/* Toast Notification Container */}
      <div
        aria-live="polite"
        className="fixed top-24 sm:top-28 right-4 left-4 sm:left-auto sm:right-6 z-[9999] flex flex-col gap-3 max-w-sm sm:max-w-md w-auto pointer-events-none"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onRemove }) {
  const { id, type, title, message, duration = 5000 } = toast;

  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [id, duration, onRemove]);

  const config = {
    success: {
      badgeBg: "bg-emerald-50 text-emerald-600 border border-emerald-200",
      titleColor: "text-emerald-700",
      progressBg: "bg-emerald-500",
      borderColor: "border-emerald-200/90",
      icon: CheckCircle2,
      glow: "shadow-emerald-500/10",
    },
    error: {
      badgeBg: "bg-rose-50 text-rose-600 border border-rose-200",
      titleColor: "text-rose-700",
      progressBg: "bg-rose-500",
      borderColor: "border-rose-200/90",
      icon: AlertCircle,
      glow: "shadow-rose-500/10",
    },
    info: {
      badgeBg: "bg-blue-50 text-blue-600 border border-blue-200",
      titleColor: "text-blue-700",
      progressBg: "bg-blue-500",
      borderColor: "border-blue-200/90",
      icon: Info,
      glow: "shadow-blue-500/10",
    },
  }[type] || {
    badgeBg: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    titleColor: "text-emerald-700",
    progressBg: "bg-emerald-500",
    borderColor: "border-emerald-200/90",
    icon: CheckCircle2,
    glow: "shadow-emerald-500/10",
  };

  const IconComp = config.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={`relative pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl border ${config.borderColor} shadow-xl ${config.glow} ${
        message ? "p-4 items-start" : "px-4 py-3 items-center"
      } overflow-hidden flex gap-3`}
    >
      {/* Icon Badge */}
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${config.badgeBg}`}
      >
        <IconComp size={20} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pr-1">
        {title && (
          <h4
            className={`text-sm sm:text-[15px] font-extrabold leading-tight ${config.titleColor}`}
          >
            {title}
          </h4>
        )}
        {message && (
          <p className="text-xs text-slate-600 font-medium leading-relaxed mt-0.5">
            {message}
          </p>
        )}
      </div>

      {/* Dismiss Button */}
      <button
        type="button"
        onClick={() => onRemove(id)}
        className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100 shrink-0 cursor-pointer ml-1"
        aria-label="Dismiss toast"
      >
        <X size={16} />
      </button>

      {/* Progress countdown bar */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: duration / 1000, ease: "linear" }}
        className={`absolute bottom-0 left-0 h-1 ${config.progressBg}`}
      />
    </motion.div>
  );
}

