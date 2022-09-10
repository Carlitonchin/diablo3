import { get } from 'axios'
import store from '../store'
import { locales } from '../utils/regions'

const PROTOCOL = "https://"
const HOST = '.api.blizzard.com/'

/**
 * Returns the specified account profile.
 * GET – /d3/profile/{account}
 * Los parámetros que hemos obtenido a través de la URL
 *  - @param region {String}
 *  - @param account {String}
 * @returns {Promise}
 */
 function getApiAccount (region, account) {
    const resourse = `d3/profile/${account}/`
    const API_URL = `${PROTOCOL}${region}${HOST}${resource}`

    const params = {
        access_token: store.state.oauth.accessToken,
        locale
      }

    return get(API_URL, {params})
 }

 export {
    getApiAccount
 }