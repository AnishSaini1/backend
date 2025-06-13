require('dotenv').config()

const express = require('express')

const app = express()
const port = 3000

const githubData =

{
  "login": "AnishSaini1",
  "id": 204659192,
  "node_id": "U_kgDODDLZ-A",
  "avatar_url": "https://avatars.githubusercontent.com/u/204659192?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AnishSaini1",
  "html_url": "https://github.com/AnishSaini1",
  "followers_url": "https://api.github.com/users/AnishSaini1/followers",
  "following_url": "https://api.github.com/users/AnishSaini1/following{/other_user}",
  "gists_url": "https://api.github.com/users/AnishSaini1/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AnishSaini1/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AnishSaini1/subscriptions",
  "organizations_url": "https://api.github.com/users/AnishSaini1/orgs",
  "repos_url": "https://api.github.com/users/AnishSaini1/repos",
  "events_url": "https://api.github.com/users/AnishSaini1/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AnishSaini1/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-03-24T06:38:06Z",
  "updated_at": "2025-06-13T09:34:35Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/twitter' , (req,res)=>{
    res.send('anishsainitwitter')
})
app.get('/login' , (req,res)=>{
    res.send("<h1>hello my name is Anish Saini</h1>")
})
app.get('/youtube' , (req,res)=>{
    res.send('<h2>Youtube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
