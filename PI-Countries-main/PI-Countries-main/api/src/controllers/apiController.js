const { Country, Activity } = require ("../db");
const axios = require ("axios");


const  getDataBd = async (req, res) => {
    //llamado a la api
    let apiCall = await axios.get('https://restcountries.com/v3/all');

    const apiData = await apiCall.data.map( async (country) => {
        //guardo en bd
        return await Country.findOrCreate({
            where: {
                id: country.cca3,
                name: country.name.common,
            },
            defaults: {
                flags: country.flags[0],
                continent: country.continents[0],
                capital: country.capital ? country.capital[0] : "Not found",
                subregion: country.subregion,
                area: country.area,
                population: country.population,
            }
        });
    })
    //llamado a bd
    const apiDataAll = await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: [],
            }
        },
        attributes: {
            exclude:['createdAt', 'updatedAt'],},
    }) 
    
    return apiDataAll; // retorno lo que tengo en bd


}


module.exports = { getDataBd }