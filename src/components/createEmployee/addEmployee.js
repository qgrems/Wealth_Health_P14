import { ModalContext } from "../context/modalContext"
import { useDepartmentHook } from "../hook/departmentHook"
import * as React from 'react';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useStateHook} from "../hook/stateHook";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import  Modal from 'modal-save-employee-p14';


export function AddEmployee(){
    const {employee, setEmployee} = React.useContext(ModalContext)
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLasteName] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState(null);
    const [startDate, setStartDate] = React.useState(null);
    const [street, setStreet] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [zipCode, setZipCode] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [modalState, setmodalState] = React.useState(false)
    const [content, setContent] = React.useState("");


    function openModal(){
        setmodalState(!modalState)
    }

    const handleChangeDepartment = (event) => {
        setDepartment(event.target.value);
    }; 
    const handleChangeState = (event) => {
        setState(event.target.value);
    }; 
    
    const addEmployee = {id:employee.length+1, lastName: lastName, firstName: firstName, startDate:startDate, department:department, dateofbirth:dateOfBirth, street:street, city:city, state:state, zipcode:zipCode}
    
    function saveData(){
        if(lastName.length>2 && firstName.length > 2 && startDate!==null&& dateOfBirth !==null && department.length > 2  && street.length > 2 && city.length > 2 && state.length > 2 && zipCode.length > 2)
        {
            setContent("Employee Created!")
            setEmployee(employee=> [...employee, addEmployee])
            openModal()
        }
        else {
            setContent("Erreur de formulaire")
            openModal()
        }
       
    }
    const departmentDatas = useDepartmentHook()
    const stateDatas = useStateHook()
    return(
    <section className="modal">
        <h1>HRnet</h1>
        <p><Link to="/CurrentEmployees">View Current Employees</Link></p>
        <fieldset>
        <legend>Create Employee</legend>
                <section className="sizeForm">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, minWidth: 250},
                            }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField  id="firstname" label="First Name" variant="outlined" onChange={(e) => setFirstName(e.target.value)}/>
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, minWidth: 250},
                            }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField  id="lastName" label="Last Name" variant="outlined" onChange={(e) => setLasteName(e.target.value)}/>
                    </Box>
                    <Box sx={{m: 1, minWidth: 250, maxWidth: 250 }}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                                label="Date of Birth"
                                Date of Birth
                                value={dateOfBirth}
                                onChange={(newValue) => {
                                    setDateOfBirth(newValue.format("MM/DD/yyyy"));
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider> 
                    </Box>
                    <Box sx={{m: 1, minWidth: 250, maxWidth: 250 }}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                                label="Start Date"
                                Date of Birth
                                value={startDate}
                                onChange={(newValue) => {
                                    setStartDate(newValue.format("MM/DD/yyyy"));
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider> 
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, minWidth: 250},
                            }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField  id="street" label="Street" variant="outlined" onChange={(e) => setStreet(e.target.value)}/>
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, minWidth: 250},
                            }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField  id="city" label="City" variant="outlined" onChange={(e) => setCity(e.target.value)}/>
                    </Box>

                    <Box 
                        sx={{ m: 1, minWidth: 250, maxWidth: 250 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select 

                                onChange={handleChangeState}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                //value={data.name}
                                label="State"
                                value={state}
                                    >
                                        {
                                            stateDatas.map((stateData)=>
                                            <MenuItem  key={stateData.name }value={stateData.name}>{stateData.name}</MenuItem>
                                      
                                        )
                                    }
                            </Select>
                        </FormControl>
                    </Box> 
                        
                    <Box
                        component="form"
                        sx={{
                                '& > :not(style)': { m: 1, minWidth: 250, maxWidth: 250},
                            }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField  id="zipcode" label="Zip Code" variant="outlined" onChange={(e) => setZipCode(e.target.value)}/>
                    </Box>
                    <Box 
                        sx={{m: 1, minWidth: 120, maxWidth: 250 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label2">Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-label2"
                                id="demo-simple-select2"
                                value={department}
                                label="Department"
                                onChange={handleChangeDepartment}
                            >
                                {
                                         departmentDatas.map((departmentData)=>
                                         <MenuItem  key={departmentData.name }value={departmentData.name}>{departmentData.name}</MenuItem>
                                    )
                                }          
                            </Select>
                        </FormControl>
                    </Box>
                    <Modal content={content} toggle={modalState} action={openModal}/>
                </section>
            </fieldset>
                <Button variant="outlined" onClick={saveData}>Save</Button>
        </section>
    )
}