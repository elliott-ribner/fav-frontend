import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  getFavicon(url) {
    this.unblock()
    check(url, String)
    try {
      const result = HTTP.call('POST', "http://FavIcon-env.mcugg3rp3d.us-west-2.elasticbeanstalk.com/get-favicon", { data: { url: url }})
      return result
    } catch(e) {
      console.log('err in get favicon',e)
      throw new Error("Error fetching url:", url)
    }


  }
})
