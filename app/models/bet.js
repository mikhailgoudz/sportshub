import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({

    team: DS.attr('string'),
    odds: DS.attr('string'),
    uid: DS.attr('string'),
    sport: DS.attr('string'),
    datePlaced: DS.attr('string'),
    wager: DS.attr('number'),
    payout: DS.attr('number'),
    positiveOdds: computed ('odds',function(){

        if(this.get('odds')>0){
            return true;
        }
        else{
            return false;
        }

    }),
    teamLogo: computed('team','sport',function(){

       

        if(this.get('sport')=='NFL'){
        switch(this.get('team')){

            case "ARI": return "https://user-images.githubusercontent.com/43256526/69488134-3dfab300-0e1a-11ea-8e93-1ce5ee5bed11.png";
           

            case "ATL": return "https://user-images.githubusercontent.com/43256526/69488164-9467f180-0e1a-11ea-80cd-66ae898ea100.png";  
           

            case "BAL": return "https://user-images.githubusercontent.com/43256526/69488468-9a200000-0e37-11ea-9b0e-b8ed0d7ff34a.png";
          

            case "BUF": return "https://user-images.githubusercontent.com/43256526/69584318-bc2d9580-0f91-11ea-892d-fc3a92dbefcf.png";
          

            case "CAR": return "https://user-images.githubusercontent.com/43256526/69488474-a7d58580-0e37-11ea-97b0-27edaf748585.png";
         

            case "CHI": return "https://user-images.githubusercontent.com/43256526/69488472-a4da9500-0e37-11ea-86e4-fd75028b21d1.png";  
          

            case "CIN": return "https://user-images.githubusercontent.com/43256526/69488470-a0ae7780-0e37-11ea-9ee1-eb6715478a54.png"; 
         

            case "CLE": return "https://user-images.githubusercontent.com/43256526/69488469-9d1af080-0e37-11ea-9216-1fa681d8559f.png";
         

            case "DAL": return "picUrl","https://user-images.githubusercontent.com/43256526/69488465-94c2b580-0e37-11ea-9615-d47ab1411eb5.png";  
      

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
           

            case "TEN":  return "https://user-images.githubusercontent.com/43256526/69488350-3983c980-0e1d-11ea-9ccd-78d326b697ab.png"; 
        

            case "WAS": return "https://user-images.githubusercontent.com/43256526/69488344-1ce79180-0e1d-11ea-8778-141e598ec96e.png";  
            
            
           
          }
        }

        if(this.get('sport') == 'NBA'){

            switch(this.get('team')){

                case "ATL": return "https://user-images.githubusercontent.com/43256526/69488553-c1c39800-0e38-11ea-9ce0-f58d1054c41f.png";  
                
                
                case "BKN": return "https://user-images.githubusercontent.com/43256526/69488551-bcfee400-0e38-11ea-8263-0b927046b84e.png";  
              

                case "BOS": return "https://user-images.githubusercontent.com/43256526/69488552-bf613e00-0e38-11ea-9052-0dfd8257923b.png";  
                

                case "CHA": return "https://user-images.githubusercontent.com/43256526/69488549-ba03f380-0e38-11ea-87e4-06b385157d49.png";  
                

                case "CHI": return "https://user-images.githubusercontent.com/43256526/69488548-b5d7d600-0e38-11ea-8291-9f0feb915852.png";  
                

                case "CLE": return "https://user-images.githubusercontent.com/43256526/69488547-b40e1280-0e38-11ea-8ac4-39b8a5b294cf.png";  
               

                case "DAL": return "https://user-images.githubusercontent.com/43256526/69488546-b1abb880-0e38-11ea-8914-ff4413ef9b6c.png";  
            

                case "DEN": return "https://user-images.githubusercontent.com/43256526/69488545-ad7f9b00-0e38-11ea-9d50-54bb063e17a2.png";  
              

                case "DET": return "https://user-images.githubusercontent.com/43256526/69488544-a9ec1400-0e38-11ea-9779-66b1dd96efa3.png";  
             

                case "GSW": return "https://user-images.githubusercontent.com/43256526/69488541-a6588d00-0e38-11ea-814c-fff16533ae57.png";  
              

                case "HOU": return "https://user-images.githubusercontent.com/43256526/69488540-a3f63300-0e38-11ea-93c7-7be69925c8bf.png";  
              

                case "IND": return "https://user-images.githubusercontent.com/43256526/69488539-a062ac00-0e38-11ea-82f3-d8194c665fa3.png";  
              

                case "LAC": return "https://user-images.githubusercontent.com/43256526/69488538-9ccf2500-0e38-11ea-9a3d-67edde9f2795.png";  
             

                case "LAL": return "https://user-images.githubusercontent.com/43256526/69488536-98a30780-0e38-11ea-9619-9dc3762e834f.png";  
                

                case "MEM": return "https://user-images.githubusercontent.com/43256526/69488534-950f8080-0e38-11ea-8468-7bfef7e26e9f.png";  
              

                case "MIA": return "https://user-images.githubusercontent.com/43256526/69488533-92149000-0e38-11ea-96ec-3506fd47464d.gif";  
              

                case "MIL": return "https://user-images.githubusercontent.com/43256526/69488528-4e615c80-0e1f-11ea-9a36-6af791d7a92c.png";  
             


                case "MIN": return "https://user-images.githubusercontent.com/43256526/69488526-42759a80-0e1f-11ea-8c11-689445ca9d1d.png";  
          

                
                case "NO": return "https://user-images.githubusercontent.com/43256526/69488524-37226f00-0e1f-11ea-8ecd-041a39340fb7.png";  
              

                case "NY": return "picUrl","https://user-images.githubusercontent.com/43256526/69488521-2bcf4380-0e1f-11ea-8f33-1436d9a8ec1a.png";  
            

                case "OKC": return "https://user-images.githubusercontent.com/43256526/69488512-1528ec80-0e1f-11ea-8c06-c4ab5d2f0fa6.png";  
               

                case "ORL": return "https://user-images.githubusercontent.com/43256526/69488508-06dad080-0e1f-11ea-8c76-aba1b85686b0.jpg";  
           

                case "PHI": return "https://user-images.githubusercontent.com/43256526/69488500-d3984180-0e1e-11ea-80a0-98d4383150b8.png";  
               

                case "PHO": return "https://user-images.githubusercontent.com/43256526/69488495-c5e2bc00-0e1e-11ea-9e52-d7e216a9449f.png";  
               

                case "POR": return "https://user-images.githubusercontent.com/43256526/69488492-b6fc0980-0e1e-11ea-8422-89e6c024d75d.png";  
               

                case "SAC": return "https://user-images.githubusercontent.com/43256526/69488488-ac417480-0e1e-11ea-9e71-3037a26d4524.png";  
             

                case "SAS": return "https://user-images.githubusercontent.com/43256526/69488485-a055b280-0e1e-11ea-8f7b-eafdd7f6cc16.png";  
           

                case "TOR": return "https://user-images.githubusercontent.com/43256526/69488481-9338c380-0e1e-11ea-913e-34fb489a485d.png";  
             

                case "UTA": return "https://user-images.githubusercontent.com/43256526/69488473-81efb700-0e1e-11ea-98b7-3a984e2b7842.png";  
           

                case "WAS": return "https://user-images.githubusercontent.com/43256526/69488467-72706e00-0e1e-11ea-863d-a9fafa181463.png";  
               


            }
        }



    })
});
