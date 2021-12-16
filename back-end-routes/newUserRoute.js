const router = require('express').Router();

router.post('/newuser', (req, res) => {
    res.send('newuser route');
});

module.exports = router;