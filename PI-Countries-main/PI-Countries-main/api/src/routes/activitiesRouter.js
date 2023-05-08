const { Router } = require ("express");

const {getActivitiesHandler} = require ("../handlers/activitiesHandlers");

const { createActivitiesHandlers } = require ("../handlers/postHandlers");

const activitiesRouter = Router();

activitiesRouter.post("/", createActivitiesHandlers);

activitiesRouter.get("/", getActivitiesHandler);

module.exports = activitiesRouter;