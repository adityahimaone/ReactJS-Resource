import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

type ItemsProps = { items: number[]; title: string };

function DemoList({ items, title }: ItemsProps) {
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a: number, b: number) => a - b);
  }, [items]);

  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DemoList;
