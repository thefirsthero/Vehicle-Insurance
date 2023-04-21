module.exports = (app) => {
    const adminController = require('../controllers/admin.controller.js')
    app.get('/get_applications', adminController.getapplications)
    app.get('/get_users', adminController.getusers)
    app.get('/get_policies', adminController.getpolicies)
    app.get('/search_policies/:s', adminController.searchpolicies)
    app.get('/search_applications/:s', adminController.searchapplications)
    app.get('/search_users/:s', adminController.searchusers)
    app.post('/approvepolicy', adminController.approvepolicy)
    app.delete('/deletepolicy/:i', adminController.deletepolicy)
}

