const { getCountriesByID, searchCountrieByName } = require ("../controllers/countriesControllers");

const { getDataBd } = require ("../controllers/apiController");

//trae todos los paises
const getCountriesHandler = async (req,res) => {
const { name } = req.query;

const result = (name) ? await searchCountrieByName(name) : await getDataBd();
try {
   res.status(200).json(result);
} catch (error) {
   res.status(400).json( {error: error.message});
}
};

//busqueda por ID
const getIdCountrieHandler = async (req,res) => {
    const { id } = req.params;
  try {
    const countrieId = await getCountriesByID(id);
    res.status(200).json(countrieId);
 } catch (error) {
    res.status(400).json({error: error.message});
 }
}

module.exports = {getCountriesHandler, getIdCountrieHandler}