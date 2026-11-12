const SOILS=[["sandy","sandy"],["clay-rich","clay"],["loamy","loamy"],["fertile","fertile"],["rocky","rocky"],["silt-rich","silt"]];
const TIPS=[
["Soybeans, like other legumes, are nitrogen-fixing, meaning that they interact with Rhizobia bacteria to replenish nitrogen in soil - a key part of crop rotation - which soybeans unfortunately don’t get to benefit from.",0],
["The soybean was first domesticated in the sandy soils of China’s Yangtze Valley.",0],
["The soybean is a naturally drought-resistant plant. It does need a lot of water at first, but that tapers off as the plant matures.",0]
];
const LIB="The soybean is one of America’s most widely grown crops, being grown year-round in parts of the Midwest such as Southern Minnesota, Iowa, and Illinois. The industry of growing it for direct use and derivative products like soy wax can use 2,000 gallons of water per soybean farm per day, and sometimes 3,000 gallons of water per day around harvest time when mature soybean plants begin to convert their sugars to starches. Originating from the relatively nutrient-poor valleys of the tributaries of Yellow River in mainland China, the soybean transferred well to the loose and loam-rich soils of the Great Plains and Midwest, where it continues to be a cash crop for common farmers to this day.";
const FARMER="So you’re having sump’tn of trouble with your crops, huh? Tell me about it … I see you’re having some trouble with your soybeans. You know, I had problems with it too. I was pretty green, just outta technical college. Didn’t know much nothing, except the necessity of a few things, so I pretty much overwatered and overfertilized every crop. The soybeans took it worst. Whole crop ruined. Took me a whole lotta work over the year after that to just break even. I learned pretty soon after that soybeans don’t need fertilizer of any kind. Something about legumes being nitrogen-fixing that I never quite understood. Just something you gotta know…";
const NOTE0="From the garden book: plant carrot seeds in rock-free soil. Water daily while they sprout.";
const EMO={carrot:"🥕",potato:"🥔",soybean:"🫛"},STORM=8,GOAL=8;
let S,tool="carrot";
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
S={day:1,score:0,asked:[],visits:3,fenced:false,plots:SOILS.map(()=>Array.from({length:4},()=>({seed:null,g:0,wet:0,fert:0,dry:0,boost:0,dead:""})))};
log("Pick a seed, then tap a plot. Your goal: harvest 8 crops before the storm.");
$("chats").innerHTML='<div class="chat"><b>Garden Assistant</b><br>Hi! Ask me anything about your farm.</div>';
$("libText").hidden=true;$("fenceText").hidden=true;$("readLib").disabled=false;$("talkFence").disabled=false;showVisits();draw()}

function showVisits(){$("visits").textContent="Visits left this game: "+S.visits}

function log(t){$("log").textContent=t}

// updates field state along with day/storm/goal text
// called after taking an action, not just at the end of each day
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
if(EMO[tool]){if(p.seed)return log("Something is already growing there.");Object.assign(p,{seed:tool,g:0,wet:0,fert:0,dry:0,boost:0,dead:""});log("Planted a "+tool+" in "+SOILS[r][0]+" soil.")}
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
if(p.seed==="carrot"&&soil==="rocky"){p.dead="rocks";msgs.push("A carrot got stuck between rocks.");return}
if(p.fert>(soil==="fertile"||p.seed==="soybean"?0:1)){p.dead="burn";msgs.push("Too much fertilizer burned a "+p.seed+".");return}
if(p.wet>0){p.g+=(p.seed==="soybean"&&soil!=="loamy")?0.5:1;p.dry=0;if(p.fert&&!p.boost&&soil!=="fertile"){p.g++;p.boost=1}}else p.dry++;
if(p.dry>=({carrot:2,potato:3,soybean:2})[p.seed]){p.dead="dry";msgs.push("A "+p.seed+" wilted from thirst.")}
p.wet=soil==="sandy"?0:Math.max(0,p.wet-1);if(p.g>4)p.g=4}));
S.day++;log(msgs.length?msgs.join(" "):"A quiet night. Check your plants.");
if(S.day>STORM)return finish();if(S.fenced)farmerSend();draw()};

// returns true if p.wet or p.fert is within 1 of its respective ideal value, 
//  or if the seed's soil is equal to its ideal value, depending on t
// checks against IDEALWET or IDEALFERT or IDEALSOIL 
//  depending on if t is "water" or "fert" or "soil"
function toolCorrectAmount(p,r,t){
    if (!(t==="water"||t==="fert"||t==="soil")) {console.log(`Invalid tool sent to toolCorrectAmount(): ${t}`); return false;}
    for(let i = 0; i < IDEALWET.length; i++) {
        if(p.seed===IDEALWET[i][0]){
            return TCAHelper(t, t==="soil"?SOILS[r][1]:p,
                t==="water"?IDEALWET[i][g+1]:t==="fert"?IDEALFERT[i][g+1]:IDEALSOIL[i])
        }
    }
    console.log(`${p.seed} not found in ${t==="water"?"IDEALWET":"IDEALFERT"}`); return false;
}

// returns true if within 1 of correct amount (so there is a range of 3 accepted values for p.wet/p.fert)
// t is "water", "fert", or "soil"
// p is p if t is "water" or "fert", otherwise p is SOILS[r][1]
// ideal is IDEALWET[i][g+1] if t is "water" or "fert", otherwise ideal is IDEALSOIL[i]
function TCAHelper(t,p,ideal){
    return t==="water"?Math.abs(p.wet - ideal)<=1
        : t==="fert"?Math.abs(p.fert - ideal)<=1
        : ideal[1]==="any"||correctSoil(p,ideal) // p = SOILS[r][1] if t = "soil"
}

// returns true if soil s is equal to any value in ideal (the IDEALSOIL[i] for the seed in s)
function correctSoil(s,ideal){
    for(let i = 1; i < ideal.length; i++){
        if (s===ideal[i]) return true; // seed's soil equals an ideal soil
    }
    return false; // seed's soil does not equal an ideal soil
}

// ask garden assistant AI
$("ask").onclick=()=>{const i=Math.floor(Math.random()*TIPS.length);S.asked.push(i);
const d=document.createElement("div");d.className="chat";d.innerHTML="<b>Garden Assistant</b><br>"+TIPS[i][0];$("chats").prepend(d);
while($("chats").querySelectorAll(".chat:not(.farmer)").length>3){const a=$("chats").querySelectorAll(".chat:not(.farmer)");a[a.length-1].remove()}};

// take note from libary
$("readLib").onclick=()=>{if(S.visits<=0)return;S.visits--;$("libText").textContent=LIB;$("libText").hidden=false;$("gardenNote").textContent="From the garden book: "+LIB;showVisits();if(S.visits<=0)$("readLib").disabled=true};

// ask for message from farmer, farmer will respond tomorrow
// cannot ask for two messages on the same day because S.fenced will be set to true
$("talkFence").onclick=()=>{if(S.fenced)return;S.fenced=true;$("talkFence").disabled=true;
$("fenceText").textContent="The farmer will message you tomorrow. Check your phone on the farm screen when you wake up.";$("fenceText").hidden=false;};

// after a day has passed, farmer will send text if S.fenced=true (meaning you asked for a message)
// also reactivates fence after sending the text by setting S.fenced=false
function farmerSend(){const d=document.createElement("div");d.className="chat farmer";d.innerHTML="<b>Neighbor (farmer)</b><br>"+FARMER;$("chats").prepend(d);
document.querySelectorAll('nav button[data-go="farm"]').forEach(b=>b.classList.add("ping"));S.fenced=false;$("talkFence").disabled=false;
$("fenceText").textContent="The farmer sent you a message. Check your phone on the farm screen.";}

// runs when the game is over, pulls up a popup box telling you your score
// lists the tips the AI gave you, and gives you a warning that you should fact-check the AI
function finish(){draw();const win=S.score>=GOAL;$("endT").textContent=win?"The farm survived the storm!":"The storm hit and the farm ran short.";
const uniq=[...new Set(S.asked)];
let h="<p>You harvested "+S.score+" of "+GOAL+" crops.</p>";
h+=uniq.length?"<p>Tips the assistant gave you:</p><ul>"+uniq.map(i=>'<li class="'+(TIPS[i][1]?"good":"bad")+'">'+(TIPS[i][1]?"Correct: ":"Wrong: ")+TIPS[i][0]+"</li>").join("")+"</ul>":"<p>You never asked the assistant. Next time, try it, then check what it says.</p>";
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
