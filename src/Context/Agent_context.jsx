// import axios from "axios";
// import { createContext, useState, useContext, useEffect } from "react";

// // 1. Create Context
// const AgentContext = createContext();

// // 2. Create Provider Component
// export const AgentProvider = ({ children }) => {
//   const [property, setProperty] = useState([]);
//   const [loading, setLoading] = useState(true); // ✅ Add loading state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://127.0.0.1:8000/api/agent/");

//         if (res.status === 200) {
//           setProperty(res.data);
//         }
//       } catch (error) {
//         console.log("Error fetching property data:", error);
//       } finally {
//         setLoading(false); // ✅ Ensure loading is set to false
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <AgentContext.Provider value={{ property, loading }}>
//       {children}
//     </AgentContext.Provider>
//   );
// };

// // 3. Custom Hook for easier access
// export const useAgentContext = () => {
//   return useContext(AgentContext);
// };
