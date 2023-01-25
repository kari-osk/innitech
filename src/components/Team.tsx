import React from 'react'
import { teamData } from '../data'

export const Team = () => {
  return (
    <div className="bg-dark">
      {teamData.map(team =>(
        <div key={team.id}>
        <h2>{team.title}</h2>
        <p>{team.description}</p>
        <h3>{team.subtitle}</h3>
        </div>
      ))}
    </div>
  )
}
