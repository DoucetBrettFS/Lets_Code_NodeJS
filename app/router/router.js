const express = require('express');
const router = express.Router();

let exercisesDb = [];

/// GET ID portion
// http://Localhsost:3000/exercise
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Successful - GET',
        exercises: exercisesDb,
        metadata: {
            hostname: req.hostname,
            mehtod: req.method
        }
    });
});
// http://localhost:3000/exercise/34
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const exercise = exercisesDb.find((exercise) => {
        return exercise.id === id;
    });

    res.status(200).json({
        message: 'Successful - GET by ID',
        exercise,
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    });
});
/// Post Portion????
router.post('/', (req, res) => {
    console.log('Request body >>>', req.body);
    const data = req.body;
    exercisesDb.push(data);
    res.status(200).json({ message: 'We got the request', data });
});

/// Put
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const exerciseIndex = exercisesDb.findIndex((exercise, index) => {
        return exercise.id === id;
    });

    const exercise = { ...req.body, id };

    exercisesDb.splice(exerciseIndex, 1, exercise);
    res.status(200).json({
        message: ' We got the request',
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    });
});

//Delete
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const exercisesToKeep = exercisesDb.filter(
        (exercise, index) => exercise.id !== id
    );
    exercisesDb = exercisesToKeep;

    res.status(200).json({
        message: 'We got the request',
        metadata: { hostname: req.hostname, method: req.method }
    });
});

module.exports = router;
