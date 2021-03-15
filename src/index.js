module.exports = function check(str, bracketsConfig) {
    let openCloseRatio = 0;

    for (let bracketsIndex = 0; bracketsIndex < bracketsConfig.length; bracketsIndex++){
        for (let i = 0; i < str.length; i++){
            if (str[i] === bracketsConfig[bracketsIndex][0]) {
                openCloseRatio++;
            } else if (str[i] === bracketsConfig[bracketsIndex][1]){
                openCloseRatio--;
                if (openCloseRatio < 0 ) {
                    return false;
                }
            }
        }
    }
    return openCloseRatio === 0;
}
