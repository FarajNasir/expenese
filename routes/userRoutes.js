import express, { Router } from 'express'
import { loginController, registerController } from '../controller/user.controller.js'

const router=Router()

// POST || REGISTER
router.route('/register').post(registerController)
// POST || login
// router.route("/login").post(loginController)
router.post('/login',loginController)


export default router