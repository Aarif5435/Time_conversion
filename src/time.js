
function Time_Conversion(time){

    let flag = 1;

    if(time<60000){
        flag = Math.floor(time/1000%60);
        return flag + " seconds"
    }
    if(time>=60000 && time<3600000){
        flag = time/1000/60;
        return flag + " minutes";
    }
    if(time>=3600000){
        flag = time/(1000*60*60)%24;
        return flag + " hours"
    }

    return flag;
}

module.exports = Time_Conversion;