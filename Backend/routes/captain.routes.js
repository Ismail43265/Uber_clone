const express=require("express");
const captainController=require("../controllers/captain.controller");
const router=express.Router();
const {body}=require("express-validator");
const authMiddleware=require("../middlewares/auth.middleware")

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 letters'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 caharcters'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity my be atleast 1'),
    body('vehicle.vehicleType').isIn(['Car', 'motorcycle', 'Auto'])
], captainController.captainRegister)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('password must be atleast 6 characters')
], captainController.captainlogin)

router.get('/profile',authMiddleware.authCaptain, captainController.captainProfile)
router.get('/logout',authMiddleware.authCaptain, captainController.captainLogout)


module.exports=router;
