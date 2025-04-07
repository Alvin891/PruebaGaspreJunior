const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

router.use('/events', require('./events.routes'));
router.use('/attendees', require('./attendees.routes'));

module.exports = router;