const { createActivity } = require ("../controllers/activitiesController")

//post para crear actividad

const createActivitiesHandlers = async (req, res) => {
    const {name, difficulty, duration, season, countries} = req.body;
        
    const newActivity = await createActivity(name, difficulty, duration, season, countries);
   
    try {
        res.status(200).send("Actividad creada con exito")
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
};

module.exports = { createActivitiesHandlers }