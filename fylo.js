let sumSizeFile=0;
let username = document.getElementById('username');
let allMega=parseFloat (5000000).toFixed(1);
let sumLeft=0;
username.addEventListener("change",function(){
    let filesize=username.files[0].size;
    if(filesize/1000000>1.5)
    {
      console.log(sumSizeFile);
      alert("the file is to big");
      return false;
    }
    username.files[0].type.toLowerCase();
    if(username.files[0].type.includes("png")||username.files[0].type.includes("jpg")||username.files[0].type.includes("jpeg"))
    {
        if(sumSizeFile<5000000)
          {
            console.log(username.files[0].type);
            sumSizeFile+=filesize;
            if(sumSizeFile+username.size<5000000)
            {
              console.log(sumSizeFile);
              document.getElementById('numofByte').innerHTML = sumSizeFile <1000000? parseFloat(sumSizeFile/1000).toFixed(1)+'KB': parseFloat(sumSizeFile/1000000).toFixed(1)+'MB';
              console.log(allMega);
              document.getElementById('mb-left-number').innerHTML =parseFloat((10000000 - sumSizeFile) / 1000000).toFixed(1);
              document.getElementById("progress-bar__used").style.width = `${(sumSizeFile/5000000)*100}%`;
              return true;
            }
            else{
              sumSizeFile-=filesize;
              alert("you'v croset the limet");
            }
          }
    }
  else{
      alert("wrong file");
      console.log(username.files[0].type);
      return false;
  }
  })