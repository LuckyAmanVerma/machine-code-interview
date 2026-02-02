import React from 'react';
import styles from "./index.module.css";
import { IChipText,IChip } from '@/Interfaces/ChipText';
const ChipText =({data}:IChipText)=>{
return <ul className={styles.chipWrapper} aria-label="chip-wrapper">
    {
        data.map((chip:IChip)=><li aria-label="chip-text" key={chip.key}>{chip.label}</li>)
    }
</ul>
}

export default ChipText;
