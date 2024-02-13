import express from 'express'
const Router = express.Router()
import { addBusiness, delBusiness, getBusiness } from '../controllers/business.js'

Router.post('/addBusiness', addBusiness)
Router.get('/getBusiness', getBusiness)
Router.delete('/delBusiness', delBusiness)

export default Router