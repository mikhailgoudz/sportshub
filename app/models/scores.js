import DS from 'ember-data';
import { computed } from '@ember/object';
const {Model} = DS;

//define the model with the variables we desire
export default Model.extend({
  GameKey: DS.attr('string'),
  Home: DS.attr('string'),
  Away: DS.attr('string'),
  OverUnder: DS.attr('string'),
  IsInProgress: DS.attr('boolean'),
  HomeScore: DS.attr('string'),
  AwayScore: DS.attr('string'),
  IsOver: DS.attr('boolean'),
  AwayTeamMoneyLine: DS.attr('number'),
  HomeTeamMoneyLine: DS.attr('number'),
  positiveAwayOdds: computed ('AwayTeamMoneyLine',function(){

    if(this.get('AwayTeamMoneyLine')>0){
        return true;
    }
    else{
        return false;
    }

}),
positiveHomeOdds: computed ('HomeTeamMoneyLine',function(){

  if(this.get('HomeTeamMoneyLine')>0){
      return true;
  }
  else{
      return false;
  }

}),

HomeLogo : computed ('Home', function(){



    switch(this.get('Home')){

        case "ARI": return "https://user-images.githubusercontent.com/43256526/69488134-3dfab300-0e1a-11ea-8e93-1ce5ee5bed11.png";  
    

        case "ATL": return "https://user-images.githubusercontent.com/43256526/69488164-9467f180-0e1a-11ea-80cd-66ae898ea100.png";      
     

        case "BAL": return "https://user-images.githubusercontent.com/43256526/69488468-9a200000-0e37-11ea-9b0e-b8ed0d7ff34a.png";  
       

        case "BUF": return "https://user-images.githubusercontent.com/43256526/69488475-ab690c80-0e37-11ea-8b5d-0a38385c3f1d.png";  
       

        case "CAR": return "https://user-images.githubusercontent.com/43256526/69488474-a7d58580-0e37-11ea-97b0-27edaf748585.png";  
  

        case "CHI": return "https://user-images.githubusercontent.com/43256526/69488472-a4da9500-0e37-11ea-86e4-fd75028b21d1.png";  
     

        case "CIN": return "https://user-images.githubusercontent.com/43256526/69488470-a0ae7780-0e37-11ea-9ee1-eb6715478a54.png";  
    

        case "CLE": return "https://user-images.githubusercontent.com/43256526/69488469-9d1af080-0e37-11ea-9216-1fa681d8559f.png";  
   

        case "DAL": return "https://user-images.githubusercontent.com/43256526/69488465-94c2b580-0e37-11ea-9615-d47ab1411eb5.png";  
       

        case "DET": return "https://user-images.githubusercontent.com/43256526/69488460-8c6a7a80-0e37-11ea-853a-0f0fa170d69e.png";  
    

        case "DEN": return "https://user-images.githubusercontent.com/43256526/69488463-8ffe0180-0e37-11ea-81b6-811a7e0fcfa8.png";  
       
        
        case "GB": return "https://user-images.githubusercontent.com/43256526/69488459-883e5d00-0e37-11ea-8aad-209f2537aa82.png";  
   

        case "HOU": return "https://user-images.githubusercontent.com/43256526/69488458-84aad600-0e37-11ea-8526-977a57aba749.png";  
     

        case "IND": return "https://user-images.githubusercontent.com/43256526/69488455-7f4d8b80-0e37-11ea-888b-5595c9cb5776.png";  
  

        case "JAX": return "https://user-images.githubusercontent.com/43256526/69488453-78bf1400-0e37-11ea-83c1-432f93f16df0.png";  
     

        case "KC": return "https://user-images.githubusercontent.com/43256526/69488450-72309c80-0e37-11ea-83ab-0fd1c6be03ba.png";  
  

        case "LAR": return "https://user-images.githubusercontent.com/43256526/69488443-693fcb00-0e37-11ea-8a82-5392c01baf91.png";  
        


        case "MIA": return "https://user-images.githubusercontent.com/43256526/69488439-61802680-0e37-11ea-950b-517541960c4b.png";  


        case "MIN": return "https://user-images.githubusercontent.com/43256526/69488436-5b8a4580-0e37-11ea-8a7b-5dfc1605d6bc.png";  
      

    
        case "NE": return "https://user-images.githubusercontent.com/43256526/69488246-aa29e680-0e1b-11ea-8343-aa01bae24ae9.png"; 
       

        case "NO": return "https://user-images.githubusercontent.com/43256526/69488416-0aba2300-0e1e-11ea-86c1-67e5b2c29861.png";  
        

        case "NYG": return "https://user-images.githubusercontent.com/43256526/69488412-f83fe980-0e1d-11ea-958a-518eb6928c03.jpg";  
       

        case "NYJ": return "https://user-images.githubusercontent.com/43256526/69488397-caf33b80-0e1d-11ea-9d47-4f7473e2cd1b.png";  


        case "OAK": return "https://user-images.githubusercontent.com/43256526/69488390-ba42c580-0e1d-11ea-8d41-aa929e90c405.png";  
      

        case "PHI": return "https://user-images.githubusercontent.com/43256526/69488383-aac37c80-0e1d-11ea-8418-6a205038f65a.png";  
       

        case "PIT": return "https://user-images.githubusercontent.com/43256526/69488374-98494300-0e1d-11ea-841a-0b151b8a6ecb.png";  
  
      
        case "SD": return "https://user-images.githubusercontent.com/43256526/69488447-6e047f00-0e37-11ea-9f4f-e21574d9372a.png";  
    

        case "SEA": return "https://user-images.githubusercontent.com/43256526/69488361-764fc080-0e1d-11ea-9873-671ac18cb59e.png";  
    

        case "SF": return "https://user-images.githubusercontent.com/43256526/69488370-85367300-0e1d-11ea-9650-ae0560040bf4.png";  
     

        case "STL": return "https://user-images.githubusercontent.com/43256526/69488374-98494300-0e1d-11ea-841a-0b151b8a6ecb.png";  
    

        case "TB": return "https://user-images.githubusercontent.com/43256526/69488359-659f4a80-0e1d-11ea-9c33-c4e63d68a895.png";  
    

        case "TEN": return "https://user-images.githubusercontent.com/43256526/69488350-3983c980-0e1d-11ea-9ccd-78d326b697ab.png";  
     

        case "WAS": return "https://user-images.githubusercontent.com/43256526/69488344-1ce79180-0e1d-11ea-8778-141e598ec96e.png";  
   
        
       
      }



}),

AwayLogo : computed ('Away', function(){



    switch(this.get('Away')){

        case "ARI": return "https://user-images.githubusercontent.com/43256526/69488134-3dfab300-0e1a-11ea-8e93-1ce5ee5bed11.png";  
    

        case "ATL": return "https://user-images.githubusercontent.com/43256526/69488164-9467f180-0e1a-11ea-80cd-66ae898ea100.png";      
     

        case "BAL": return "https://user-images.githubusercontent.com/43256526/69488468-9a200000-0e37-11ea-9b0e-b8ed0d7ff34a.png";  
       

        case "BUF": return "https://user-images.githubusercontent.com/43256526/69488475-ab690c80-0e37-11ea-8b5d-0a38385c3f1d.png";  
       

        case "CAR": return "https://user-images.githubusercontent.com/43256526/69488474-a7d58580-0e37-11ea-97b0-27edaf748585.png";  
  

        case "CHI": return "https://user-images.githubusercontent.com/43256526/69488472-a4da9500-0e37-11ea-86e4-fd75028b21d1.png";  
     

        case "CIN": return "https://user-images.githubusercontent.com/43256526/69488470-a0ae7780-0e37-11ea-9ee1-eb6715478a54.png";  
    

        case "CLE": return "https://user-images.githubusercontent.com/43256526/69488469-9d1af080-0e37-11ea-9216-1fa681d8559f.png";  
   

        case "DAL": return "https://user-images.githubusercontent.com/43256526/69488465-94c2b580-0e37-11ea-9615-d47ab1411eb5.png";  
       

        case "DET": return "https://user-images.githubusercontent.com/43256526/69488460-8c6a7a80-0e37-11ea-853a-0f0fa170d69e.png";  
    

        case "DEN": return "https://user-images.githubusercontent.com/43256526/69488463-8ffe0180-0e37-11ea-81b6-811a7e0fcfa8.png";  
       
        
        case "GB": return "https://user-images.githubusercontent.com/43256526/69488459-883e5d00-0e37-11ea-8aad-209f2537aa82.png";  
   

        case "HOU": return "https://user-images.githubusercontent.com/43256526/69488458-84aad600-0e37-11ea-8526-977a57aba749.png";  
     

        case "IND": return "https://user-images.githubusercontent.com/43256526/69488455-7f4d8b80-0e37-11ea-888b-5595c9cb5776.png";  
  

        case "JAX": return "https://user-images.githubusercontent.com/43256526/69488453-78bf1400-0e37-11ea-83c1-432f93f16df0.png";  
     

        case "KC": return "https://user-images.githubusercontent.com/43256526/69488450-72309c80-0e37-11ea-83ab-0fd1c6be03ba.png";  
  

        case "LAR": return "https://user-images.githubusercontent.com/43256526/69488443-693fcb00-0e37-11ea-8a82-5392c01baf91.png";  
        


        case "MIA": return "https://user-images.githubusercontent.com/43256526/69488439-61802680-0e37-11ea-950b-517541960c4b.png";  


        case "MIN": return "https://user-images.githubusercontent.com/43256526/69488436-5b8a4580-0e37-11ea-8a7b-5dfc1605d6bc.png";  
      

    
        case "NE": return "https://user-images.githubusercontent.com/43256526/69488246-aa29e680-0e1b-11ea-8343-aa01bae24ae9.png"; 
       

        case "NO": return "https://user-images.githubusercontent.com/43256526/69488416-0aba2300-0e1e-11ea-86c1-67e5b2c29861.png";  
        

        case "NYG": return "https://user-images.githubusercontent.com/43256526/69488412-f83fe980-0e1d-11ea-958a-518eb6928c03.jpg";  
       

        case "NYJ": return "https://user-images.githubusercontent.com/43256526/69488397-caf33b80-0e1d-11ea-9d47-4f7473e2cd1b.png";  


        case "OAK": return "https://user-images.githubusercontent.com/43256526/69488390-ba42c580-0e1d-11ea-8d41-aa929e90c405.png";  
      

        case "PHI": return "https://user-images.githubusercontent.com/43256526/69488383-aac37c80-0e1d-11ea-8418-6a205038f65a.png";  
       

        case "PIT": return "https://user-images.githubusercontent.com/43256526/69488374-98494300-0e1d-11ea-841a-0b151b8a6ecb.png";  
  
      
        case "SD": return "https://user-images.githubusercontent.com/43256526/69488447-6e047f00-0e37-11ea-9f4f-e21574d9372a.png";  
    

        case "SEA": return "https://user-images.githubusercontent.com/43256526/69488361-764fc080-0e1d-11ea-9873-671ac18cb59e.png";  
    

        case "SF": return "https://user-images.githubusercontent.com/43256526/69488370-85367300-0e1d-11ea-9650-ae0560040bf4.png";  
     

        case "STL": return "https://user-images.githubusercontent.com/43256526/69488374-98494300-0e1d-11ea-841a-0b151b8a6ecb.png";  
    

        case "TB": return "https://user-images.githubusercontent.com/43256526/69488359-659f4a80-0e1d-11ea-9c33-c4e63d68a895.png";  
    

        case "TEN": return "https://user-images.githubusercontent.com/43256526/69488350-3983c980-0e1d-11ea-9ccd-78d326b697ab.png";  
     

        case "WAS": return "https://user-images.githubusercontent.com/43256526/69488344-1ce79180-0e1d-11ea-8778-141e598ec96e.png";  
   
        
       
      }

    
})




});