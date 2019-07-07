var getRow = function(rowIndex) {
  var str = []
  var row = 0
  while(row < rowIndex){
      for(var i = 0; i < row; i++){
          if(i == 0 || i == rowIndex - 1){
              str[i] = 1
          }else{
              str[i] = str[i - 1] + str[i]
          }
      }
      row++
  }
  return str
};

