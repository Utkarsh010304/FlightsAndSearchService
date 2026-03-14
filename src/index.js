const express=require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser=require("body-parser");

const ApiRoutes=require("./routes/index");

// const {Airport, City}= require("./models/index");
// const db=require("./models/index");



const setupAndStartServer = async() => {

    // create express object
    const app=express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=> {
        console.log(`Server start at ${PORT}`);

        
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter :true});
        }

        // for practicing 
        // const city= await City.findOne({
        //     where: {
        //         id: 1
        //     }
        // });
        // const airports=await city.getAirports();
        // const newAirport= await Airport.findOne({
        //     where: {
        //         id: 1
        //     }
        // })
        // await city.addAirports(newAirport);
        // await city.addAirports({
        //     name: "Jindal vijaynagar airport"
        // })
        // console.log(city, airports);
    })
}
setupAndStartServer();