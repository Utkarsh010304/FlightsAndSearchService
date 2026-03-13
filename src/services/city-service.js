const {CityRepository}=require("../repository/index");

class CityService{
    constructor(){
        this.cityRepository=new CityRepository();
    }
    async createCity(){
        try{
            const city=await this.cityRepository.createCity(data);
            return city;
        }
        catch(error){
            console.log("Something went wong in the servics Layer");
            throw{error};
        }
    }
    async deleteCity(){
        try{
            const response=await this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch(error){
            console.log("Something went wong in the servics Layer");
            throw{error};
        }
    }
    async updateCity(){
        try{
            const city=await this.cityRepository.updateCity(cityId,data);
            return city; 
        }
        catch(error){
            console.log("Something went wong in the servics Layer");
            throw{error};
        }
    }
    async getCity(){
        try{
            const city=await this.cityRepository.getCity(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wong in the servics Layer");
            throw{error};
        }
    }
}
module.exports=CityService;