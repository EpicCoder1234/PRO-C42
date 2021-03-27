class Contestant{
    constructor(){
        this.index = null;
        this.correct = 0;
        this.name = null;
    }
    getCount(){
        var contestantCountRef = database.ref("playerCount");
        contestantCountRef.on("value", function(data){
            contestantCount = data.val();
        });
    }
    
    updateCount(count){
        database.ref("/").update(
            {contestantCount:count}
        )
    }
    
    updateName(){
        var contestantIndex="players/player"+this.index;
        database.ref(playerIndex).set(
            {name:this.name,
            correct:this.correct}
        )
    }
    static getPlayerInfo(){
        var contestantInfoRef= database.ref("players")
        contestantInfoRef.on("value",function(data){
            contestantInfo = data.val();
        });
    }
}