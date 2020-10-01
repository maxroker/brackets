module.exports = function check(str, bracketsConfig) {
    let copyStr = str;
    let counter = str.length;

    while (counter > 0) {
        bracketsConfig.forEach((bracketPair) => {
            for (let i = 0; i < copyStr.length - 1; i++) {
                if (
                    copyStr[i] === bracketPair[0] &&
                    copyStr[i + 1] === bracketPair[1]
                ) {
                    copyStr =
                        copyStr.slice(0, i + 1) + copyStr.slice(i + 1 + 1);
                    copyStr = copyStr.slice(0, i) + copyStr.slice(i + 1);
                }
            }
        });
        counter--;
        if (copyStr.length === 0) return true;
    }

    return false;
};
