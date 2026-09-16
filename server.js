const express = require("express");

const app = express();

const PORT = 3000;

const foods = [
    {
        id: 1,
        name: "Adobo",
        price: 50
    },
    {
        id: 2,
        name: "Humba",
        price: 65
    },
    {
        id: 3,
        name: "Lumpia",
        price: 5
    },
    {
        id: 4,
        name: "Menudo",
        price: 85
    },
    {
        id: 5,
        name: "Lechon",
        price: 5500
    }
];

    //Retrieve all food
    app.get("/api/foods", (req, res) => {
        res.json(foods);        
    });

    //Retrieve one food through id
    app.get("/api/foods/:id", (req, res)=>{
        const id = Number(req.params.id);
        const food = foods.find(food => 
            food.id === id
        );

        if(!food){
            return res.status(404).json({
                message:"Food not found"
                });
        }

        res.json(food);

    });

    
   app.use(express.static(__dirname));
   app.listen(PORT, ()=> {
    console.log(`Server running at http://localhost:${PORT}`);

   }); 



