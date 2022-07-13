const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../../Note_taker/public/index.html'));
});

module.exports = router;