import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
// import Card from './card/Card';
export default function Dashboard() {

  const [trending, setTrending] = useState([]);
  const [playerdb, setPlayerdb] = useState([]);
  // const Api=b909d678e82f454a84d8487e1da59893;
  useEffect(() => {
    axios.get("https://cricapi.com/api/fantasySquad?apikey=BOBBPOtyxcZsIuxBBpJtj9bJ0843&unique_id=1034809")
      .then((res) => {
        setTrending(res.data.squad);
      })
  }, []);
  const savePlayer = (playerCard) => {
    console.log("I am in the dashboard");
    axios
      .post('http://localhost:3100/news', playerCard, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        if (response.status === 201) {
          // [...contact, response.data]
          setPlayerdb([...playerdb, response.data]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    // <div className='container'>
    // <div className='row' style={{width:"max"}}>
    //             {trending.map((news) => (
    //                 <Card
    //                 urlToImage={news.urlToImage}
    //                 title={news.title}
    //                 author={news.author}
    //                 readLater={readLater}
    //                 description={news.description}
    //                 url={news.url}
    //                 />
    //             ))
    //             }
    //         {/* <div className="col-md-6 mt-4">
    //                 <AddContact addContact={saveContact}/>
    //         </div> */}

    // </div>
    // </div>

    <div className="displayContainer">
      {trending.map((news) =>
      (news.players.map(player => (
        <Card
          key={player.pid}
          pid={player.pid}
          name={player.name}
          readLater={savePlayer}


        />
      )))

      )}
    </div>
  )
}
