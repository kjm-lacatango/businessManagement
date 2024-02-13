/* create table users (
    id int not null auto_increment primary key,
    firstname varchar(100) not null,
    lastname varchar(100) not null,
    username varchar(100) not null,
    password varchar(255) not null,
    profilePic varchar(255)
) */
// insert into users (firstname, lastname, username, password) values (?, ?, ?, ?)
// select * from users where id = ?

/* create table commits (
    id int not null auto_increment primary key,
    business varchar(200) not null,
    employee varchar(100) not null,
    capital int not null,
    from datetime not null,
    to datetime not null,
    withExp int not null,
    withoutExp int not null,
    createdAt datetime,
    userId int not null,
    foreign key(userId) references users(id)
) */
// insert into commits (business, employee, capital, from, to, withExp, withoutExp, createdAt) values (?, ?, ?, ?, ?, ?, ?, ?)
// select c.*, u,id as uid from commits as c join users as u on (u.id = c.userId) orderby business

/* create table expenses (
    id int not null primary key auto_increment,
    business varchar(200) not null,
    employeeName varchar(200) not null,
    employeeSalary int not null,
    others int not null,
    createdAt datetime not null,
    userId int not null,
    commitId int not null,
    foreign key(commitId) references commits(id),
    foreign key(userId) references users(id)
) */
// insert into expenses (business, employeeName, employeeSalary, others) values (?, ?, ?, ?)
// select e.*, u as uid from expenses as e join users as u on (u.id = e.userId) orderby business
/* select e.business, e.employeeName, sum(e.employeeSalary), sum(e.others), sum(c.withExp) as totalIncome from expenses as e
    join commits as c on(c.id=e.commitId)
    where createdAt= 1 month orderby businesss */

/* create table businesses (
    id int not null auto_increment primary key,
    business varchar(200) not null
    userId int not null,
    foreign key (userId) references users(id)
) */
// insert into businesses (business) values (?, ?)
// select businesses.*, users as uid from businesses join users on (users.id = businesses.userId)
// delete from businesses where id = ?

/* create table employees (
    id int not null primary key auto_increment,
    business varchar(200) not null,
    employee varchar(200) not null,
    userId int not null,
    foreign key(userId) references users(id)
) */
// insert into employees (business, employee) values (?, ?)
// delete from exployees where id = ?
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import commitRouter from './routes/commit.js'
import expensesRouter from './routes/expenses.js'
import businessRouter from './routes/business.js'
import employeeRouter from './routes/employee.js'
import multer from 'multer'
import path from 'path'

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})

app.use('/auth', authRouter)
app.use('/commit', commitRouter)
app.use('/expenses', expensesRouter)
app.use('/business', businessRouter)
app.use('/employee', employeeRouter)
app.use('/uploadPic', upload.single("image"), (req, res) => {
    const file = req.file
    res.json({result: file.filename})
})

app.listen(process.env.PORT, () => console.log(`running on port ${process.env.PORT}`))