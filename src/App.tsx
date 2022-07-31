import { useState, useCallback, useMemo } from 'react';
import './App.css';
// import Header from '@/Components/Header';
// import ReadTheDocs from '@/Components/ReadTheDocs';
import DemoList from '@/Components/Demo';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState<string>('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="App">
      <DemoList items={listItems} title={listTitle} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
