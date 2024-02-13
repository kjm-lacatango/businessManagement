import express from 'express'
const Router = express.Router()
import { addEmployee, delEmployee, getEmployee } from '../controllers/exployee.js'

Router.post('/addEmployee', addEmployee)
Router.get('/getEmployee', getEmployee)
Router.delete('/delEmployee', delEmployee)

export default Router