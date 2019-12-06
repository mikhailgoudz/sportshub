import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

    session: service(),
    line: ' ',
    symbol: ' ',
    team: ' ',
    picUrl: '',
    clicked: false,

    actions:{

        moneyline(moneyLine,team){   
            
            if(moneyLine> 0){
                this.set("symbol", '+');
            }
            
            switch(team){

                case "ANA": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587770-6a8a0880-0f9b-11ea-8d92-89cc11e81391.png");  
                break;
                
                case "ARI": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587774-6e1d8f80-0f9b-11ea-8fd7-5f915037ffcc.png");  
                break;

                case "BOS": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587776-74ac0700-0f9b-11ea-899b-d78dc6e00405.png");  
                break;

                case "BUF": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587778-7675ca80-0f9b-11ea-92b2-07d5822edf86.png");  
                break;

                case "CAR": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587797-88576d80-0f9b-11ea-9d57-a4b7cc8ea4a9.png");  
                break;

                case "CGY": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587790-81c8f600-0f9b-11ea-8c38-87d771a08f96.png");  
                break;

                case "CHI": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587802-8beaf480-0f9b-11ea-8ad4-85e12416d315.png");  
                break;

                case "COL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587806-8db4b800-0f9b-11ea-90b1-a1159b6e1a2d.png");  
                break;

                
                case "CBJ": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587807-90171200-0f9b-11ea-9bb9-7a1caaf2316a.png");  
                break;

                
                case "DAL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587809-92796c00-0f9b-11ea-98a6-d7d28ab86125.png");  
                break;


                case "DET": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587825-9dcc9780-0f9b-11ea-92a2-0dadaaacff6d.png");  
                break;

                
                case "EDM": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587828-9f965b00-0f9b-11ea-861d-86ea3e5e35be.png");  
                break;

                
                
                case "FLA": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587833-a3c27880-0f9b-11ea-9f96-599692d01933.png");  
                break;


                case "LA": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587837-a6bd6900-0f9b-11ea-95a3-73d297c83d2b.png");  
                break;

                
                case "MIN": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587842-a9b85980-0f9b-11ea-81fb-d4ff16e792b0.png");  
                break;


                case "MTL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587844-ac1ab380-0f9b-11ea-8aa0-879d19a99eb5.png");  
                break;

                case "MON": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587844-ac1ab380-0f9b-11ea-8aa0-879d19a99eb5.png");  
                break;

                case "NAS": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587848-ade47700-0f9b-11ea-94b4-91b527f701d0.png");  
                break;
                //stopped here

                case "NJD": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587849-afae3a80-0f9b-11ea-9c4b-39e45edb395f.png");  
                break;

                case "NJ": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587849-afae3a80-0f9b-11ea-9c4b-39e45edb395f.png");  
                break;

                case "NYI": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587855-b2109480-0f9b-11ea-95e7-55f82c5aaf97.png");  
                break;

                case "NYR": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587862-b76ddf00-0f9b-11ea-9bc3-0819708fd7e4.png");  
                break;


                case "OTT": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587881-c05eb080-0f9b-11ea-8b4d-843251472f3e.png");  
                break;

                case "PHI": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587887-c2c10a80-0f9b-11ea-8bc9-c484208744b0.png");  
                break;

                case "PIT": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587888-c48ace00-0f9b-11ea-9cfb-68194336414f.png");  
                break;

                case "SJ": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587890-c6ed2800-0f9b-11ea-9bc9-07383637861a.png");  
                break;

                case "STL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587894-c8b6eb80-0f9b-11ea-942c-f48e411b2636.png");  
                break;


                case "TB": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587897-ca80af00-0f9b-11ea-92e3-7799abb78d6f.png");  
                break;

                case "TOR": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587900-cc4a7280-0f9b-11ea-94bf-5ce2d3b30cc6.png");  
                break;


                case "VAN": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587972-0ca9f080-0f9c-11ea-8e55-7a1aa854564e.png");  
                break;

                case "VEG": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587977-103d7780-0f9c-11ea-9376-cbbb42581f17.png");  
                break;

                case "WPG": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587986-159ac200-0f9c-11ea-90d6-0752cc3927ce.png");  
                break;

                case "WSH": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587982-13386800-0f9c-11ea-81f3-d438634d6d7e.png");  
                break;

                case "WAS": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69587982-13386800-0f9c-11ea-81f3-d438634d6d7e.png");  
                break;


            }


            this.set("line", moneyLine);
            this.set("team", team)
            this.set("clicked", true);

        },
       async placeBet(wager) {
            
            let today = new Date().toString().slice(0,21)
            let payout =0;

            let user =  await this.store.query('users', {
                filter: {
                uid: this.session.data.authenticated.user.uid
                }
            }).then(user => {

                 return user.firstObject;

            })


            if(user.fund >= wager ){  //user has enough funds for the wager amount

                if(wager != undefined && wager > 0 ){ 
                    wager= (+wager + +0).toFixed(2);
                    if(this.line > 0)
                    {
                        payout = +wager + +((wager * (Math.abs(this.line) /100)));
                        payout = payout.toFixed(2);
                        
    
                    }
                    else 
                    {
                        payout =+wager + +((wager / (Math.abs(this.line) /100)).toFixed(2));
                        payout = payout.toFixed(2);
                        
                    }


                    const newBet = this.store.createRecord('bet',{
                        
                        team: this.team,
                        odds: this.line,
                        uid: this.session.data.authenticated.user.uid,
                        sport: 'NHL',
                        datePlaced: today,
                        wager: wager,
                        payout: payout
                
                    });

                    newBet.save();
        
                    user.set("fund" ,  (+user.fund - +wager).toFixed(2));
                    user.set("newUser" , false);
                    user.save();
    

                }


            }
            else{

                alert("INSUFFICIENT FUNDS TO PLACE BET, PLEASE DEPOSIT MONEY");
            }

              
            this.set("clicked", false);
            this.set('wager', '');
            this.set('symbol', '');
            this.set('picUrl', '');


            
    
        },
        cancelBet: function() {

            this.set("clicked", false);
            this.set("line", 0);
            this.set("team", " ");
            this.set('symbol','');
            this.set('picUrl', '');
        }

    }
});
