let words = [
  `History Of ME`,
  `HI Guys`,
  `Im Good And YOU`,
  `Im Fine LOOL`,
  `So How Was Your Day`,
  `It Was Very Good`,
  `IM SO Mad Idk Why`,
  `I Should Go School`,
  `Do You Have Any Think To Say`,
  `No Thanks I Must GO BBye`
 
]

let ChOwO = [
  `owo daily`,
  `owo cf 10`,
  `owo s 10`,
  `owoh`,
  `owoh`,
  `owopray`
]
async function AutoFarm({Client , ChannelID, Time , OwO}) {
if(!Client) {
  throw new Error("Please Provide Client")
}
if(!ChannelID) {
  throw new Error("Please Provide ID Channel!!")
}
if(isNaN(ChannelID)) {
  throw new Error("Please Correct ID Channel!!")
}
if(!Time) {
  throw new Error("Please Provide Time And Must Be With Second")
}
if(isNaN(Time)) {
  throw new Error("Please Provide Correct Time")
}
if(!Number(Time)) {
  throw new Error("Time Must Be A Number")
}
if(Time < 15) {
  throw new Error("Must Time Be More Than 15 Seconds")
}
let ms = Number(Time) * 1000;



setInterval(async() => {
  try {
  let channel = await Client.channels.fetch(ChannelID)
  let text = words[Math.floor(Math.random()*words.length)]
  let text2 = ChOwO[Math.floor(Math.random()*ChOwO.length)]
  if(OwO === true){ 
    channel.send(text2)
  } else if(OwO === false) {
    channel.send(text)
  } else if(!OwO) {
    channel.send(text)
  }
} catch (error) {
  console.log(error)
}
}, ms);


setInterval(async() => {
  try{
if(!Client || Client.user ) {
  console.log("The Client Didn't Login Killing Procces")
  process.kill(1);
} else {

}
  } catch {

  }
}, 60000)


 }

 
 module.exports = AutoFarm