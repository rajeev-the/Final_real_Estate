import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

// 1. Create Context
const AppContext = createContext();

// 2. Create Provider Component
export const AppProvider = ({ children }) => {
  const [property, setProperty] = useState([]);
  const [maindata , setMaindata] = useState()
  const url = "https://finalbackend111.pythonanywhere.com/api/"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${url}property/`);
        const reb = await axios.get(`${url}general_data/`)
        setMaindata(reb?.data[0])

        if (res.status === 200) {
          // setProperty(res?.data);
          setProperty(res?.data.filter((item)=>item.isvaild))

        }
      } catch (error) {
        console.log("Error fetching property data:", error);
      }
    };

    fetchData(); // ✅ Call the function inside useEffect
  }, []);

  return (
    <AppContext.Provider value={{ property , maindata }}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom Hook for easier access
export const useAppContext = () => {
  return useContext(AppContext);
};
