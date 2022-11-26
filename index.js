function superbowlWin(record) {
    let race = record.find((race)=>{
        if (race.result==='W'){
            return true;
        }
    })
        if (race){
            return race.year
        }
}
