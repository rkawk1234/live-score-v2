import {useEffect} from 'react'

const Livescore = () => {
    useEffect(() => {
        const fetch = require('node-fetch');
    
        const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&timezone=America%2FToronto'
      
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'a7bc8e7b5fmsh878701ce1dc6cb3p1d0d8fjsn07f3e8faa102',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        };
      
        fetch(url, options)
          .then(res =>
            res.json()
          )
          .then(json => {
    
      
            for (let i = 0; i < json.response.length; i++) {
      
              document.getElementById("liveData").innerHTML +=
               "<tr> <td><img src=" + json.response[i].teams.home.logo + 
               "><img/></td> <td>" + json.response[i].teams.home.name + 
               "</td> <td>" + json.response[i].goals.home + "</td> <td>"+json.response[i].fixture.status.elapsed + "'</td><td>" 
               + json.response[i].goals.away + " </td>  <td>" + json.response[i].teams.away.name 
               + "</td>  <td> <img src=" + json.response[i].teams.away.logo + "><img/></td> </tr>"
            }
      //json.response[i].fixture.timestamp = start time 
      
          })
          .catch(err => console.error('error:' + err));
    
      })
    


    return <div className='h-full w-full bg-stone-300'>

    <table id="liveTable" className="h-screen w-full text-center  ">
      <thead>
        <tr >
          <th className='w-1/12'></th>
          <th>Home</th>

          <th>Home Score</th>
          <th className='w-1/12'></th>
          <th>Away Score</th>

          <th>Away</th>
          <th className='w-1/12'></th>
        </tr>
      </thead>

      <tbody id="liveData" className="justiy-evenly">



      </tbody>


    </table>



  </div>

}

export default Livescore
