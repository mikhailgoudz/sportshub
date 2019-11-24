import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({

    session: service(),
    line: ' ',
    team: ' ',
    symbol: ' ',
    picUrl: ' ',
    clicked: false,
    actions:{
        
        moneyline(moneyLine,team){   
            
            if(moneyLine> 0){
                this.set("symbol", '+');
            }

            switch(team){

                case "ARI": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488134-3dfab300-0e1a-11ea-8e93-1ce5ee5bed11.png");  
                break;

                case "ATL":
                this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488164-9467f180-0e1a-11ea-80cd-66ae898ea100.png");      
                break;

                case "BAL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488468-9a200000-0e37-11ea-9b0e-b8ed0d7ff34a.png");  
                break;

                case "BUF": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488475-ab690c80-0e37-11ea-8b5d-0a38385c3f1d.png");  
                break;

                case "CAR": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488474-a7d58580-0e37-11ea-97b0-27edaf748585.png");  
                break;

                case "CHI": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488472-a4da9500-0e37-11ea-86e4-fd75028b21d1.png");  
                break;

                case "CIN": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488470-a0ae7780-0e37-11ea-9ee1-eb6715478a54.png");  
                break;

                case "CLE": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488469-9d1af080-0e37-11ea-9216-1fa681d8559f.png");  
                break;

                case "DAL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488465-94c2b580-0e37-11ea-9615-d47ab1411eb5.png");  
                break;

                case "DET": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488460-8c6a7a80-0e37-11ea-853a-0f0fa170d69e.png");  
                break;

                case "DEN": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488463-8ffe0180-0e37-11ea-81b6-811a7e0fcfa8.png");  
                break;
                

                case "GB": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488459-883e5d00-0e37-11ea-8aad-209f2537aa82.png");  
                break;

                case "HOU": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488458-84aad600-0e37-11ea-8526-977a57aba749.png");  
                break;

                case "IND": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488455-7f4d8b80-0e37-11ea-888b-5595c9cb5776.png");  
                break;

                case "JAX": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488453-78bf1400-0e37-11ea-83c1-432f93f16df0.png");  
                break;

                case "KC": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488450-72309c80-0e37-11ea-83ab-0fd1c6be03ba.png");  
                break;

                case "MIA": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488439-61802680-0e37-11ea-950b-517541960c4b.png");  
                break;

                case "MIN": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488436-5b8a4580-0e37-11ea-8a7b-5dfc1605d6bc.png");  
                break;

            
                case "NE": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488246-aa29e680-0e1b-11ea-8343-aa01bae24ae9.png"); 
                break;

                case "NO": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488416-0aba2300-0e1e-11ea-86c1-67e5b2c29861.png");  
                break;

                case "NYG": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488412-f83fe980-0e1d-11ea-958a-518eb6928c03.jpg");  
                break;

                case "NYJ": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488397-caf33b80-0e1d-11ea-9d47-4f7473e2cd1b.png");  
                break;

                case "OAK": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488390-ba42c580-0e1d-11ea-8d41-aa929e90c405.png");  
                break;

                case "PHI": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488383-aac37c80-0e1d-11ea-8418-6a205038f65a.png");  
                break;

                case "PIT": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488374-98494300-0e1d-11ea-841a-0b151b8a6ecb.png");  
                break;
              
                case "SD": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488447-6e047f00-0e37-11ea-9f4f-e21574d9372a.png");  
                break;

                case "SEA": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488361-764fc080-0e1d-11ea-9873-671ac18cb59e.png");  
                break;

                case "SF": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488370-85367300-0e1d-11ea-9650-ae0560040bf4.png");  
                break;

                case "STL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488374-98494300-0e1d-11ea-841a-0b151b8a6ecb.png");  
                break;

                case "TB": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488359-659f4a80-0e1d-11ea-9c33-c4e63d68a895.png");  
                break;

                case "TEN": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488350-3983c980-0e1d-11ea-9ccd-78d326b697ab.png");  
                break;

                case "WAS": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488344-1ce79180-0e1d-11ea-8778-141e598ec96e.png");  
                break;
                
               
              }
            this.set("line", moneyLine);
            this.set("team", team);
            this.set("clicked", true);

        },
        placeBet(wager) {

            let today = new Date().toString().slice(0,21)
            let payout =0;
           
            this.store.query('users', {
                filter: {
                uid: this.session.data.authenticated.user.uid
                }
            }).then(function(user) {
                let update = user.firstObject;
                if(update.fund > wager)
                {
                    if(wager != undefined && wager > 0 )
                    {
                        if(this.line > 0)
                        {
                            payout = +wager + +((wager * (Math.abs(this.line) /100)).toFixed(2));
                           
        
                        }
                        else 
                        {
                            payout =+wager + +((wager / (Math.abs(this.line) /100)).toFixed(2));
                           
                        }
                     
                        const newBet = this.store.createRecord('bet',{
                        
                            team: this.team,
                            odds: this.line,
                            uid: this.session.data.authenticated.user.uid,
                            sport: 'NFL',
                            datePlaced: today,
                            wager: wager,
                            payout: payout
                    
                        });
        
                        newBet.save();
        
                        update.set("fund" ,  +update.fund - +wager);
                        update.set("newUser" , false);
                        update.save();
                    }
                }
                else {
                    alert("INSUFFICIENT FUNDS TO PLACE BET, PLEASE DEPOSIT MONEY");
                }
                
                
            });
         
                
            
                this.set("clicked", false);
                this.set('wager', '');
                this.set('symbol', '');
            
           
        },
        cancelBet: function() {
            this.set("clicked", false);
            this.set("line", 0);
            this.set("team", " ");
            this.set('symbol', '');
        }
        
        
    
    }
});
