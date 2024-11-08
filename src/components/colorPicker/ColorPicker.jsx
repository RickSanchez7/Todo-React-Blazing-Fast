import { useState } from 'react';

import styles from './ColorPicker.module.css';

export const ColorPicker = ({ color, onChange }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={styles.picker}
      style={{ background: color }}
      onClick={() => setOpen(!isOpen)}
    >
      <span style={{ width: '22px', height: '22px', borderRadius: '50%' }}>
        <input
          style={{ width: '100%', height: '100%', opacity: 0 }}
          type='color'
          value={color}
          onChange={e => onChange(e.target.value)}
        />
      </span>
    </div>
  );
};
