import { useEffect, useRef, useState } from 'react'

const Home = () => {
  const inputRef = useRef(null)
  const [updated, setUpdated] = useState('')

  const handleClick = () => {
    document.getElementById("liveData").innerHTML = ""
    setUpdated(inputRef.current.value)
  }

  useEffect(() => {
    const fetch = require('node-fetch');

    const url = 'https://api-football-v1.p.rapidapi.com/v3/standings?season='+updated+'&league=39';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a7bc8e7b5fmsh878701ce1dc6cb3p1d0d8fjsn07f3e8faa102',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)

        for (let i=0; i<json.response[0].league.standings[0].length;i++){
          document.getElementById("liveData").innerHTML += 
          "<tr> <td>"+json.response[0].league.standings[0][i].rank + 
          "</td>  <td>" +json.response[0].league.standings[0][i].team.name +
          "</td> <td> <img src="+ json.response[0].league.standings[0][i].team.logo+ "></img></td> <td>"+ json.response[0].league.standings[0][i].points+ 
          "</td> <td>"+json.response[0].league.standings[0][i].goalsDiff+ 
          "</td> <td>"+json.response[0].league.standings[0][i].all.win+"-"+json.response[0].league.standings[0][i].all.draw+"-"+json.response[0].league.standings[0][i].all.lose + "</td></tr>"
 
        }

      }
        )
      .catch(err => console.error('error:' + err));


  })

  return (


  <div className='h-full w-full bg-stone-400'>
    <div className='flex bg-black text-white justify-center'>
      Premier League Standing
    </div>

    <div>
      <input
        className='border border-black'
        placeholder='Enter Year'
        ref={inputRef}
        type="text"
        name="year"></input>
      <button className="bg-black text-white"
        onClick={handleClick}>Search </button>
    </div>
    <table id="liveTable" className="w-full h-screen text-center">
      <thead>
        <tr >
          <th>Rank</th>
          <th>Team</th>

          <th></th>
          <th>Points</th>

          <th>Goals diff</th>
          <th>Record</th>
        </tr>
      </thead>

      <tbody id="liveData" className="text-black">


      </tbody>


    </table>
  </div>
  )
};

export default Home;
