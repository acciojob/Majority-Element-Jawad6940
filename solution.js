// arr = array of numbers
function major(arr)
{
   let cnt=0;
  let val=0;
  arr.forEach(i=>{
       // console.log(val);
      if(cnt==0){
          val=i;
      }
      if(val===i){
          cnt++;
      }
      else{
          cnt--;
      }
  })
 return val; 
  //your code here
}
module.exports=major;
