import 'dotenv/config'
import { get } from 'env-var'
//import { get } from '../../node_modules/env-var/env-var'

export const envs = {
PORT:get('PORT').required().asPortNumber()
}