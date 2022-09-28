const dataPool = require('../config/config')

const getAllContactsDB = (req, res) => {
    dataPool.query('SELECT * FROM FANOUT_CONTACTS ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
}

const getOneOfContactDB = (req, res) => {
    const id = (+req.params.id)

    dataPool.query('SELECT * FROM FANOUT_CONTACTS WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

const updateOneContactDB = (req, res) => {
    const id = (+req.params.id)
    const contactId = (+req.params.contactId) //may need editing, need to continue testing this before finalizing this db query
    const { name, number } = req.body

    dataPool.query('PUT QUERY GOES HERE', [name, number, id, contactId], (error, results) => {  //need to learn how to correctly query db with foreign key constraints
      if (error) {
        throw error
      }
      res.status(200).send(`Contact modified with ID: ${contactId}`)
    })
}

const createOfContactDB = (req, res) => {
    const { name, number } = req.body;

    dataPool.query('INSERT INTO FANOUT_CONTACTS (name, number) VALUES ($1, $2) RETURNING *', [name, number], (error, results) =>{
        if (error) {
          throw error
        }
        res.status(201).send(`Contact created with ID: ${results.rows[0].id}`)
    })
}

const deleteOneOfContactDB = (req, res) => {
    const id = (+req.params.id)

    dataPool.query('DELETE FROM FANOUT_CONTACTS WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User deleted with ID: ${id}`)
    })
}


module.exports = {
  getAllContactsDB,
  getOneOfContactDB,
  updateOneContactDB,
  createOfContactDB,
  deleteOneOfContactDB,
}