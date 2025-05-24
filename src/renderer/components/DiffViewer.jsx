import React from 'react';

function DiffViewer({ diffs }) {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-medium">差分</h2>
      <pre className="mt-2 p-2 bg-gray-100 rounded">{diffs}</pre>
    </div>
  );
}

export default DiffViewer;