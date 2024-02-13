import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const login = (req, res) => {
    // const {username, password} = req.body

    // db.query('SELECT * FROM users WHERE username = ?', username, (err, result) => {
    //     if (err) console.log(err)
    //     if (result.lenth > 0) {
    //         const checkedPass = bcrypt.compareSync(password, result[0].password)
    //         if (checkedPass) {
    //             const token = jwt.sign({id: result[0].id}, process.env.JWT_SECRET, {expiresIn: '1d'})
    //             res.cookie("token", token, { httpOnly: true })
    //             const {password, ...others} = result[0]
    //             res.json({message: 'Successfully logged in', result: others, token: token})
    //         } else {
    //             res.json({error: 'Incorrect password!'})
    //         }
    //     } else {
    //         res.json({error: 'User not found!'})
    //     }
    // })
}

export const register = (req, res) => {
    // const {fname, lname, username, password} = req.body

    // db.query('SELECT * FROM users WHERE firstname = ? AND lastname = ? AND username = ?', [fname, lname, username], (err, result) => {
    //     if (err) console.log(err)
    //     if (result.length > 0) {
    //         res.json({error: 'User already exists!'})
    //     }
    // })
    // const salt = bcrypt.genSaltSync(10)
    // const hashedPass = bcrypt.hashSync(password, salt)
    // const q = 'INSERT INTO users (firstname, lastname, username, password) VALUES (?, ?, ?)'
    // db.query(q, [fname, lname, username, hashedPass], (err, result) => {
    //     if (err) console.log(err)

    //     db.query('SELECT * FROM users WHERE firstname = ? AND lastname = ?', [fname, lname], (err, result) => {
    //         if (err) console.log(err)
    //         const token = jwt.sign({id: result[0].id}, process.env.JWT_SECRET, {expiresIn: '1d'})
    //         res.cookie("token", token, { httpOnly: true })
    //         const {password, ...others} = result[0]
    //         res.json({message: 'Inserted successfully', result: others, token: token})
    //     })
    // })
}

export const updateProfile = (req, res) => {
    // const image = req.body.image
    // const token = req.headers["x-access-token"]

    // if (!token) res.json({error: 'Not logged in!'})

    // jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
    //     if (err) res.json({error: 'Token not valid!'})

    //     db.query('UPDATE users SET profilePic = ? WHERE id = ?', [image, info.id], (err, result) => {
    //         if (err) console.log(err)

    //         db.query('SELECT * FROM users WHERE id = ?', info.id, (err, result) => {
    //             if (err) console.log(err)

    //             const {password, ...others} = result[0]
    //             res.json({result: others})
    //         })
    //     })
    // })
}