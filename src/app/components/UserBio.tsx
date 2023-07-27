import React from 'react'

interface UserBioProps {
    bio : string;
}
const UserBio = ({bio} : UserBioProps) => {
  return (
    <p className="font-mono text-sm font-medium text-gray-800 dark:text-gray-300 text-center ">
          Bio-{bio === null ? 'Not Available' :bio}
    </p>
  )
}

export default UserBio
