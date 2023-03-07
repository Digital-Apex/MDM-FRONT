import React from 'react'

interface Props {
    icon: string;
}


export default function MenuCard({icon}:Props) {
    return (
        <div className="card card-menu">
            <span className={"fa-solid "+icon}></span>
        </div>
    )
}
