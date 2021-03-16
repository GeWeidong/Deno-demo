export default (search: any) => {
  const oGetVars: any = {};
  if (search.length > 1) {
    for (
      var aItKey,
        nKeyId = 0,
        aCouples = search.substr(1).split("&");
      nKeyId < aCouples.length;
      nKeyId++
    ) {
      aItKey = aCouples[nKeyId].split("=");
      oGetVars[decodeURIComponent(aItKey[0])] = aItKey.length > 1
        ? decodeURIComponent(aItKey[1])
        : "";
    }
  }
  return oGetVars;
};
