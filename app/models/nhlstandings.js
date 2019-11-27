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
    IsMetropolitan: computed('Division', function(){
        if(this.get('Division') === 'Metropolitan')
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
    IsPacific: computed('Division', function(){
        if(this.get('Division') === 'Pacific')
        {
            return true;
        }
        else {
            return false;
        }
    }),
    TeamLogo: computed('Key',function(){

        switch(this.get('Key')){

            case "ANA": return "https://user-images.githubusercontent.com/43256526/69587770-6a8a0880-0f9b-11ea-8d92-89cc11e81391.png";  

            
            case "ARI": return "https://user-images.githubusercontent.com/43256526/69587774-6e1d8f80-0f9b-11ea-8fd7-5f915037ffcc.png";  
   

            case "BOS": return "https://user-images.githubusercontent.com/43256526/69587776-74ac0700-0f9b-11ea-899b-d78dc6e00405.png";  
     

            case "BUF": return "https://user-images.githubusercontent.com/43256526/69587778-7675ca80-0f9b-11ea-92b2-07d5822edf86.png";  
       

            case "CAR": return "https://user-images.githubusercontent.com/43256526/69587797-88576d80-0f9b-11ea-9d57-a4b7cc8ea4a9.png";  


            case "CGY": return "https://user-images.githubusercontent.com/43256526/69587790-81c8f600-0f9b-11ea-8c38-87d771a08f96.png";  
  

            case "CHI": return "https://user-images.githubusercontent.com/43256526/69587802-8beaf480-0f9b-11ea-8ad4-85e12416d315.png";  
          

            case "COL": return "https://user-images.githubusercontent.com/43256526/69587806-8db4b800-0f9b-11ea-90b1-a1159b6e1a2d.png";  
 
            
            case "CBJ": return "https://user-images.githubusercontent.com/43256526/69587807-90171200-0f9b-11ea-9bb9-7a1caaf2316a.png";  
   
            case "DAL": return "https://user-images.githubusercontent.com/43256526/69587809-92796c00-0f9b-11ea-98a6-d7d28ab86125.png";  
    

            case "DET": return "https://user-images.githubusercontent.com/43256526/69587825-9dcc9780-0f9b-11ea-92a2-0dadaaacff6d.png";  
       
 
            case "EDM": return "https://user-images.githubusercontent.com/43256526/69587828-9f965b00-0f9b-11ea-861d-86ea3e5e35be.png";  
    
            case "FLA": return "https://user-images.githubusercontent.com/43256526/69587833-a3c27880-0f9b-11ea-9f96-599692d01933.png";  
     

            case "LA": return "https://user-images.githubusercontent.com/43256526/69587837-a6bd6900-0f9b-11ea-95a3-73d297c83d2b.png";  
       
            
            case "MIN": return "https://user-images.githubusercontent.com/43256526/69587842-a9b85980-0f9b-11ea-81fb-d4ff16e792b0.png";  
    

            case "MON": return "https://user-images.githubusercontent.com/43256526/69587844-ac1ab380-0f9b-11ea-8aa0-879d19a99eb5.png";  
       
            
            case "NAS": return "https://user-images.githubusercontent.com/43256526/69587848-ade47700-0f9b-11ea-94b4-91b527f701d0.png";  
    

            case "NJD": return "https://user-images.githubusercontent.com/43256526/69587849-afae3a80-0f9b-11ea-9c4b-39e45edb395f.png";  

            case "NJ": return "https://user-images.githubusercontent.com/43256526/69587849-afae3a80-0f9b-11ea-9c4b-39e45edb395f.png";  
     
            case "NYI": return "https://user-images.githubusercontent.com/43256526/69587855-b2109480-0f9b-11ea-95e7-55f82c5aaf97.png";  
       

            case "NYR": return "https://user-images.githubusercontent.com/43256526/69587862-b76ddf00-0f9b-11ea-9bc3-0819708fd7e4.png";  
          
            case "OTT": return "https://user-images.githubusercontent.com/43256526/69587881-c05eb080-0f9b-11ea-8b4d-843251472f3e.png";  
        

            case "PHI": return "https://user-images.githubusercontent.com/43256526/69587887-c2c10a80-0f9b-11ea-8bc9-c484208744b0.png";  
     

            case "PIT": return "https://user-images.githubusercontent.com/43256526/69587888-c48ace00-0f9b-11ea-9cfb-68194336414f.png";  
    

            case "SJ": return "https://user-images.githubusercontent.com/43256526/69587890-c6ed2800-0f9b-11ea-9bc9-07383637861a.png";  
      

            case "STL": return "https://user-images.githubusercontent.com/43256526/69587894-c8b6eb80-0f9b-11ea-942c-f48e411b2636.png";  
    

            case "TB": return "https://user-images.githubusercontent.com/43256526/69587897-ca80af00-0f9b-11ea-92e3-7799abb78d6f.png";  
    

            case "TOR": return "https://user-images.githubusercontent.com/43256526/69587900-cc4a7280-0f9b-11ea-94bf-5ce2d3b30cc6.png";  
          
            case "VAN": return "https://user-images.githubusercontent.com/43256526/69587972-0ca9f080-0f9c-11ea-8e55-7a1aa854564e.png";  
         

            case "VEG": return "https://user-images.githubusercontent.com/43256526/69587977-103d7780-0f9c-11ea-9376-cbbb42581f17.png";  
       

            case "WPG": return "https://user-images.githubusercontent.com/43256526/69587986-159ac200-0f9c-11ea-90d6-0752cc3927ce.png";  
      

            case "WAS": return "https://user-images.githubusercontent.com/43256526/69587982-13386800-0f9c-11ea-81f3-d438634d6d7e.png";  
       

        }
 
    

    })
});
