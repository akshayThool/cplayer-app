import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReadCard from '../ReadCard';
import Card from '../card/Card';

export default function ReadNow() {
    const [readnowlist, setReadnowlist] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3100/news")
            .then((res) => {
                setReadnowlist(res.data);
            })
    }, []);
    return (
        <div className='displayContainer'>

            {readnowlist.map((player) => (
                <Card
                    key={player.id}
                    pid={player.id}
                    name={player.name}

                />
            ))
            }
            {/* <div className="col-md-6 mt-4">
                        <AddContact addContact={saveContact}/>
                </div> */}


        </div>
    )
}
