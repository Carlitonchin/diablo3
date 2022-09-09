import { post } from 'axios'

//tokens necesarios para autenticarse
const CLIENT_ID = "8710da4957c544d1b0d330ba176427f0"
const CLIENT_SECRET = "ZOiy6YyDXVzHRHra2HuBSQe7z8ZM802u"

const REGION = 'eu'
const API_URL = `https://${REGION}.battle.net/oauth/token`

function get_token() {
    let body = new FormData()
    body.append('grant_type', 'client_credentials')

    let config = {
        headers: { 'Content-type': 'multipart/form-data' },
        auth: { username: CLIENT_ID, password: CLIENT_SECRET }
    }

    return post(API_URL, body, config)
}

export {
    get_token
}