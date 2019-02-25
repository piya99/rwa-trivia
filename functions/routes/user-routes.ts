
import * as express from 'express';
const router = express.Router();
const userAuth = require('../middlewares/auth');


const userController = require('../controllers/user.controller');

router.get('/:userId', userController.getUserById);
router.get('/profile/:userId/:imageName/:width/:height', userController.getUserImages);
router.post('/profile', userAuth.authorizedOnly, userController.generateUserProfileImage);
// This should not take user id as param
// and must have authorizedOnly middleware otherwise anyone can call it
// must be post
router.get('/update-lives/:userId', userController.updateLives);

module.exports = router;
