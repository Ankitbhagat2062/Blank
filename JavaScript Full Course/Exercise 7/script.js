// Exercise Create a JavaScript program capable of generating a password which contains atleast 1 lowercase, 1 Uppercase, and 1 special characters.Create a password class to achieve the same.
// Example:
// class Password:
//   this.password
//   generateStrongPassword()
//   generateWeakPassword()
//   generateSuperStrongPassword()
//   generateFunnyPassword()
let Pw = document.getElementById("password");
let copy = document.getElementById("copy");
let label = document.getElementsByClassName("form-label");
let time = localStorage.getItem("time");

class Password {
        constructor() {
                this.Password = ""
        }
        generateStrongPassword() {
                const StrongPasswords = [
                        "password",
                        "XXXX",
                        "qwerty",
                        "abc123",
                        "letmein",
                        "iloveyou",
                        "admin",
                        "welcome",
                        "monkey",
                        "sunshine",
                        "football",
                        "gamer",
                        "angel",
                        "login",
                        "123qwe",
                        "Hacker",
                        "qwerty123",
                        "password1",
                        "admin",
                        "user"
                ];
                let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?", "/"];

                let a = Math.floor(Math.random() * alphabet.length);
                let b = Math.floor(Math.random() * special.length);
                let c = Math.floor(Math.random() * 10);
                let d = Math.floor(Math.random() * StrongPasswords.length);
                let strongPassword = StrongPasswords[d] + alphabet[a].toUpperCase() + special[b] + c + Math.floor(Math.random() * 100);
                label.innerHTML = `Your Strong Password is : -`
                Pw.innerHTML = `${strongPassword}`
        }
        generateWeakPassword() {
                let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?", "/"];

                let a = Math.floor(Math.random() * alphabet.length);
                let b = Math.floor(Math.random() * special.length);
                let c = Math.floor(Math.random() * 10);
                let WeakPassword = alphabet[a].toUpperCase() + alphabet[a] + alphabet[a] + special[b] + c + Math.floor(Math.random() * 100)
                label.innerHTML = (`Your Weak Password is : -`)
                Pw.innerHTML = `${WeakPassword}`
        }
        generateSuperStrongPassword() {
                let superPasswords = [
                        "3X@mpl3$Tr0ng!",
                        "#B3tter$Af3&",
                        "R@nd0m1zEd!",
                        "S3cuR3%Code",
                        "2K!ngD0m$?",
                        "F@iryTaL3!",
                        "$H4rdT0Guess1",
                        "!NoBr3ak3r@",
                        "G1mM3P@$$",
                        "Y0uCan’tG3t!",
                        "%P0wer0f@3",
                        "#Tru$t!@22",
                        "$Tr0ngR@ck!",
                        "$Ecur1tyP@$$",
                        "T3chL0ve!$",
                        "@0lT1m@t3!",
                        "#Gr8C0de!",
                        "Tr!cky1234@",
                        "$AfeGuard@99",
                        "Pr!m3Time@11",
                        "M!ghtyP@$$",
                        "H@ppyC0d3r!",
                        "#UlT!m8!G",
                        "Qu3$tionM3@!",
                        "C@stl3Rul3s1",
                        "D!fficu1t2Br3ak!",
                        "V!br@nt$K3y",
                        "#SecR3t$33",
                        "$W0rdG3n3!",
                        "%S@f3Rul3$",
                        "UnBr3@k@bL3!",
                        "$10X#Strong!",
                        "T@k3M3$1",
                        "!G3n!usCode%",
                        "$p@rkL3$$22",
                        "R0b0t%Rul3$",
                        "M@gic@1K3y",
                        "$Cr1ptP@ss!",
                        "W1nG@t3$77",
                        "0mniP@ss%",
                        "P@$$Rul3z!",
                        "#Tru$t@Sc!",
                        "2X@mplify!$",
                        "N0t1ceM3@!",
                        "W!seS3cur1ty",
                        "$4f3H@v3n",
                        "%Br!ll!ant@!",
                        "Z3nM@ster1",
                        "$ucc3$$P@d",
                        "Tr3m0r$10",
                        "P!ngu1n@123",
                        "Gr@v1ty$99",
                        "#S0l1dP@ss!",
                        "T3rm!n@l$$",
                        "G@lacticP@ss!",
                        "$H3ll0World!",
                        "C@lm&Secure!",
                        "@B0nusC0de$",
                        "S!mpl3P@$$",
                        "D0ubl3@Ch3ck$",
                        "%Encrypt3dK3y",
                        "Unsh@keabl3!",
                        "B@ck0fPl@net!",
                        "Tr@v3lC0d3$",
                        "S3cur3Code$",
                        "Br1ght$Day@",
                        "#Pr0tectM3!",
                        "W0rld!$Safe",
                        "$Rul3Th3K3y@",
                        "L0ckM3In$$",
                        "Y@Rul3zIt!",
                        "$T3chn0@d!",
                        "L1m1tl3$$$",
                        "D3f3nder@11",
                        "Invis!bleP@$$",
                        "H@ppyH!P@ss",
                        "$L0ckedP0t3nt",
                        "F!nal3Rul3z!",
                        "#TrustM3%99",
                        "#M3t4S3cur3!",
                        "H@lcy0nD@y$",
                        "Cryst@l@99",
                        "%Hack3rD0wn!",
                        "$Lun@Safe@",
                        "Z0neSecR!t3$",
                        "L@titud3$",
                        "R3@ch$10!",
                        "T3mpt@tions!",
                        "Ult!mateK3y!",
                        "Starl!ght@",
                        "#Zenith$K3y",
                        "P0w3rCode@%",
                        "T3rrific!$",
                        "UnH@tched$K3y",
                        "V3lvetK!tty$",
                        "H3rcule$11@",
                        "B0mbPr00f%",
                        "T!tanP@$$",
                        "$Chron0Guard!",
                        "Br33zyD@y$"
                ];
                let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?", "/"];

                let a = Math.floor(Math.random() * alphabet.length);
                let b = Math.floor(Math.random() * special.length);
                let c = Math.floor(Math.random() * 10);
                let d = Math.floor(Math.random() * superPasswords.length);
                let superPassword = superPasswords[d] + alphabet[a].toUpperCase() + alphabet[a] + special[b] + c + Math.floor(Math.random() * 100)
                label.innerHTML = (`Your Super Strong Password is :-`)
                Pw.innerHTML = `${superPassword}`
        }
        generateFunnyPassword() {
                let funnyPasswords = ["password", "Do you want to generate funny password?", "Want to know the funny password?", "You have generated strongest password", "You have generated super strongest password", "password is password", "I don't know password", "password is incorrect", "try again", "generate", "password", "funny", "strong", "super strong", "super strongest", "strongest", "call 911" + "stop generating pw", "try again", "please try again", "please try again after 1 minute", "please try again after 30 seconds", "please try again after 5 minute", "please try again after 10 minute", "please try again after 30 minute", "please try again after 1 hour", "Password123", "WrongPassword", "LetMeInPlz", "GuessMe123", "12345Hahaha", "ILoveCats123", "Pa$$w0rdLOL", "WhySoSerious?", "NotAPassword", "OpenSesame123", "KnockKnock1", "OopsIDidItAgain", "CantGuessThis1", "QwertyLOL", "ABC123Whee", "CheeseCake1", "BananaSplit22", "IAmBatman!", "SecretSauce123", "UnicornsRReal", "PineapplePizza?", "DontEvenTry", "404PasswordNotFound", "NopeNotThis", "JustGuessIt", "LOLnope123", "WrongAgain1", "GuessAgain1", "S3cr3tP@ss", "MonkeyBanana!", "IHaveNoIdea", "LetMeInn0w", "YouShallNotPass", "Waffles4Life", "TacoTuesday!", "Nachos123", "P4ssw0rdRocks", "InvisiblePass", "IAmTheBest!", "CantTouchThis", "TryAndFail", "GoodLuck123", "ILovePizza1", "HotdogTime", "NachoPass!", "ChocoLover!", "BurgerBinge", "OopsIDidThis", "123ILoveYou", "WhatsThis123", "YouCantHackMe", "DontHackMePlz", "Superman123", "WonderWoman1", "SpidermanLOL", "CaptainObvious1", "NotToday123", "TryHarder123", "YupItsMe1", "OopsWrongOne", "GuessWho?123", "JokerSmiles1", "NotYourBday!", "N0tTh1s1", "ILikeCoffee1", "TeaLover123", "ChocoFan123", "PickleRick!", "PotatoLover1", "LettucePray1", "CantHackThis!", "ButterFly99", "NoPassHere!", "WrongWay123", "WhoAmI?123", "NotMyName123", "WrongGuess123", "FryDay123", "Nuggets4Life", "PizzaOrNachos", "TooLate123", "OopsNotAgain", "LOLGotcha123", "GuessLess!123", "PleaseNoHack", "P@ssword4Fun", "LifeIsFun123", "IceCreamYum", "ChocolateRain", "Potato123LOL", "NotOnMyWatch", "NoWayJose123", "KnockKnock22", "BeKind123", "WhoAreYou1", "NoMore123", "PenguinLover", "GuessIfYouCan", "EpicFail123", "PlzNoHack123"
                ];
                let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?", "/"];

                let a = Math.floor(Math.random() * alphabet.length);
                let b = Math.floor(Math.random() * special.length);
                let c = Math.floor(Math.random() * funnyPasswords.length);
                let funnyPassword = funnyPasswords[c] + alphabet[a].toUpperCase() + alphabet[a] + special[b] + c + Math.floor(Math.random() * 100)
                label.innerHTML = (`Your funny Password is : }`)
                Pw.innerHTML = `${funnyPassword}`
        }

}
let a = new Password()
console.time("Start")
let Text = ["Loading funny passwords",
        "Generating",
        "Adding funny expression",
        "Creating Password",
        "Adding special characters",
        "Adding numbers",
        "Adding uppercase",
        "Completed Finally",
        "You have generated your password successfully "];
async function random() {
        e.preventDefault();
        let a = document.getElementById("text");
        for (let i = 0; i < Text.length; i++) {
                setTimeout(() => {
                        a.innerHTML = Text[i];
                        let timeout = 62.5

                        for (let index = 0; index < (i + 1) * 3; index++) {
                                let t = setTimeout(() => {
                                        if (a.innerHTML.endsWith("...")) {
                                                a.innerHTML = a.innerHTML.slice(0, a.innerHTML.length - 3)
                                        }
                                        if (a.innerHTML == Text[Text.length - 1]) {
                                                a.innerHTML = a.innerHTML.slice(0, a.innerHTML.length)
                                        }
                                        else {
                                                a.innerHTML = a.innerHTML + "."
                                        }
                                }, timeout);
                                timeout += 125;
                        }
                        if (i == Text.length - 1) {
                                let t = ((i + 1) * 2000);
                                localStorage.setItem("time", t);
                        }
                }, (i + 1) * 2000);
        }
}
main = async () => {
        await random();
}

let form = document.forms['my-form'];
let menu = form.passwords;
let options = form.passwords.options;
menu.required = true;
form.onsubmit = function (e) {
        e.preventDefault();
        let optionValue = this.passwords.value
        if (optionValue == "strong") {
                main();
                setTimeout(() => {
                        a.generateStrongPassword()
                }, time);
        }
        else if (optionValue == "weak") {
                main();
                setTimeout(() => {
                        a.generateWeakPassword()
                }, time);
        }
        else if (optionValue == "super") {
                setTimeout(() => {
                        a.generateSuperStrongPassword()
                }, time);
                main();
        }
        else if (optionValue == "funny") {
                main();
                setTimeout(() => {
                        a.generateFunnyPassword()
                }, time);
        }
}

// console.timeEnd("End")
