import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReadCard from '../ReadCard';
import Card from '../card/Card';
import FavCard from '../favCard/FavCard';

export default function ReadNow() {
    const [readnowlist, setReadnowlist] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3100/news")
            .then((res) => {
                setReadnowlist(res.data);
            })
    }, []);

    const delFav = (id) => {
        console.log("I am here");
        axios.delete(`http://localhost:3100/news/${id}`)
            .then((res) => {
                setReadnowlist(readnowlist.filter((obj) => ( obj.id !== id)));
                alert('Deleted');
            }).catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className='displayContainer'>

            {readnowlist.map((player) => (
                <FavCard
                    key={player.id}
                    pid={player.id}
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
