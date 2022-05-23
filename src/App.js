
import './App.css';
import Button from "./components/Button"
import { useEffect, useState } from 'react';
import axios from 'axios';
import CandidateCard from './components/CandidateCard';

function App() {

  const [data,setData] = useState([]);
  const [pss,setPss] = useState(true)
  const [er,setEr] = useState(false)
  const [pg,setPg]= useState(1)
  const [srt,setSrt] = useState("ASC")

  const getdata = () =>{

    axios.get(`https://json-server-mocker-masai.herokuapp.com/candidates/?_page=${pg}&_limit=5&_sort=salary&_order=${srt}`,{

    headers : "Access-Control-Allow-orogin"

    })
    .then((res)=>{
      setData(res.data)
      setPss(false)
     })
    .catch(()=>{
      setEr(true)
    })


  }
  
  useEffect(getdata,[pg,srt])

  const handlenxt = () =>{ setPg(pg+1)}

  const handleprv=()=>{

    if(pg>=2)
    {
      setPg(pg-1)
    }

  }

  const handlesrt = ()=>{ setSrt ("DESC")}



  console.log(data)
  console.log(pg)

  return (
    <div className="App">
     <div>
        
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} onClick={handlesrt} />
        <Button title="PREV" id="PREV" onClick={handleprv} disabled={pg}/>
        <Button id="NEXT" title="NEXT" onClick={handlenxt}/>

        <div id="loading-container">{pss? "...Loading" : ""}</div>
        <div>{er? "Something went wrong!": ""}</div>
      </div>
      {data.map((item) =>(
        <div key={item.id}>
            <CandidateCard item={item}/>
        </div>
      ))}
    </div>
  );
}

export default App;
