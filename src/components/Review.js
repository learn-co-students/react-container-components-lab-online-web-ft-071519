import React from 'react'

const Review = ({ byline, headline, summary_short, link, link_text }) => (
  <div className={'review'}>
    <h2>{ headline }</h2>
    <h3>{ byline }</h3>
    <p>{ summary_short }</p>
    <a href={link}>{ link_text }</a>
  </div>
)

export default Review
