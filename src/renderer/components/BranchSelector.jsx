import React from 'react';

function BranchSelector({ branches, selectedBranch, setSelectedBranch }) {
  return (
    <div>
      <label htmlFor="branch" className="block text-sm font-medium text-gray-700">ブランチ選択</label>
      <select
        id="branch"
        name="branch"
        value={selectedBranch}
        onChange={(e) => setSelectedBranch(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="">-- 選択してください --</option>
        {branches.map((branch, index) => (
          <option key={index} value={branch}>{branch}</option>
        ))}
      </select>
    </div>
  );
}

export default BranchSelector;