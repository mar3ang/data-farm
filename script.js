const SOILS=[["sandy","sandy"],["clay-rich","clay"],["loamy","loamy"],["fertile","fertile"],["rocky","rocky"],["loose","loose"]];
const TIPS=[
[["corn",0],
["Corn thrives in many different soil types: it needs 1 - 5 fertilizer a day to thrive.",0],
["Mature corn is naturally drought-resistant. Be careful not to overwater it, and to keep either fertilizing over days of the growing period or soil type across growing periods the same.",1],
["Corn does well in many climes, as long as it gets a moderate amount of fertilizer each day.",1]
],[["potato",0],
["To prevent plant diseases like potato blight, never water potatoes too heavily. Furthrmore, be sure to never fertilize them beyond a moderate-light degree.",1],
["Potatoes were first domesticated in nutrient-poor soils. If your degree of fertilization should exceed an established threshold or routine with the plant over the growing period, water at a moderate intensity that day to counteract the impact.",0]
],[["wheat",0],
["Wheat does best in sandy or loose soils. If not planted in sandy or loose soils, wheat requires just a small amount of fertilizer during the first day.",0],
["The watering level should be above an established level from the second day on, if you ever didn’t water your plants for a day.",1],
["Watering should be moderate-to-heavy during the second/third day of the growing period if soil conditions are such that you don’t need to fertilize it most days.",1]
],[["tomato",0],
["Studies regarding growing tomatoes show that watering should change in intensity between the first and third days, and that watering should always be below a heavy-moderate intensity.",1],
["Depending on weather, you should either water your tomatoes moderately for the last two days or water them heavily on the third day before not watering them on the fourth day.",0],
["Should fertilizing ever reach a heavy-moderate intensity, watering must be equal for the last two days of the growing period.",1]
],[["rice",0],
["If the soil in which you grow rice is sandy, you should make sure to apply fertilizer after the first day.",0],
["When growing rice, make sure that either your soil is pristine or that watering is of heavy intensity the second day of the growing period.",1]
],[["apple",0],
["When growing apples in non-clayrich soils, make sure to not overload apple rootstocks with watering or fertilizing beyond moderate intensity.",1],
["Apple trees are best suited to routine, highly rigidized watering and fertilizing schedules. Be sure to either fertilize or water your apple tree at a light intensity over the first two days.",1],
["With moderate watering across the growing period, apple trees will require only light fertilizing over the growing period.",1]
]
];
const LIB=[
["corn","Corn, or Zea maiz, has a long and storied history. First domesticated by Indigenous Zapotec and Mixtec peoples in southeastern Mexico about 9000 BCE, it requires heavy maintenance. Some amount of fertilizer is absolutely necessary to help the plant thrive."],
["potato","The modern potato originates from ancient Peru, likely a hybrid between some variety of both a wild potato of the Etuberosum subgroup and tomato plant. The crop was intentionally domesticated to be nutritionally efficient given nutrient-poor soils, such that it wouldn’t take much maintenance when placed in more fertile soils. It naturally follows that they need no fertilizer for most of the growing period, but do then require a small, non-zero amount of fertilizer in one-fourth of the period."],
["wheat","Wheat was first domesticated in the northern regions of the Fertile Crescent, between the Caucasus and modern-day Georgia in the east and eastern Turkey to the west. It can’t be understated how important wheat was to early Neolithic societies - for wattle and daub construction and wicker-making in addition to culinary uses. Procedures for cultivating this crop indicate early agricultural sophistication - especially written schedules where wheat would not be fertilized for three-fourths of the growing period but watered an equal portion each of those days."],
["tomato","We know from ethnobotanical research that the modern tomato has up to 16 wild relatives, all from the Solanum genus (known for nightshade, tobacco, and potatoes), all originating from the same approximate area in northern Peru. Current theories for the origin of the modern tomato posit that varieties of Solanum pimpinellifolium were continually crossbred to produce the modern tomato that we know today. Essential to the crop’s health, as determined by research, was fertilizing only on the first and third days of the growing period, which produces layers of nutrients in the soil the plant can easily access."],
["rice","Rice is a unique crop in how it convergently evolved two distinct varieties, in Asia and Africa, over two distinct periods in history. These two distinct species of rice, Oryza glaberrima and Oryza sativa, are quite similar, despite the differences in their geographical spreads. It’s safe to say that the conditions for growing both these cultivars are quite similar as well, with heavy, consistent watering and only a small amount of fertilizer used over the entire growing period."],
["apple","Apples were domesticated in a highly localized region of Eurasia: specifically, on the damp banks of the Ili river valley in Southern Kazakhstan, where the closest living relative of the domesticated apple, Malus sieversii, is mainly concentrated. Morphological and historical analysis of domesticated specimens native to the region has shown that the highly consistent rain and organic matter decomposition patterns over growing seasons in the region were key to the early domesticated variant’s survival, as long as rains delivered more than light-moderate amounts of water."]
]
const FARMER=[
["corn","Corn’s a very high-maintenance plant. I recall one summer I had a heat wave, breakin’ 90 daily, and the sprinklers malfunctioned on m’ crops. It was meant to be set to the intensity third from the bottom, whichever one that one is again. It was only one day, but enough stress to my corn to cut my yields in half. The soil I had them in dried out, and I had to retill it."],
["potato","Y’know, my great-great-grandfather first came to America fleeing the Great Famine. That’s how he met my great-great-grandmother in New York. They built this farm together; It’s been in my family for generations. I’m still fond of his story, kept down, of the moment when he realized she was the one after his potato plants he had brought from home survived the blight after a few days of rain consistently bearing down on his small garden, not too heavy, but not none at all. He took it as a sign, I’m told."],
["wheat","Wheat’s a real staple for farmers. I caution ya - you’re going to want to plant it in loamy soil, and not water it the first day. Big mistake I made once."],
["tomato","I remember that growing tomatoes was an early challenge for me. I really had to work at it, put some effort into it. I got a cold, you might expect, just after getting the watering level right for the first half of summer, just moderate but heavy enough to soak into the loose soil. I was laid up in bed two weeks straight after that."],
["rice","You know, I’ve done some personal work with rice. I used to be very involved in agronomic science in my youth, mostly at technical college, but I kept it up on the side after assuming the farm. Once they started funneling and paywalling all the agricultural textbook information through those damn AIs, I decided to do some of my own experimenting, seeing how rice was suited to different soil types. I found out that rice doesn’t thrive in sandy, loose, loamy, or fertile soils, but didn’t have the time to test the last few types. My wife had a personal crisis I had to help ‘er with."],
["apple","I recall growing apples for a while. You know, I used to own an orchard, just outside of town. Used to walk through the trees to set my mind easy after a long day. Really made me a lot of money for a while too. I tested the soil and it must’ve been the fertile or loamy soil that was helping. Not that I didn’t need fertilizer, because I did. Stained my shoes once with the damned stuff…"]
]
const NOTE0="From the garden book: You haven't visited the library yet, check it out for valuable information!";
const EMO={corn:"🌽",potato:"🥔",wheat:"🌾",tomato:"🍅",rice:"🍚",apple:"🍎"},STORM=8,GOAL=8;
let S,tool="corn";
let dayStart=Date.now();
const IDEALSOIL=[["corn","any"],["potato","fertile"],["wheat","loamy"],["tomato","loose"],
                 ["rice","clay"],["apple","fertile","loamy"]]
const IDEALWET=[["corn",2,2,2,2],["potato",3,3,3,3],["wheat",0,4,4,4],["tomato",4,4,3,3],
                ["rice",5,5,5,5],["apple",3,3,3,3]]
const IDEALFERT=[["corn",3,3,3,3],["potato",1,0,0,0],["wheat",1,0,0,0],["tomato",4,0,3,0],
                ["rice",1,0,0,0],["apple",1,1,1,1]]
const $=id=>document.getElementById(id);

// clock function for the phone's clock
function tick(){const m=(480+Math.floor((Date.now()-dayStart)/10000))%1440,h=Math.floor(m/60),mm=String(m%60).padStart(2,"0");
$("clock").innerHTML=((h%12)||12)+":"+mm+" <small>"+(h<12?"AM":"PM")+"</small>"}
setInterval(tick,1000);

// resets game to default state
function fresh(){dayStart=Date.now();tick();
$("gardenNote").textContent=NOTE0;document.querySelectorAll("nav button").forEach(b=>b.classList.remove("ping"));
S={day:1,score:0,asked:Array.from({length:TIPS.length},()=>[]),visits:3,fenced:"",plots:SOILS.map(()=>Array.from({length:4},()=>({seed:null,g:0,wet:0,fert:0,dead:""})))};
log("Pick a seed, then tap a plot. Your goal: harvest 8 crops before the storm.");
$("chats").innerHTML='<div class="chat"><b>Garden Assistant</b><br>Hi! Ask me anything about your farm.</div>';
$("libText").hidden=true;$("fenceText").hidden=true;$("readLib").disabled=false;$("talkFence").disabled=false;showVisits();draw()}

function showVisits(){$("visits").textContent="Visits left this game: "+S.visits}

function log(t){$("log").textContent=t}

// updates field state along with day/storm/goal text
// called after taking an action on the field and at the end of each day
function draw(){
$("day").textContent="Day "+S.day;$("storm").textContent="Storm in "+(STORM-S.day+1)+" days";$("score").textContent="Harvest "+S.score+"/"+GOAL;
$("field").innerHTML="";
S.plots.forEach((row,r)=>{const d=document.createElement("div");d.className="row";
row.forEach((p,c)=>{const b=document.createElement("button");b.className="plot s-"+SOILS[r][1]+(p.dead?" dead":"");
let face="";if(p.dead)face="🥀";else if(p.seed){face=p.g>=4?EMO[p.seed]:p.g>=2?"🌿":"🌱"}
b.textContent=face;b.setAttribute("aria-label",SOILS[r][0]+" soil, "+(p.seed||"empty"));
b.innerHTML+=(p.wet?`<span class="tag" style="color:${SOILS[r][1]==="sandy"?"dodgerBlue":"cyan"}">${p.wet}</span>`:"")+(p.fert?`<span class="tag" style="left:4px;right:auto;color:${SOILS[r][1]==="sandy"?"green":"lightGreen"}">${p.fert}</span>`:"");
b.onclick=()=>act(r,c);d.appendChild(b)});
const l=document.createElement("div");l.className="soil";l.textContent=SOILS[r][0];d.appendChild(l);$("field").appendChild(d)})}

// runs when clicking on a plot
// if seed can be harvested, harvests it.
// if trying to plant a seed but a seed is already there, will block you from planting it
// stops you from trying to water/fertilize a plot with no seed or a dead seed
// calls toolOnPlant(p,r) if using water or fertilizer on a living seed
function act(r,c){const p=S.plots[r][c];
if(p.seed&&p.g>=4&&!p.dead){p.seed=null;p.g=0;S.score++;log("Harvested! Nice work.");return draw()}
if(EMO[tool]){if(p.seed)return log("Something is already growing there.");Object.assign(p,{seed:tool,g:0,wet:0,fert:0,dead:""});log("Planted a "+tool+" in "+SOILS[r][0]+" soil.")}
else if(!p.seed||p.dead)return log("Plant a seed first.");
else{toolOnPlant(p,r);}
draw()}

// pulls up a popup box when using water or fertilizer on a seed
// asks how much water/fertilizer from 0-5, using - and + buttons
function toolOnPlant(p,r){
    $("toolChoiceT").textContent=`${p.seed} on ${SOILS[r][0]} soil`;
    $("toolChoiceB").textContent=`Choose how much ${tool==="water"?"water":"fertilizer"} to give to this plant (0-5)`
    $("toolChoice").showModal()
    let toolValue = tool==="water"?p.wet:p.fert
    function updateToolValue(){$("toolValue").textContent=` ${toolValue} `}
    updateToolValue()
    $("toolMinus").onclick=()=>{if(toolValue>0)toolValue--;updateToolValue()}
    $("toolPlus").onclick=()=>{if(toolValue<5)toolValue++;updateToolValue()}
    $("toolConfirm").onclick=()=>{tool==="water"?p.wet=toolValue:p.fert=toolValue;
        $("toolChoice").close();tool==="water"?log("Watered."):log("Fertilized.");
        draw()}
}

// runs when clicking "Sleep until tomorrow"
// progresses to the next day and updates field accordingly
/* NOTE: currently uses placeholders to decide if plants should live */
$("next").onclick=()=>{dayStart=Date.now();tick();let msgs=[];
S.plots.forEach((row,r)=>row.forEach(p=>{if(!p.seed||p.dead||p.g>=4)return;const soil=SOILS[r][1];
    waterDiff = toolCorrectAmount(p,soil,"water");
        if(waterDiff==="too much"){p.dead="drown";msgs.push(`A ${p.seed} drowned from too much water.`)} // too much water
        else if(waterDiff==="not enough"){p.dead="dry";msgs.push(`A ${p.seed} dried up and died.`)} // not enough water
        else{} // ideal water
    fertDiff = toolCorrectAmount(p,soil,"fert");
        if(fertDiff==="too much"){p.dead="burn";msgs.push(`Too much fertilizer burned a ${p.seed}.`)} // too much fertilizer
        else if(fertDiff==="not enough"){p.dead="wilt";msgs.push(`A ${p.seed} was malnourished and ran out of nutrients.`)} // not enough fertilizer
        else{} // ideal fertilizer
    soilDiff = toolCorrectAmount(p,soil,"soil");
        if(soilDiff==="too much"){p.dead="soil";msgs.push(`The ${SOILS[r][1]} soil wasn't sufficient for a ${p.seed}.`)} // not ideal soil
        else{} // ideal soil
if(waterDiff==="ideal"&&fertDiff==="ideal"&&soilDiff==="ideal"){p.g++;} // all ideal
p.wet=0;p.fert=0;if(p.g>4)p.g=4}));
S.day++;log(msgs.length?msgs.join(" "):"A quiet night. Check your plants.");
if(S.day>STORM)return finish();if(S.fenced)farmerSend();draw()};

// returns "ideal" if p.wet or p.fert is within 1 of its respective ideal value, 
//  or if the seed's soil is equal to its ideal value, depending on t
// if p.wet, p.fert, or soil (depending on what is being checked) are not ideal
// checks against IDEALWET or IDEALFERT or IDEALSOIL 
//  depending on if t is "water" or "fert" or "soil"
function toolCorrectAmount(p,soil,t){
    if (!(t==="water"||t==="fert"||t==="soil")) {console.log(`Invalid tool sent to toolCorrectAmount(): ${t}`); return false;}
    for(let i = 0; i < IDEALWET.length; i++) {
        if(p.seed===IDEALWET[i][0]){
            
            diffFromIdeal = TCAHelper(t, t==="soil"?soil:p,
                t==="water"?IDEALWET[i][p.g+1]:t==="fert"?IDEALFERT[i][p.g+1]:IDEALSOIL[i])

            if (Math.abs(diffFromIdeal) <= 1) {return "ideal"} // ideal
            else if(diffFromIdeal > 1) {return "too much"} // too much water/fert (or wrong soil)
            else {return "not enough"} // not enough water/fert
        }
    }
    console.log(`${p.seed} not found in ${t==="water"?"IDEALWET":t==="fert"?"IDEALFERT":"IDEALSOIL"}`); return false;
}

// returns true if within 1 of correct amount (so there is a range of 3 accepted values for p.wet/p.fert)
// t is "water", "fert", or "soil"
// p is p if t is "water" or "fert", otherwise p is SOILS[r][1]
// ideal is IDEALWET[i][g+1] if t is "water" or "fert", otherwise ideal is IDEALSOIL[i]
function TCAHelper(t,p,ideal){
    return t==="water" ? p.wet - ideal
        : t==="fert" ? p.fert - ideal
        : correctSoil(p,ideal) // p = SOILS[r][1] if t = "soil"
}

// returns true if soil s is equal to any value in ideal (the IDEALSOIL[i] for the seed in s)
function correctSoil(s,ideal){
    if(ideal[1]==="any"){return 0;} // true, any soil is allowed
    for(let i = 1; i < ideal.length; i++){
        if (s===ideal[i]) return 0; // true, seed's soil equals an ideal soil
    }
    return 5; // false, seed's soil does not equal an ideal soil
}

// ask garden assistant AI
$("ask").onclick=()=>{dialogueSelection("assistant");}

// take note from library
$("readLib").onclick=()=>{if(S.visits<=0)return;dialogueSelection("library");}

// ask for message from farmer, farmer will respond tomorrow
// cannot ask for two messages on the same day because S.fenced will return true
$("talkFence").onclick=()=>{if(S.fenced)return;dialogueSelection("farmer");}

// after a day has passed, farmer will send text if S.fenced is not empty (meaning you asked for a message)
// also reactivates fence after sending the text by setting S.fenced=""
function farmerSend(){
    for (let i = 0; i < FARMER.length; i++){
        if (FARMER[i][0]===S.fenced){
            const d=document.createElement("div");d.className="chat farmer";d.innerHTML="<b>Neighbor (farmer)</b><br>"+FARMER[i][1];$("chats").prepend(d);
            document.querySelectorAll('nav button[data-go="farm"]').forEach(b=>b.classList.add("ping"));S.fenced="";$("talkFence").disabled=false;
            $("fenceText").textContent="The farmer sent you a message. Check your phone on the farm screen.";
            return;
        }
    }
    $("fenceText").textContent=`Message failed to send. (${S.fenced} not found in FARMER)`;
    console.log(`${S.fenced} not found in FARMER`);
}

function dialogueSelection(source){
    $("dialogueChoiceT").textContent=`Receive advice from the ${source}`;
    $("dialogueChoiceB").textContent=`Choose which crop you would like advice about:`
    $("dialogueChoice").showModal()
    $("dialogueClose").onclick=()=>{$("dialogueChoice").close()}
    $("askCorn").onclick=()=>{sendDialogue(source,"corn")}
    $("askPotato").onclick=()=>{sendDialogue(source,"potato")}
    $("askWheat").onclick=()=>{sendDialogue(source,"wheat")}
    $("askTomato").onclick=()=>{sendDialogue(source,"tomato")}
    $("askRice").onclick=()=>{sendDialogue(source,"rice")}
    $("askApple").onclick=()=>{sendDialogue(source,"apple")}
}

function sendDialogue(source, seed){
    if (source==="assistant"){
        for(let i = 0; i < TIPS.length; i++){
            if (TIPS[i][0][0]===seed){
                const j=Math.floor(Math.random()*(TIPS[i].length-1)+1);S.asked[i].push(j);
                const d=document.createElement("div");d.className="chat";d.innerHTML="<b>Garden Assistant</b><br>"+TIPS[i][j][0];$("chats").prepend(d);
                while($("chats").querySelectorAll(".chat:not(.farmer)").length>3){const a=$("chats").querySelectorAll(".chat:not(.farmer)");a[a.length-1].remove()}
                $("dialogueChoice").close();return;
            }
        }
    }
    else if (source==="library"){
        for(let i = 0; i < LIB.length; i++){
            if (LIB[i][0]===seed){
                S.visits--;$("libText").textContent=LIB[i][1];$("libText").hidden=false;
                $("gardenNote").textContent="From the garden book: "+LIB[i][1];showVisits();
                if(S.visits<=0)$("readLib").disabled=true;
                $("dialogueChoice").close();return;
            }
        }
    }
    else { // source==="farmer"
        S.fenced=seed;$("talkFence").disabled=true;
        $("fenceText").textContent="The farmer will message you tomorrow. Check your phone on the farm screen when you wake up.";
        $("fenceText").hidden=false;
        $("dialogueChoice").close();return;
    }
    console.log(`${seed} not found in ${source==="assistant"?"TIPS":"LIB"}`); 
    // farmer will always successfully return since it is evaluated in farmerSend() instead
}

// runs when the game is over, pulls up a popup box telling you your score
// lists the tips the AI gave you, and gives you a warning that you should fact-check the AI
function finish(){draw();const win=S.score>=GOAL;$("endT").textContent=win?"The farm survived the storm!":"The storm hit and the farm ran short.";
const uniq=Array.from({length:S.asked.length}, (v, i) => i).map(i=>new Set(S.asked[i])).map(i=>Array.from(i));
console.log(S.asked);console.log(uniq);
let h="<p>You harvested "+S.score+" of "+GOAL+" crops.</p>";
for(let a = 0; a < uniq.length; a++){
    if(uniq[a].length){h+="<p>Tips the assistant gave you:</p><ul>"+uniq.map(i=>i.map(j=>'<li class="'+(TIPS[uniq.indexOf(i)][j][1]?"good":"bad")+'">'+(TIPS[uniq.indexOf(i)][j][1]?"Correct: ":"Wrong: ")+TIPS[uniq.indexOf(i)][j][0]+"</li>").join("")).join("")+"</ul>";
                        break;}
    if (a = uniq.length - 1){h+="<p>You never asked the assistant. Next time, try it, then check what it says.</p>";}
}
h+="<p><b>Remember:</b> AI can sound sure and still be wrong. Check it against other sources, like the library or an experienced neighbor, before you decide.</p>";
$("endB").innerHTML=h;$("end").showModal()}

// after game ends, click "Play again" to restart game
$("again").onclick=()=>{$("end").close();fresh()};

// reset button resets game
$("reset").onclick=fresh;

// highlights the tool that you currently have selected
document.querySelectorAll(".tool").forEach(b=>b.onclick=()=>{tool=b.dataset.t;document.querySelectorAll(".tool").forEach(x=>x.setAttribute("aria-pressed",x===b))});

// switches between farm/fence/library
function go(n){if(n==="farm")document.querySelectorAll("nav button").forEach(b=>b.classList.remove("ping"));
if(n!=="library")$("libText").hidden=true;document.querySelectorAll(".scene").forEach(s=>s.classList.toggle("on",s.id===n));document.querySelectorAll("nav button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.go===n))}

document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));

fresh();

$("rules").showModal();
$("startGame").onclick=()=>{$("rules").close();dayStart=Date.now();tick()};
