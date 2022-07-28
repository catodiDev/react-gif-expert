import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    //se desestuctura event para extraer el target
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    
    if (newInputValue.length <= 1) return;

    //console.log(inputValue);
    //setCategories((categories) => [inputValue, ...categories]);

    //emite un evento al componente padre
    onNewCategory(newInputValue);
    //limpiar el estado del input limpia el input
    setInputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gift"
        onChange={(event) => onInputChange(event)}
        value={inputValue}
      />
    </form>
  );
};
