import React from 'react'
import { CgUnavailable } from 'react-icons/cg'
import { Tracks } from '../interfaces/Tracks'

interface TracksInfoProps {
    track: Tracks
}

function TracksInfo({ track }: TracksInfoProps) {
    const { name, album, artists, id } = track
  return (
    <div 
    className="flex justify-between w-100 h-auto m-2 p-2 rounded-xl bg-active bg-opacity-10 transition-all hover:scale-105 hover:bg-opacity-40 md:my-4 lg:p-3"
  >
    { album.images.length !== 0 ? (
      <img
        src={album.images[0].url}
        alt={`${name} album photo`}
        className="h-20 rounded-xl lg:h-22"
      />
    ) : (
      <CgUnavailable
        size={80}
        className="h-20 w-24 bg-active bg-opacity-10 rounded-xl transition-all hover:scale-105 hover:bg-opacity-40"
      />
    )}
    <div className="flex flex-col w-full py-1 px-2 justify-around lg:px-6">
      <p className="text-mediumSize leading-tight lg:text-bodySize">{name}</p>
      {/* <p className="text-mediumSize leading-tight lg:text-bodySize">{artists.map((art: string) => art)}</p> */}
    </div>
  </div>
  )
}

export default TracksInfo
