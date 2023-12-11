const knex = require("../db/connection");

const tableName = "observations";

function create(newObservation) {
  return knex(tableName).insert(newObservation, "*");
}

function list() {
  const list = knex(tableName).select();
  console.log(list)
}

module.exports = {
  create,
  list,
};