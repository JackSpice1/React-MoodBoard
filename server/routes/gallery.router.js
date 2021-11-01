const { popoverClasses } = require('@mui/material');
const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool'); //connect w/ database 

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const likes= req.body.likes;
    const queryString= `UPDATE gallery SET likes='${likes}' WHERE id=${req.params.id}`;
    pool.query(queryString).then( (results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryString=`SELECT * FROM "gallery" ORDER BY "id" ASC;`;
    pool.query(queryString).then(results=>{
        res.send(results.rows);
    }).catch( err=>{
    console.log(err);
    res.sendStatus(500);
})
}); // END GET Route

//POST route
router.post('/', (req,res)=>{
    console.log(req.body);
    const queryString = `INSERT INTO gallery(path, description) VALUES($1, $2);`;
    let values = [req.body.url, req.body.description];
    pool.query(queryString,  values).then( (results)=>{
        res.send(results.rows)
    }).catch( (err)=>{
        console.log(err);
        res.sendStatus(500);
    })
}); //end POST ROUTE 

//DELETE ROUTE
router.delete( '/delete/:id', (req, res)=>{
    console.log("req.body", req.body);
    //delete from the gallery table where the image id matches the image id in the db 
    let queryString = `DELETE FROM "gallery" where id=${req.body.id};`
    pool.query( queryString ).then( (results)=>{
      res.sendStatus( 200 );
    }).catch( (err)=>{
      console.log( err );
      res.sendStatus( 500 );
    })
  })

module.exports = router;