import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Data from "./EmployeData";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('')
  const [age,setAge]=useState(0)
  const [id,setId]=useState(0)

  useEffect(() => {
    setData(Data);
  }, []);

const EditHandler=(id)=>{
   const dt=data.filter(item=>item.id===id)
   setId(dt[0].id)
   setFirstName(dt[0].firstName)
   setLastName(dt[0].lastName)
   setAge(dt[0].age)

}

 const DeleteHandler=(id)=>{
  if(id>0){
    if(window.confirm("Are you sure")){
      const dt=data.filter( item => item.id!=id)
      setData(dt);
    }
  }
 
 }
 const SubmitHandler=()=>{
  



 }
 const ClearHandler=()=>{

 }

  return (
    <div className="App">
      <div style={{display : "flex", justifyContent:"center",marginTop:"10px"}}>
        <div>
          <label>FirstName
            <input type='text' placeholder="Enter first name"  onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
          </label>
        </div>
        <div>
          <label>LastName
            <input type='text' placeholder="Enter last name"  onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
          </label>
        </div>
        <div>
          <label>Age
            <input type='text' placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} value={age}/>
          </label>
        </div>
        <div>
          <label>
            <button className="btn btn-primary" onClick={()=>SubmitHandler()}>Submit</button>
            <button className="btn btn-danger" onClick={()=>ClearHandler()}>Clear</button>
          </label>
        </div>

      </div>
      <table className="table table.hover">
        <thead>
          <tr className="tablerow">
            <td>Sr.No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="contentbody">
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                <button className="btn btn-primary" onClick={()=>EditHandler(item.id)}>Edit</button>
                <button className="btn btn-danger" onClick={()=>DeleteHandler(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
