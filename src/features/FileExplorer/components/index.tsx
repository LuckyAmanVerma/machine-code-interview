import { useCallback, useState } from 'react';
import styles from '../styles/FileExplore.module.css';
import fileStructure from '../constant/data.json';
import TreeNode,{ FileNode } from './TreeNode';

const useExpanded = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = useCallback((path: string) => {
    setExpanded(prev => ({ ...prev, [path]: !prev[path] }));
  }, []);

  const isExpanded = useCallback(
    (path: string) => !!expanded[path],
    [expanded]
  );

  return { toggle, isExpanded };
};

const FileExplorer = () => {
  const { toggle, isExpanded } = useExpanded();
  const data = fileStructure as FileNode;

  const onOpenFile = (path: string) => {
    console.log('Open file:', path);
  };
  

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <strong>File Explorer</strong>
      </header>

      <ul className={styles.tree} aria-label="file_explorer" tabIndex={0}>
        {data.children?.map((node, index) => (
          <TreeNode
            key={index}
            node={node}
            path={`/${node.name}`}
            toggle={toggle}
            isExpanded={isExpanded}
            onOpenFile={onOpenFile}
          />
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;
