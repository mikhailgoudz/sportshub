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

                case "ATL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488553-c1c39800-0e38-11ea-9ce0-f58d1054c41f.png");  
                break;
                
                case "BKN": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488551-bcfee400-0e38-11ea-8263-0b927046b84e.png");  
                break;

                case "BOS": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488552-bf613e00-0e38-11ea-9052-0dfd8257923b.png");  
                break;

                case "CHA": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488549-ba03f380-0e38-11ea-87e4-06b385157d49.png");  
                break;

                case "CHI": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488548-b5d7d600-0e38-11ea-8291-9f0feb915852.png");  
                break;

                case "CLE": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488547-b40e1280-0e38-11ea-8ac4-39b8a5b294cf.png");  
                break;

                case "DAL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488546-b1abb880-0e38-11ea-8914-ff4413ef9b6c.png");  
                break;

                case "DEN": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488545-ad7f9b00-0e38-11ea-9d50-54bb063e17a2.png");  
                break;

                case "DET": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488544-a9ec1400-0e38-11ea-9779-66b1dd96efa3.png");  
                break;

                case "GSW": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488541-a6588d00-0e38-11ea-814c-fff16533ae57.png");  
                break;
                case "GS": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488541-a6588d00-0e38-11ea-814c-fff16533ae57.png");  
                break;

                case "HOU": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488540-a3f63300-0e38-11ea-93c7-7be69925c8bf.png");  
                break;

                case "IND": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488539-a062ac00-0e38-11ea-82f3-d8194c665fa3.png");  
                break;

                case "LAC": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488538-9ccf2500-0e38-11ea-9a3d-67edde9f2795.png");  
                break;

                case "LAL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488536-98a30780-0e38-11ea-9619-9dc3762e834f.png");  
                break;

                case "MEM": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488534-950f8080-0e38-11ea-8468-7bfef7e26e9f.png");  
                break;

                case "MIA": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488533-92149000-0e38-11ea-96ec-3506fd47464d.gif");  
                break;

                case "MIL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488528-4e615c80-0e1f-11ea-9a36-6af791d7a92c.png");  
                break;


                case "MIN": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488526-42759a80-0e1f-11ea-8c11-689445ca9d1d.png");  
                break;

                
                case "NO": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488524-37226f00-0e1f-11ea-8ecd-041a39340fb7.png");  
                break;

                case "NY": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488521-2bcf4380-0e1f-11ea-8f33-1436d9a8ec1a.png");  
                break;

                case "OKC": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488512-1528ec80-0e1f-11ea-8c06-c4ab5d2f0fa6.png");  
                break;

                case "ORL": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488508-06dad080-0e1f-11ea-8c76-aba1b85686b0.jpg");  
                break;

                case "PHI": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488500-d3984180-0e1e-11ea-80a0-98d4383150b8.png");  
                break;

                case "PHO": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488495-c5e2bc00-0e1e-11ea-9e52-d7e216a9449f.png");  
                break;

                case "POR": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488492-b6fc0980-0e1e-11ea-8422-89e6c024d75d.png");  
                break;  

                case "SAC": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488488-ac417480-0e1e-11ea-9e71-3037a26d4524.png");  
                break;

                case "SA": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488485-a055b280-0e1e-11ea-8f7b-eafdd7f6cc16.png");  
                break;

                case "SAS": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488485-a055b280-0e1e-11ea-8f7b-eafdd7f6cc16.png");  
                break;

                case "TOR": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488481-9338c380-0e1e-11ea-913e-34fb489a485d.png");  
                break;

                case "UTA": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488473-81efb700-0e1e-11ea-98b7-3a984e2b7842.png");  
                break;

                case "WAS": this.set("picUrl","https://user-images.githubusercontent.com/43256526/69488467-72706e00-0e1e-11ea-863d-a9fafa181463.png");  
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
                        console.log(payout);
    
                    }
                    else 
                    {
                        payout =+wager + +((wager / (Math.abs(this.line) /100)).toFixed(2));
                        payout = payout.toFixed(2);
                        console.log(payout);
                    }


                    const newBet = this.store.createRecord('bet',{
                        
                        team: this.team,
                        odds: this.line,
                        uid: this.session.data.authenticated.user.uid,
                        sport: 'NBA',
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
