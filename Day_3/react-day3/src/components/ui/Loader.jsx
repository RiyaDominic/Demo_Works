function Loader({ size = "medium", text = "" }) {
  const sizes = {
    small: "h-4 w-4",
    medium: "h-8 w-8",
    large: "h-12 w-12",
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <div
        className={`${sizes[size] || sizes.medium} animate-spin rounded-full border-4 border-gray-200 border-t-blue-600`}
        role="status"
        aria-label="Loading"
      />

      {text && (
        <span className="text-gray-600">
          {text}
        </span>
      )}
    </div>
  );
}

export default Loader;