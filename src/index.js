module.exports = function check(str, bracketsConfig) {
    let arr = bracketsConfig.map(function (item) {
        return item[0] + item[1];
    });

    // Переделано без рекрсии

    while (str.length > 0) {
        let newStr = str;
        arr.forEach((element) => {
            newStr = newStr.replace(element, "");
        });
        if (newStr === str) {
            return false;
        }
        str = newStr;
    }
    return true;

    // Все проверки вручную проходят, но команда npm test ругается и говорит что есть ошибки.
    // Причина пока не ясна

    // function remove() {
    //     let newStr = str;
    //     arr.forEach((element) => {
    //       newStr = newStr.replace(element, "");
    //       // console.log(newStr);
    //     });

    //     if (newStr === str) {
    //       console.log("false");
    //       return false;
    //     } else if (newStr.length > 0) {
    //       str = newStr;
    //       remove();
    //     } else {
    //       console.log("true");
    //       return true;
    //     }
    //   }
    //   remove();
};
