import React from 'react'

function ContentItem(data) {
    return (
        <h3 id={data.id}  >you clicked at : {data.time} </h3>
    )
}

export default ContentItem
