import _ from 'lodash'
import all from '../posts/*.md'

export const posts = _.chain(all) // begin a chain
                      .map(transform) // transform the shape of each post
                      .orderBy('date', 'desc') // sort by date descending
                      .value() // convert chain back to array

function transform({filename, html, metadata}) {
  const permalink = filename.replace(/\.md$/, '');
  const date = new Date(metadata.date);
  let tags = [];

  if (metadata.tags) {
    tags = metadata.tags.split(',').map(str => str.trim())
  }


  return {...metadata, filename, html, permalink, date, tags}
}

export function findPost(permalink) {
  return _.find(posts, {permalink})
}

export function findByTag(tag) {
  return posts.filter(post => post.tags.includes(tag))
}