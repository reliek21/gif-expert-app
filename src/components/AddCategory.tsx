import { FC, ReactNode, useState } from 'react';

interface AddCategoryProps {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddCategory: FC<AddCategoryProps> = ({ setCategories }): ReactNode => {
  const [inputValue, setInputValue] = useState('One Punch');

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    setCategories(category => [inputValue, ...category]);
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