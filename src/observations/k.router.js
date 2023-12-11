const router = require("express").Router({mergeParams: true})
const knex = require("../db/connection");
const tableName = "observations";
function list() {
    return knex(tableName).select();
  }


router.route("/").get(async (req, res) => {
    const data = await list();
    console.log("fdsaf")
    res.json({
      data,
    });
  })

module.exports = router