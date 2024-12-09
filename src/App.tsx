import { ReactNode, useState } from 'react';
import AddCategory from './components/AddCategory';

function App(): ReactNode {
  const [categories, setCategories] = useState<string[]>(['One Punch', 'Samurai X']);
  const handleAdd = () => setCategories([...categories, 'HunterXHunter']);

  return (
    <>
      <h1>Gif Expert APp</h1>

      <AddCategory setCategories={setCategories} />
      <button onClick={handleAdd}>Add new category</button>

      <ol>
        {categories.map((category: string) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
