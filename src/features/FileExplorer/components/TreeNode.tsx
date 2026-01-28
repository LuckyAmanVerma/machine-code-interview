import React from 'react';
import styles from '../styles/FileExplore.module.css';

export type FileNode = {
    name: string;
    type?: 'file' | 'folder';
    children?: FileNode[];
};

const isFolder = (node: FileNode) =>
    node.type === 'folder' || Array.isArray(node.children);

type Props = {
    node: FileNode;
    path: string;
    level?: number;
    toggle: (path: string) => void;
    isExpanded: (path: string) => boolean;
    onOpenFile?: (path: string) => void;
};

const TreeNode: React.FC<Props> = ({
    node,
    path,
    level = 0,
    toggle,
    isExpanded,
    onOpenFile
}) => {
    const expanded = isExpanded(path);
    const folder = isFolder(node);

    return (
        <li
            role="treeitem" aria-label={node.name}
            aria-expanded={folder ? expanded : undefined}
            className={styles.node} style={{ paddingLeft: 8 + level * 12 }}>
            <div className={styles.row}>
                {folder ? (
                    <button
                        aria-label="Toggle Folder"
                        aria-expanded={expanded}
                        className={styles.chevron}
                        onClick={() => toggle(path)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                toggle(path); // expand/collapse on Enter or Space
                            }
                            if (e.key === "ArrowRight" && !expanded) {
                                toggle(path); // expand on Right arrow
                            }
                            if (e.key === "ArrowLeft" && expanded) {
                                toggle(path); // collapse on Left arrow
                            }
                        }}

                    >
                       <span aria-label="expand_icon" tabIndex={0}> {expanded ? '▾' : '▸'}</span>
                    </button>
                ) : (
                    <span aria-label="file_name" className={styles.placeholder} />
                )}

                <div
                    className={folder ? styles.folderLabel : styles.fileLabel}
                    tabIndex={folder?-1:0}
                    aria-label="open_file"
                    onDoubleClick={() => !folder && onOpenFile?.(path)}
                >
                    <span aria-label={folder ? "folder-icon" : "file-icon"} aria-hidden="true" className={styles.icon}>{folder ? '📁' : '📄'}</span>
                    <span className={styles.name}>{node.name}</span>
                </div>
            </div>
            {folder && expanded && (
                <ul role="group" className={styles.childElement}>
                    {node.children?.map((child, i) => (
                        <TreeNode
                            key={i}
                            node={child}
                            path={`${path}/${child.name}`}
                            level={level + 1}
                            toggle={toggle}
                            isExpanded={isExpanded}
                            onOpenFile={onOpenFile}
                        />
                    ))}
                </ul>
            )}

        </li>
    );
};

export default TreeNode;
