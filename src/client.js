import * as sapper from '@sapper/app'
import { googleAnalytics } from './ga.js';

const trackingID = __myapp.env.TRACKING_ID

sapper.start({
  target: document.querySelector('#sapper')
})

if (trackingID) googleAnalytics(trackingID);