// const GitHubApi = require('node-github')
// const github = new GitHubApi({
//   debug: true
// })
// github.authenticate({
//   type: 'oauth',
//   token: '1e9f583707359b2ee78f0c4050b8ac660210adae'
// })

// github.repos.gerAll({
//   'affiliation': 'owner, organization_member'
// })
// const fetch = require('node-fetch')
// module.exports = async () => {
//   const request = await fetch('https://api.github.com/user/gaojianxun/repos', {
//     header: {
//       'accept': 'application/vnd.github.mercy-preview+json'
//     }
//   })
//   const data = await request.json()
//   return data
// }
// var GitHubApi = require('node-github')
const GitHubApi = require('node-github')
// const asanaApi = require('asana')
const github = new GitHubApi({
  version: '3.0.0'
})
github.authenticate({
  type: 'oauth',
  token: '1e9f583707359b2ee78f0c4050b8ac660210adae'
})

// asana_key = 0/6526200b1c69d4af267e1d61bff6adbd
module.exports = async () => {
  // github.user.getFollowing({
  // }, function(err, res) {
  //   console.log(err)
  //     console.log(JSON.stringify(res));
  // });
  // github.repos.getAll({
  //   'affiliation': 'owner,organization_member'
  // }, function (err, res) {
  //   console.log(JSON.stringify(res))
  // })
  github.pullRequests.getAll({
    user: 'tigerbrokers',
    repo: 'gem',
    state: 'open'
  }, function (err, res) {
    
  })
}

// TODO: optional authentication here depending on desired endpoints. See below in README.

// github.users.getFollowingForUser({
//     // optional
//     // headers: {
//     //     "cookie": "blahblah"
//     // },
//   username: 'defunkt'
// }, function (err, res) {
//   if (err) throw err
//   console.log(JSON.stringify(res))
// })
