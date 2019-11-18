import React from 'react'
import Review from "./Review";

const MovieReviews = ({ reviews }) =>
  <ul className={'review-list'}>
    {reviews.map(m => {
      return(
        <li className={'review'}>
          <Review byline={m.byline} headline={m.headline} summary_short={m.summary_short} link={m.link.url} link_text={m.link.suggested_link_text} />
        </li>)
    })}
  </ul>

export default MovieReviews
