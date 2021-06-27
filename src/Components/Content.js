import React from 'react'
import { useSelector } from 'react-redux';
import ContentItem from './ContentItem';

const Content = () => {
  let timestamp = useSelector(state => state.timestamp);
  return (
    <div className="main">

      {
        timestamp.map((item) => {
          return <ContentItem time={item.time} id={item.id} key={item.id} />;
        })
      }

    </div>
  )
}

export default Content
