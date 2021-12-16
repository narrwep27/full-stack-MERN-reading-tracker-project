const router = require('express').Router();

router.post('/:username/addbook', (req, res) => {
    res.send(`addbook route with user name: ${req.params.username}`);
});

module.exports = router;