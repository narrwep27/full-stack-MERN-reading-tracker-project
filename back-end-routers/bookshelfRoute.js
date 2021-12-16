const router = require('express').Router();

router.get('/:username/bookshelf', (req, res) => {
    res.send(`bookshelf route with username: ${req.params.username}`);
});

module.exports = router;