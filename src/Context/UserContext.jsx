
// import { createContext, useState, useContext, useEffect } from "react";

// // 1. Create Context
// const UserContext = createContext();

// // 2. Create Provider Component
// export const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
 

//   return (
//     <UserContext.Provider value={{ users ,setUsers }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // 3. Custom Hook for easier access
// export const useUserContext = () => {
//   return useContext(UserContext);
// };
