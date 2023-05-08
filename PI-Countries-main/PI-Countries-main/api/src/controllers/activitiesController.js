const { Country, Activity } = require ("../db");

//post
const createActivity = async (name, difficulty, duration, season, countries) =>{
   
    const searchActivity = await Activity.findOne({
        where:{name: name},
    })

    if(searchActivity === null) { 
        
        //CREO UNA NUEVA INSTANCIA DE ACTIVIDAD
       
        const newActivity = await Activity.create({
        name:name,
        difficulty: difficulty,
        duration: duration,
        season: season,
        countries,
    });
       
        //BUSCO LOS PAISES RELACIONADOS POR EL ID
        const country = await Country.findAll({
            where: {
                id: countries,
            }
        })
        
        //ASOCIO LOS PAISES A LA NUEVA ACTIVIDAD
        const result = await newActivity.addCountries(country);
        return result;
    } else {
            const country = await Country.findAll({
            where: {
               name: countries, 
            }
        });
        const result = await searchActivity.addCountries(country);
        return result;
    }
};

//get
const searchActivities = async (req,res) => {
const AllActivities = await Activity.findAll({
    include:{
        model: Country,
        attributes: ['name'],
        through:{
            attributes:[],
        }
    },
    attributes: {
        exclude:['createdAt', 'updatedAt'],},
});
return AllActivities;
};

    
    
module.exports = { createActivity, searchActivities };