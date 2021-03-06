const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection.find().toArray()
    .then((bookings) => res.json(bookings))
    .catch((err) => {
        res.status(500)
        res.json({status: 500, error: err})
    })
  });

  router.get('/:id' , (req, res) => {
    const id = req.params.id
    collection.findOne({_id: ObjectID(id)})
    .then((doc) => res.json(doc))
    .catch((err) => {
      res.status(500)
      res.json({status: 500, error: err})
    })
  });

  router.post('/', (req, res) => {
    const newData = req.body
    if (newData.name && newData.email){
      collection.insertOne(newData)
      .then(result => res.json(result.ops[0]))
      .catch((err) => {
        res.status(500);
        res.json({ status: 500, error: err });
      });
    } else {
      return res.json({status: 500, error: "Enter a name and email"})
    }
    
  })

  router.delete('/:id', (req, res) => {
    const id = req.params.id
    collection.deleteOne({ _id: ObjectID(id)})
    .then((result) => res.json(result))
    .catch((err) => {
        res.status(500);
        res.json({ status: 500, error: err });
      });
  })

  router.put('/:id', (req, res) => {
    const id = req.params.id
    collection.updateOne({_id: ObjectID(id)}, {$set: {checkedIn: true}})
    .then((result) => res.json(result))
    .catch((err) => {
      res.status(500);
      res.json({ status: 500, error: err });
    });
    
  })

  

  return router
}

module.exports = createRouter