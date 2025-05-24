import React, { useState, useEffect } from 'react';
import BranchSelector from './components/BranchSelector';
import CommitProgress from './components/CommitProgress';
import DiffViewer from './components/DiffViewer';

function App() {
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [progress, setProgress] = useState(0);
  const [diffs, setDiffs] = useState('');

  useEffect(() => {
    window.api.runGitCommand('git branch').then(output => {
      const branchList = output.split('\n').map(branch => branch.trim()).filter(branch => branch);
      setBranches(branchList);
    });
  }, []);

  const handleCommit = async () => {
    setProgress(0);
    try {
      await window.api.runGitCommand('git add .');
      setProgress(1);
      await window.api.runGitCommand('git commit -m "Auto commit"');
      setProgress(2);
      await window.api.runGitCommand('git push');
      setProgress(3);
      await window.api.runGitCommand(`git merge ${selectedBranch}`);
      setProgress(4);
    } catch (error) {
      console.error('Git operation failed:', error);
    }
  };

  const handleDiff = async () => {
    const output = await window.api.runGitCommand('git diff');
    setDiffs(output);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Git Gal App</h1>
      <BranchSelector branches={branches} selectedBranch={selectedBranch} setSelectedBranch={setSelectedBranch} />
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white" onClick={handleCommit}>自動コミット</button>
      <CommitProgress progress={progress} />
      <button className="mt-4 px-4 py-2 bg-green-500 text-white" onClick={handleDiff}>差分表示</button>
      <DiffViewer diffs={diffs} />
    </div>
  );
}

export default App;