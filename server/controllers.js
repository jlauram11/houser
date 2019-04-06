module.exports = {
    // Get all houses
    getAll: (req,res) => {
        req.app.get('db').view_inventory()
            .then(houses => {
                res.status(200).send(houses)
            })
            .catch(res.status(500).send('Could not retrieve data'));
    }
}