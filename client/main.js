import { Template } from 'meteor/templating'
import { Session } from 'meteor/session'
import { HTTP } from 'meteor/http'
import './main.html';

Template.favicon.onCreated(function faviconOnCreated() {

})

Template.favicon.helpers({
  url() {
    console.log('what the hell')
    return Session.get('faviconUrl')
  }
})

Template.favicon.events({
  'submit form'(event) {
    console.log('been clicked')
    const url = event.target.url.value
    console.log('url is', url)
    event.preventDefault()
    Meteor.call('getFavicon',url, (err, result) => {
      if (err) {
        Session.set('faviconUrl', 'Error finding favicon, website may not have a url. Please try another URL preceded with http://www.')
      } else {
        Session.set('faviconUrl', result)
      }
    })
  }
})
