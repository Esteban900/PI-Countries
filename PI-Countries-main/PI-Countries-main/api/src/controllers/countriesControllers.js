const { Country, Activity } = require ("../db");

const { Op } = require ("sequelize");





//busqueda por name
const searchCountrieByName = async (name) => {
    const aux = name.toLowerCase();
   
   const names = aux.charAt(0).toUpperCase() + aux.slice(1); 
    const countriesSearch = await Country.findAll({
        where: {
            name: {
                [Op.substring]: `${names}`,
            }
        },
        include: {
            model: Activity,
            attributes: 
                ['name','difficulty','duration','season'],
            
            through: {
                attributes: [],
            }
        },
        attributes: {
            exclude:['createdAt', 'updatedAt'],},
    })
if(countriesSearch.length) {
    return countriesSearch;
} else {
    return `El pais: ${name} no existe`;
}
};

//busqueda por id
const getCountriesByID = async (id) => {
    
const countryById = await Country.findAll({
    where:{ id: id},
    include: {
        model: Activity,
        attributes: 
            ['name','difficulty','duration','season'],
        
        through: {
            attributes: [],
        }
    },
    attributes: {
        exclude:['createdAt', 'updatedAt'],},
});

return countryById;
};




module.exports = {getCountriesByID, searchCountrieByName }