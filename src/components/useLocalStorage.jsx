import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Utilisez le useState pour gérer l'état local
  const [storedValue, setStoredValue] = useState(() => {
    // Essayez de récupérer la valeur du localStorage au chargement initial
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : initialValue;
  });

  // Utilisez le useEffect pour mettre à jour le localStorage chaque fois que la valeur change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  // Retournez la valeur stockée et une fonction pour la mettre à jour
  return [storedValue, setStoredValue];
};

export default useLocalStorage;
