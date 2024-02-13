import express from 'express'
const Router = express.Router()
import { createExpenses, getExpenses } from '../controllers/expenses.js'

Router.post('/createExpenses', createExpenses)
Router.get('/getExpenses', getExpenses)

export default Router