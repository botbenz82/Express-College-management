const express = require('express');
const { adminRegisterCtlr, adminLoginCtlr, getAllAdminCtlr, updateAdminCtlr, getAdminProfileCtlr, deleteAdminCtlr, adminSuspendTeacherCtlr, adminUnsuspendTeacherCtlr, adminWithdrawTeacherCtlr, adminUnwithdrawTeacherCtlr, adminPublishedExamCtlr, adminUnpublishedExamCtlr } = require('../../controller/staff/adminController');
const isAdmin = require('../../middlewares/isAdmin');
const isLogin = require('../../middlewares/isLogin');

const adminRouter = express.Router()

// Admin Register
adminRouter.post('/register', adminRegisterCtlr)

// Admin Login
adminRouter.post('/login', adminLoginCtlr)

// Get all Admin
adminRouter.get('/', isLogin, isAdmin, getAllAdminCtlr)

// Get Single Admin
adminRouter.get('/profile', isLogin, getAdminProfileCtlr)

// Update Admin
adminRouter.put('/', isLogin, updateAdminCtlr)

// Delete Admin
adminRouter.delete('/:id', deleteAdminCtlr)

// Admin suspending teacher 
adminRouter.put('/suspend/teacher/:id', adminSuspendTeacherCtlr)
 
// Admin Unsuspending teacher
adminRouter.put('/unsuspend/teacher/:id', adminUnsuspendTeacherCtlr)

// Admin Withdrawing teacher
adminRouter.put('/withdraw/teacher/:id', adminWithdrawTeacherCtlr)

// Admin Unwithdrawing teacher
adminRouter.put('/unwithdraw/teacher/:id', adminUnwithdrawTeacherCtlr)

// Admin Published exam
adminRouter.put('/publish/exam/:id', adminPublishedExamCtlr)

// Admin Unpublished exam
adminRouter.put('/unpublish/exam/:id', adminUnpublishedExamCtlr)

module.exports = adminRouter;