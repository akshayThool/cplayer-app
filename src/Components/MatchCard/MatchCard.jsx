import React from 'react'

export default function MatchCard(props) {
	console.log(props.match.scores);
	return (
		<div className="card grid-item shadow match-item">
			<div className="team-info">
				<div className="home-team-container">
					<div className="home-team">
						{props.match.homeTeam.name}
					</div>
					<div className="team-loc">Home Team</div>
				</div>
				<div className="vs-container">
					VS
				</div>
				<div className="away-team-container">
					<div className="away-team">
						{props.match.awayTeam.name}
					</div>
					<div className="team-loc">Away Team</div>
				</div>
			</div>

			<div className="series">
				{props.match.series.shortName}
			</div>
			<div className="match-name">
				<div>{props.match.name}</div>
				<div>{props.match.venue.name}</div>
			</div>
			{ props.match.scores &&
				<div className="team-score">
					<div className="home-team-container">
						<div className="home-team">
							{props.match.scores.homeScore}
						</div>
						<div className="team-loc">{props.match.scores.homeOvers}</div>
					</div>
					<div className="vs-container">
						VS
				</div>
					<div className="away-team-container">
						<div className="away-team">
							{props.match.scores.awayScore}
						</div>
						<div className="team-loc">{props.match.scores.awayOvers}</div>
					</div>
				</div>
			}

			<div className="match-result">
				{props.match.currentMatchState}
			</div>
		</div>

	)
}
