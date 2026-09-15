function Toast({
  message,
  type = "success",
  onClose,
}) {
  if (!message) {
    return null;
  }

  const styles = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-500",
    info: "bg-blue-600",
  };

  return (
    <div
      className={`fixed top-5 right-5 z-50 ${styles[type] || styles.success} text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-4`}
      role="alert"
    >
      <span>{message}</span>

      <button
        type="button"
        onClick={onClose}
        className="font-bold text-lg hover:opacity-80"
        aria-label="Close notification"
      >
        &times;
      </button>
    </div>
  );
}

export default Toast;