import _ from 'lodash'
import all from '../posts/*.md'

export const posts = _.chain(all) // begin a chain
                      .map(transform) // transform the shape of each post
                      .orderBy('date', 'desc') // sort by date descending
                      .value() // convert chain back to array

function transform({filename, html, metadata}) {
  const permalink = filename.replace(/\.md$/, '')
  const date = new Date(metadata.date).toDateString()

  return {...metadata, filename, html, permalink, date}
}

export function findPost(permalink) {
  return _.find(posts, {permalink})
}