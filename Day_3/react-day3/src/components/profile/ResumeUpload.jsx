import { useState } from "react";

function ResumeUpload({ resume, onResumeChange }) {
  const [selectedFile, setSelectedFile] = useState(resume);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      onResumeChange(file);
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">
        Resume
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Upload your latest resume in PDF or Word format.
      </p>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Choose Resume
        </label>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full rounded-lg border border-gray-300 p-2 text-sm"
        />
      </div>

      {selectedFile && (
        <p className="mt-3 text-sm text-green-600">
          Selected file: {selectedFile.name}
        </p>
      )}
    </div>
  );
}

export default ResumeUpload;