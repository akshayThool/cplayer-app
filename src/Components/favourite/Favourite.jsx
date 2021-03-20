import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FavCard from '../favCard/FavCard';

export default function ReadNow() {
    const [readnowlist, setReadnowlist] = useState([]);

    useEffect(() => {

        const data = {
            username: localStorage.getItem('username'),
        }

        console.log('fav username : ', data.username)

        axios.post('http://localhost:5000/favPlayers/', data)
            .then((res) => {
                console.log("res");
                console.log(res.data);
                setReadnowlist(res.data);
                readnowlist.map((player) => (
                    console.log('player.id')
                ))
            })
            .catch(err => {
                console.log(err)
            })

        // axios.get("http://localhost:3100/news")
        //     .then((res) => {
        //         setReadnowlist(res.data);
        //     })
    }, []);

    const delFav = (id) => {

        const data = {
            username: localStorage.getItem('username'),
            pid: id
        }

        console.log("card pid", id)
        console.log(" localStorage.getItem('username')", localStorage.getItem('username'))

        axios.post('http://localhost:5000/favPlayers/delete', data)
            .then((res) => {
                setReadnowlist(res.data);
                alert('Deleted');
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        // console.log("I am here");
        // axios.delete(`http://localhost:3100/news/${id}`)
        //     .then((res) => {
        //         setReadnowlist(readnowlist.filter((obj) => ( obj.id !== id)));
        //         alert('Deleted');
        //     }).catch((err) => {
        //         console.log(err);
        //     });
    };
    return (
        <div className='displayContainer'>

            {readnowlist.map((player) => (
                <FavCard
                    key={player.pid}
                    pid={player.pid}
                    name={player.name}
                    delFav={delFav}

                />
            ))
            }
            {/* <div className="col-md-6 mt-4">
                        <AddContact addContact={saveContact}/>
                </div> */}


        </div>
    )
}
