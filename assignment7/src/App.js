import React,{useEffect,useState} from "react";

function App() {
  const [data,setData]=useState([]);
  useEffect(()=>
  {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
    .then((response)=> response.json())
    .then((result)=>{
      result.sort((a,b)=> a.NRR-b.NRR);
      setData(result);
    })
  },[]);
  return (
    <div>
      <h1>IPL Season 2022 Points</h1>
      <table>
        <tr>
          <th>No</th>
          <th>Team</th>
          <th>Matches</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Tied</th>
          <th>NRR</th>
          <th>Points</th>
        </tr>

        <tbody>
          {data.map((team)=>(
          <tr key={team.No}>
            <td>{team.No}</td>
            <td>{team.Team}</td>
            <td>{team.Matches}</td>
            <td>{team.Won}</td>
            <td>{team.Lost}</td>
            <td>{team.Tied}</td>
            <td>{team.NRR}</td> 
            <td>{team.Points}</td> 
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
