export function strMatchCheck(str1, str2) {
    let strMap = {};
    let nullCheck = str1.length === 0 || str2.length === 0 || str1.length !== str2.length;
    if(nullCheck) {
      return false;
    }
    for(let i = 0; i < str1.length; i++) {
      strMap[str1[i]] = false;
    }
    for(let i = 0; i < str2.length; i++) {
      if(str2[i] in strMap) {
        strMap[str2[i]] = true;
      }
    }
    if(Object.values(strMap).filter(ele => ele === false).length > 0) {
      return false;
    } else {
      return true;
    }
  }