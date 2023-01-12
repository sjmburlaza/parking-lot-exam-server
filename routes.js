const express = require('express');
const router = express.Router();
const Controller = require('./controller');

router.get('/parking', (req, res) => {
    Controller.getAllParking().then(p => res.send(p))
});

router.get('/entrance', (req, res) => {
    Controller.getAllEntrance().then(p => res.send(p))
});

router.post('/addEntrance', (req, res) => {
    Controller.addEntrance(req.body).then(result => res.send(result));
})

router.get('/parked', (req, res) => {
    Controller.getAllParked().then(p => res.send(p))
});

router.get('/unparked', (req, res) => {
    Controller.getAllUnparked().then(p => res.send(p))
});

router.post('/addParking', (req, res) => {
    Controller.addParkingSpot(req.body).then(result => res.send(result));
})

router.put('/updateParking', (req, res) => {
    const params = {
        id: req.body.id,
        size: req.body.size,
        distancesFromEntrance: req.body.distancesFromEntrance,
        isVacant: req.body.isVacant
    }
    Controller.updateParking(params).then(user => res.send(user));
})

router.post('/parkVehicle', (req, res) => {
    Controller.parkVehicle(req.body).then(result => res.send(result));
})

router.put('/unparkVehicle', (req, res) => {
    const params = {
        id: req.body.id,
        entryPoint: req.body.entryPoint,
        type: req.body.type,
        parkingSpot: req.body.parkingSpot,
        timeOfEntry: req.body.timeOfEntry,
        timeOfExit: req.body.timeOfExit,
        chargedFee: req.body.chargedFee,
        isParked: req.body.isParked
    }
    Controller.unparkVehicle(params).then(user => res.send(user));
})

module.exports = router;