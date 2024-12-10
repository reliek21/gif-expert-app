import { ReactNode, useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function App(): ReactNode {
  const [categories, setCategories] = useState<string[]>(['One Punch', 'Samurai X']);

  const onAddCategory = (newCategory: string): void => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>Gif Expert APp</h1>
      
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category: string) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default App;
