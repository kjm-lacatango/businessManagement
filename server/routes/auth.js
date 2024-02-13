import express from 'express'
import { login, register, updateProfile } from '../controllers/auth.js'

const Router = express.Router()

Router.post('/login', login)
Router.post('/register', register)
Router.post('/updateProfilePic', updateProfile)

export default Router