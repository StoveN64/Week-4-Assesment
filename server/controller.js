let database = require('./db.json')


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A lifetime friend shall soon be made", "Go take a rest; you deserve it", "Many will travel to hear you speak", "Now is the time to try something new", "Smile when you are ready"]
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },




    getCharacter: (req, res) => {
        res.status(200).send(database)
    },
    addCharacter: (req, res) => {
    const { name, type, rank } = req.body
        database.push({
            name,
            type,
            rank,
    })

       res.status(200).send(database)
    },
    deleteCharacter: (req, res) => {
        // let database = require('./db.json')
        const { id } = req.params;
        for (let i = 0; database.length; i++){
            if (database[i].id === +id){
                database.splice(i, 1)
                return res.status(200).send(database)
            }
        }
        res.status(400).send("User not found.")
        },
        
        // getSauron: (req, res) => {
        //     let sauron =  "https://wallpaperaccess.com/full/2373914.jpg"
        //     res.status(200).send(sauron) },

        updateCharacter: (req, res) => {
          const { rank } = req.params
          const { type } = req.body
          const lotrIndex =  database.findIndex((element) => element.rank === +rank);
          if (type === 'plus'){
            element[lotrIndex].rank+= 5
          } else if (type === 'minus'){
            element[lotrIndex].rank-= 1
          }
          res.status(200).send(database)
        }
    }