const dataPool = require("../config/config")

const getUserInfoByIdDB = (req, res) => {
    const id = (+req.params.id)

    dataPool.query('SELECT * FROM FANOUT_USER WHERE ID = $1', [id], (error, results) => {
        if (error){
          throw error
        }
        res.status(200).json(results.rows)
    })
}

const createNewUserDB = (req, res) => {
    const { name, email } = req.body

    dataPool.query('INSERT INTO FANOUT_USER (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
          throw error
        }
        res.status(201).send(`User created with ID: ${results.rows[0].id}`)
    })
}

const updateUserInformationDB = (req, res) => {
    const id = (+req.params.id)
    const { name, email } = req.body

    dataPool.query('UPDATE FANOUT_USER SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User modified with ID: ${id}`)
    })
}

const deleteUserDB = (req, res) => {
    const id = (+req.params.id)

    dataPool.query('DELETE FROM FANOUT_USER WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }

        res.status(200).send(`User deleted with ID: ${id}`)
    })
}


module.exports = {
    getUserInfoByIdDB,
    createNewUserDB,
    updateUserInformationDB,
    deleteUserDB,
}
