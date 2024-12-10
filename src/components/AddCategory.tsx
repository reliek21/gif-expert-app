import { FC, ReactNode, useState } from 'react';

interface AddCategoryProps {
  onNewCategory: (event: string) => void;
}

const AddCategory: FC<AddCategoryProps> = ({ onNewCategory }): ReactNode => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    const trimmedValue: string = inputValue.trim();
    if (trimmedValue.length <= 1) return;

    onNewCategory(trimmedValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Enter a name to search'
        value={inputValue}
        onChange={handleInputChange}  
      />
    </form>
  );
}
 
export default AddCategory;