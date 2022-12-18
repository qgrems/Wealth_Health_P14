import './App.css';
import React from "react"
import { Route, Routes } from 'react-router-dom';
import { CreateEmployee } from './pages/createEmployee';
import DataTable from './components/currentEmployees/tab';
import { ModalContext } from './components/context/modalContext';

function App() {  
  const [employee, setEmployee] = React.useState([
    { id: 1, lastName: 'Snow', firstName: 'Jon', startDate:'12/06/22', department:'Sales', dateofbirth:'10/20/1996', street:'Allee de la cheneviere', city:'Florida', state:'AL', zipcode:'786786' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', startDate:'12/06/22', department:'Sales', dateofbirth:'10/20/1996', street:'Rue Nelson Mandela', city:'Kansas', state:'AS', zipcode:'123456'  },])
  return (
    <ModalContext.Provider value={{employee,setEmployee}}>
      <Routes>
        <Route path="/" element={<CreateEmployee></CreateEmployee>} />
        <Route path="/CurrentEmployees" element={<DataTable></DataTable>} />
      </Routes>
    </ModalContext.Provider>
  );
}

export default App;
