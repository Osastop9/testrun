const age = 5;
const isOldEnough = age >= 18;
if(isOldEnough){
    console.log("You are old enough to vote");
}else{
  console.log(`You are not old enough to vote, please come back in ${18 - age} years`);
}
