const { Router } = require ("express");

const { getCountriesHandler, getIdCountrieHandler } = require ("../handlers/countriesHandlers");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/:id", getIdCountrieHandler);

module.exports = countriesRouter;