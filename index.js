let words = [

  `When you reach the end of your rope, tie a knot in it and hang on`,
  `Don't judge each day by the harvest you reap but by the seeds that you plant.`,
  `The future belongs to those who believe in the beauty of their dreams.`,
  `It is during our darkest moments that we must focus to see the light.`,
  `Spread love everywhere you go. Let no one ever come to you without leaving happier.`,
  `When you reach the end of your rope, tie a knot in it and hang on.`,
  `Always remember that you are absolutely unique. Just like everyone else.`,
  `Don't judge each day by the harvest you reap but by the seeds that you plant.`,
  `The future belongs to those who believe in the beauty of their dreams.`,
  `Tell me and I forget. Teach me and I remember. Involve me and I learn.`,
  `The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.`,
  `It is during our darkest moments that we must focus to see the light.`,
  `Whoever is happy will make others happy too`,
  `Do not go where the path may lead, go instead where there is no path and leave a trail.`,
  `Famous Quotes About Life
  You will face many defeats in life, but never let yourself be defeated.`,
  `Do not go where the path may lead, go instead where there is no path and leave a trail.`,
  `Never let the fear of striking out keep you from playing the game.`,
  `Life is never fair, and perhaps it is a good thing for most of us that it is not.`,
  `The only impossible journey is the one you never begin.`,
  `In this life we cannot do great things. We can only do small things with great love.`,
  `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
  `Life is made of ever so many partings welded together.`,
  `The secret of success is to do the common thing uncommonly well.`,
  `I never dreamed about success, I worked for it.`,
  `An unexamined life is not worth living.`
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
}, ms)





setInterval(async() => {
try{
if(!Client || !Client.user ) {
  console.log("The Client Didn't Login Killing Procces")
  await process.kill(1)
} else {

}
  } catch {

  }
}, 90000)


 }

 
 module.exports = AutoFarm