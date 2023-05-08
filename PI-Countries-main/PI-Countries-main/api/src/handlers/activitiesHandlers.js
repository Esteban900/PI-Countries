const { searchActivities } = require ("../controllers/activitiesController");

//busqueda de todas las actividades turisticas

const getActivitiesHandler = async (req,res) => {
   try {
    const activitiesAll = await searchActivities();
    res.status(200).json(activitiesAll);
   } catch (error) {
    res.status(400).json({ error: error.message})
   }
};

module.exports = {getActivitiesHandler}