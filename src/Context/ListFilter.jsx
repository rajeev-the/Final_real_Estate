import { createContext, useContext, useState } from "react";

const ListFilterContext = createContext();

export const ListFilterProvider = ({ children }) => {
  const [Listfilterlist, setListfilterlist] = useState([]);

  // Add console log for debugging


  const value = {
    Listfilterlist,
    setListfilterlist: (data) => {
      
      setListfilterlist(data);
    }
  };

  return (
    <ListFilterContext.Provider value={value}>
      {children}
    </ListFilterContext.Provider>
  );
};

export const useListFilterContext = () => {
  const context = useContext(ListFilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};