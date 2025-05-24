import React from 'react';

function CommitProgress({ progress }) {
  const steps = ['追加', 'コミット', 'プッシュ', 'マージ'];
  return (
    <div className="mt-4">
      <h2 className="text-lg font-medium">進捗状況</h2>
      <ul className="mt-2">
        {steps.map((step, index) => (
          <li key={index} className={`py-1 ${progress > index ? 'text-green-500' : 'text-gray-500'}`}>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommitProgress;