import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import MatchCard from '../MatchCard/MatchCard';

export default function CurrentMatches() {
    const [isLoading, setIsLoading] = useState(true);
    const [matchList, setMatchList] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php',
            params: { completedlimit: '10', inprogresslimit: '5', upcomingLimit: '3' },
            headers: {
                'x-rapidapi-key': 'b3198f048emshed09236a8d2e258p193026jsn6966c5be57a1',
                'x-rapidapi-host': 'dev132-cricket-live-scores-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            //console.log(response);
            setMatchList(response.data.matchList.matches)
        }).catch(function (error) {
            console.error(error);
        }).finally(res => {
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return <Loading type="Circles" color="#007bff" height={200} width={200} />;
    }
    return (
        <div className="displayContainer">
            {matchList.map((match) =>
                <MatchCard
                    match={match}
                    key={match.id} />
            )}
        </div>
    )
}
