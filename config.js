const fs = require("fs");
const chalk = require("chalk");


//
global.available = true;
global.autoReadAll = false;
global.antitags = true;


//auto functioner
global.autoTyping = false;                //auto tying by default off.
global.autoRecord = false;                //auto recording by default off.
global.groupevent = false;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //This is the new variable for controlling status seen.
global.autoreadgc = true;


//
global.prefa = ["X"];                                    //Default prefix here. you can change if you want.


//
global.Owner = ["0016614995687","0016614995687"];         //If you want singal number so global.Owner = ['0016614995687'] Change into your number.
global.OwnerNumber = ["0016614995687","0016614995687"];   //If you want singal number so global.Owner = ['0016614995687'] Change into your number.
global.ownertag = ["0016614995687"];
global.OwnerName = "Yousef";
global.BotName = "Hunter X Bot";
global.packname = "A17 Bot";                             //Do not change.
global.author = "By: Yousef";                               //Do not change.
global.BotSourceCode = ""; //Do not change.



//
global.sessionName = "session";                          //Do not change.


//
global.openAiAPI = "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";


//
global.location = "Aden,Yemen";
global.reactmoji = "❤️";
global.themeemoji = "💖";
global.vidmenu = { url: 'https://media.tenor.com/Jdu0Ov8X2sIAAAAC/A17-Bot.mp4' };
global.websitex = "https://weather.com/weather/today/l/12.79,45.02";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/main.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
  jobdone: 'Here you go...',
  useradmin: 'Sorry only *Group Admins* can use this command **!',
  botadmin: 'Sorry I cant execute this command without being an *Admin* of this group.',
  botowner: 'Only my *Owner* can use this command !',
  grouponly: 'This command is only made for *Groups*!',
  privateonly: 'This command is only made for *Private Chat* !',
  botonly: 'Only the *Bot itself* can use this command!',
  waiting: 'Just Wait...',
  nolink: 'Please provide me *link*!',
  error: 'An error occurd!',
  banned: 'You are *Banned* fron using commands!',
  bangc: 'This Group is *Banned* from using Commands!',
  nonsfw: 'Dont be a pervert ! This is not a NSFW enabled group!'

}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
