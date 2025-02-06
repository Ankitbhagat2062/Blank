// Element.innerHTML is used to populate a div with Html. Search online about this method  and create a website with a div tagcombining a random joke given an array to jokes. Use Math.random and fetch jokes from internet (use any website to create the array). Your Website should a random joke on every reload Min length of your jokes array should be 10  

Jokes = [Jokes=`I told my girlfriend she drew her eyebrows too high. She seemed surprised.`,
    Jokes=`How do you make a tissue dance? Put a little boogie in it.`,
    Jokes=`Why did the scarecrow win an award? Because he was outstanding in his field.`,
    Jokes=`President Lincoln was approached by a woman after a political speech… If you were my husband I would poison your tea. Lincoln replied...if you are my wife I’ll gladly drink it.`,
    Jokes=`My grandfather has the heart of a lion and a lifetime ban at the zoo.`,
    Jokes=`Have you heard the joke about yoga. Nevermind its a bit of a stretch.`,
    Jokes=`Why should you never play poker at the zoo? Too many cheetahs`,
    Jokes=`What do you call a nose with no body? No body nose`,
    Jokes=`1 LaughsWhy does snoop Dogg use an umbrella? Fo-Drizzle.`,
    Jokes=`Never confide in a vacuum cleaner. They’re always collecting dirt`,
    Jokes=`A roman walks into a cafe holds up 2 fingers and gets 5 coffees.`,
    Jokes=`Q: What time is it when the clock strikes 13? A: Time to get a new clock.`,
    Jokes=`Why did the tomato turn red? Because it saw the salad dressing!`,
    Jokes=`What do you call a guy who’s really loud? Mike.`,
    Jokes=`3 unwritten rules of life . 1) 2) 3)`,
    Jokes=`.Q:what does a cloud wear under his raincoat ? A:Thunderwear.`,
    Jokes=`Yo momma so dumb, she tried to surf the microwave`,
    Jokes=`Me: Would you like to be the sun in my life? Her: Awww... Yes!!! Me: Good then stay 92.96 million miles away from me`,
    Jokes=`Teacher: How much is a gram? Tyronne: Uhmm, depends on what you need`,
    Jokes=`Why are frogs always so happy? They eat whatever bugs them`,
    Jokes=`Some guy called me a tool. So I got hammered and nailed his girlfriend. Guess he was right.`,
    Jokes=`I went down the street to a 24-hour grocery store. When I got there, the guy was locking the front door. I said, "Hey! The sign says you're open 24 hours." He Said, "Yes, but not in a row!"`,
    Jokes=`Yo momma is so ugly she made my happy meal cry`,
    Jokes=`I couldn't figure out why the baseball kept getting larger. Then it hit me.`,
    Jokes=`Boy: The principal is so dumb! Girl: Do you know who I am? Boy: No... Girl: I am the principal's daughter! Boy: Do you know who I am? Girl: No... Boy: Good! *Walks away*`,
    Jokes=`A blonde drops off her dress to the dry cleaners The lady says, "Come Again!" The blonde says, "No, it's toothpaste this time."`,
    Jokes=`Beer Bottle: You break me, you get one year of bad luck! Mirror: You kiddin' me? You break me, then y'all get seven years of bad luck! Condom: Hahaha... (Condom walks off laughing)`,
    Jokes=`Yo momma so fat, she doesn't need internet, she's already worldwide.`,
    Jokes=`Q: Why can you never trust an atom? A: Because they make up everything.`,
    Jokes=`Two women are walking home from the bar, they both have to piss so they slip into a nearby cemetery. One uses her panties to wipe herself, and the other uses a reef off a head stone. Next night, the husbands meet at the bar, one looks at the other and says, "I'm gonna have to watch my wife, she came home with no panties last night." The other one says, "Oh well, mine came home with a card wedged in her ass saying, 'You were loved and will be missed by the whole entire fire department.'"`,
    Jokes=`I was sitting in a bar one day and two really large women came in, talking in an interesting accent. So I said, "Cool accent, are you two ladies from Ireland?" One of them snarled at me, "It's Wales, Dumbo!" So I corrected myself, "My apologies, so are you two whales from Ireland?"`,
    Jokes=`A man asks a farmer near the field, "Sorry sir, would you mind if I crossed your field instead of going around it? You see, I have to catch the 4:30 PM train." The farmer says, "Sure, go right ahead. And if my bull sees you, you'll even catch the 4 PM one."`
  ]
  title = [title= "TheLaughFactory",title= "Anonymous",title= "Dr. Quack Quack",title= "Anonymous",title= "Awais Raza",title= "juzaboy",title= "Tyronne",title= "London Properties",title= "funnydude",title= "Declanm",title= "ABCD",title= "TheLaughFactory",title= "yo daddy",title= "Yo Mama",title= "That Random Guy",title= "JerryH12",title= "Vivo Tey",title= "rudikelly",title= "TheLaughFactory",title= "TheLaughFactory",title= "TheLaughFactory",title= "TheLaughFactory",title= "TheLaughFactory",title= "TheLaughFactory",title= "Joker",title= "anonymous",title= "anonymous",title= "Anonymous",title= "Anonymous",title= "Anonymous",title= "Anonymous",title= "anonymous",]
 
  const element = Jokes[Math.floor(Math.random()*32)];
  movieCards = document.getElementById("joke_107027")
  Laughs = document.getElementById("thumbs_1_107027")
  index = [Math.floor(Math.random()*32)]
  
  Laughs.innerHTML = [Math.floor(Math.random()*1000)] +" Laughs";
  movieCards.innerHTML = Jokes[index];

  Title = document.getElementById("title")
  info = document.getElementsByClassName("info")
  

  Title.innerHTML =  title[index];
  small = info[0].firstElementChild.nextElementSibling
  small.innerHTML= `@${title[index]}`
  console.log(title[index])

