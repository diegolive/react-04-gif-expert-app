import { useState } from "react";
import PropTypes from 'prop-types';


export const AddCategory = ( { onNewCategory } ) => {

  const [ inputValue, setInputValue ] = useState( '' );

  const onInputChange = ( event ) => {
    setInputValue( event.target.value );
  };

  const onSubmit = ( event ) => {
    event.preventDefault();
    const newValue = inputValue.trim();
    if ( newValue?.length <= 1 ) return;
    // setCategories( categories => [ newValue, ...categories ] );
    onNewCategory( newValue );
    setInputValue( '' );
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  );
};

AddCategory.propTypes = {
  // setCategories: PropTypes.func.isRequired,
  onNewCategory: PropTypes.func.isRequired,
};

// AddCategory.defaultProps = {
// };
