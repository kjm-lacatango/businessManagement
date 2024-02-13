import express from 'express'
const Router = express.Router()
import { createCommit, getCommit, updateCommit } from '../controllers/commit.js'

Router.post('/createCommit', createCommit)
Router.get('/getCommit', getCommit)
Router.put('/updateCommit', updateCommit)

export default Router