import React, { useRef, useEffect, useState } from 'react'


const Pastgames = () => {
    const inputRef = useRef(null)
    const [updated, setUpdated] = useState('')

    const handleClick = () => {
        document.getElementById("liveData").innerHTML = ""
        setUpdated(inputRef.current.value)
    }


    useEffect(() => {
        const fetch = require('node-fetch');

        const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=' + updated + '&timezone=America%2FToronto'


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
                for (let i = 0; i < json.response.length / 10; i++) {
                    document.getElementById("liveData").innerHTML +=
                        "<tr> <td><img src=" + json.response[i].teams.home.logo +
                        "><img/></td> <td>" + json.response[i].teams.home.name +
                        "</td> <td>" + json.response[i].goals.home + "</td> <td>" + json.response[i].fixture.date + "</td><td>"
                        + json.response[i].goals.away + " </td>  <td>" + json.response[i].teams.away.name
                        + "</td>  <td> <img src=" + json.response[i].teams.away.logo + "><img/></td> </tr>"

                }

            }
            )
            .catch(err => console.error('error:' + err));
    })

    return <div className='h-full w-full bg-stone-400'>

        <div >
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
                    <th></th>
                    <th>Home</th>

                    <th>Home Score</th>
                    <th>Away Score</th>

                    <th>Away</th>
                    <th></th>
                </tr>
            </thead>

            <tbody id="liveData" className="text-black">


            </tbody>


        </table>



    </div>
};

export default Pastgames
