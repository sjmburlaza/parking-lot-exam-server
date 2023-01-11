const Vehicle = require('./model/Vehicle');
const Parking = require('./model/Parking');

module.exports.getAllParking = () => {
	return Parking.find().then(parking => parking)
};

module.exports.getAllParked = () => {
	return Vehicle.find({ isParked: true }).then(v => v)
};

module.exports.getAllUnparked = () => {
	return Vehicle.find({ isParked: false }).then(v => v)
};

module.exports.addParkingSpot = (params) => {
    let parking = new Parking({
        id: params.id,
        size: params.size,
        distancesFromEntrance: params.distancesFromEntrance,
        isVacant: params.isVacant
    });

    return parking.save().then((parking, err) => {
        return (err) ? false : true;
    })
}

module.exports.updateParkingSpot = (params) => {
    return Parking.updateOne(
        {
            id: params.id,
        },
        {
            $set: {
                "id": params.id,
                "size": params.size,
                "distancesFromEntrance": params.distancesFromEntrance,
                "isVacant": params.isVacant
            }
        }
    )
    .then((user, err) => {
		return err ? false : true;
	});
}

module.exports.parkVehicle = (params) => {
    let vehicle = new Vehicle({
        id: params.id,
        entryPoint: params.entryPoint,
        type: params.type,
        parkingSpot: params.parkingSpot,
        timeOfEntry: params.timeOfEntry,
        timeOfExit: params.timeOfExit,
        chargedFee: params.chargedFee,
        isParked: params.isParked
    });

    return vehicle.save().then((vehicle, err) => {
        return (err) ? false : true;
    })
}

module.exports.unparkVehicle = (params) => {
    return Vehicle.updateOne(
        {
            id: params.id,
        },
        {
            $set: {
                "id": params.id,
                "entryPoint": params.entryPoint,
                "type": params.type,
                "parkingSpot": params.parkingSpot,
                "timeOfEntry": params.timeOfEntry,
                "timeOfExit": params.timeOfExit,
                "chargedFee": params.chargedFee,
                "isParked": params.isParked
            }
        }
    )
    .then((user, err) => {
		return err ? false : true;
	});
}