
function getTopLetter(text) {
    var arr=[], max=0;

    for (var i=0; i<text.length; i++){
      arr[i]=0;
    }

    for (var i=0; i<text.length; i++){
      for (var j=0; j<text.length; j++){
        if (text[i]==text[j]){
          arr[i]+=1;
        }
      }
    }
    console.log(arr);
      for (var i=0; i<arr.length; i++){
        if (arr[i]>max){
          max=arr[i];
          index=i;
      }
    }
    return text[index];
      
}
text = "A B C D E F A B";
text = text.replace(/ /g, '');
document.write(getTopLetter(text));