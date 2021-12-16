const router = require('express').Router();

router.get('/existinguser', (req, res) => {
    res.send('existinguser route');
});

module.exports = router;