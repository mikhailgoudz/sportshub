import DS from 'ember-data';
import { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({

    TeamID: DS.attr('string'),
    City: DS.attr('string'),
    Key: DS.attr('string'),
    Name: DS.attr('string'),
    Wins: DS.attr('string'),
    Losses: DS.attr('string'),
    Division: DS.attr('string'),
    IsAtlantic: computed('Division', function(){
        if(this.get('Division') === 'Atlantic')
        {
            return true;
        }
        else {
            return false;
        }
    }),
    IsCentral: computed('Division', function(){
        if(this.get('Division') === 'Central')
        {
            return true;
        }
        else {
            return false;
        }
    }),
    IsSoutheast: computed('Division', function(){
        if(this.get('Division') === 'Southeast')
        {
            return true;
        }
        else {
            return false;
        }
    }),
    IsNorthwest: computed('Division', function(){
        if(this.get('Division') === 'Northwest')
        {
            return true;
        }
        else {
            return false;
        }
    }),
    IsPacific: computed('Division', function(){
        if(this.get('Division') === 'Pacific')
        {
            return true;
        }
        else {
            return false;
        }
    }),
    IsSouthwest: computed('Division', function(){
        if(this.get('Division') === 'Southwest')
        {
            return true;
        }
        else {
            return false;
        }
    }),
    // IsEastern: computed('Conference',function(){

    //     if(this.get('Conference') === 'Eastern'){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }

    // }),
    // IsWestern: computed('Conference',function(){

    //     if(this.get('Conference') === 'Western'){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }

    // }),
    TeamLogo: computed('Key',function(){

        switch(this.get('Key')){

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
            
            case "GS": return "https://user-images.githubusercontent.com/43256526/69488541-a6588d00-0e38-11ea-814c-fff16533ae57.png";  
          
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
            
            case "SA": return "https://user-images.githubusercontent.com/43256526/69488485-a055b280-0e1e-11ea-8f7b-eafdd7f6cc16.png"; 
       
            case "TOR": return "https://user-images.githubusercontent.com/43256526/69488481-9338c380-0e1e-11ea-913e-34fb489a485d.png";  
         

            case "UTA": return "https://user-images.githubusercontent.com/43256526/69488473-81efb700-0e1e-11ea-98b7-3a984e2b7842.png";  
       

            case "WAS": return "https://user-images.githubusercontent.com/43256526/69488467-72706e00-0e1e-11ea-863d-a9fafa181463.png";  
           


        }
 
        


    })
});
