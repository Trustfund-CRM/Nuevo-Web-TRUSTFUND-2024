import React, { useState } from 'react';
import styles from './Dropdown.module.css'; // Ajusta la ruta según sea necesario

const Dropdown = ({ options, onSelect, placeholder, colorDuracion, colorTipoDePropiedad }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div    style={{
      border:`solid 1px ${placeholder === "Tipo" ? colorTipoDePropiedad : colorDuracion }`
    }} className={styles.dropdown} onBlur={closeDropdown} tabIndex={0}>
      <div className={styles.selectedOption} onClick={toggleDropdown}>
        {selectedOption || placeholder}
      </div>
      {isDropdownOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={option} onClick={() => handleSelectOption(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default Dropdown;