// activity for choosing spiecies
/**
MEANINGFUL INTERACTION #1
clicking the options of select, the imgbox will show scroll
when clicking the images in scroll, the images and activity 
infomation will appear in imgbox and scroll will disappear
*/
const spieciesDropDown = document.querySelector(".spiecies-dropdown");
const imgBox = document.querySelector(".imgBox");

if (spieciesDropDown) {
    spieciesDropDown.addEventListener("change",function(e){
        console.log(e.target.value);
        if(e.target.value === "Animals") {
            imgBox.classList = "imgBox";
            imgBox.innerHTML = `
            <div class="select-scroll">
                <img src="img/cat.jpg" alt="" onclick="showDetail(0)">
                <img src="img/cow.jpg" alt="" onclick="showDetail(1)">
                <img src="img/dog.jpg" alt="" onclick="showDetail(2)">
                <img src="img/eagle.jpg" alt="" onclick="showDetail(3)">
                <img src="img/lion.jpg" alt="" onclick="showDetail(4)">
                <img src="img/owl.jpg" alt="" onclick="showDetail(5)">
                <img src="img/parrot.jpg" alt="" onclick="showDetail(6)">
                <img src="img/pig.jpg" alt="" onclick="showDetail(7)">
                <img src="img/sheep.jpg" alt="" onclick="showDetail(8)">
                <img src="img/snake.jpg" alt="" onclick="showDetail(9)">
                <img src="img/Pangolin.jpg" alt="" onclick="showDetail(10)">
                <img src="img/tiger.jpg" alt="" onclick="showDetail(11)">
                <img src="img/human.jpg" alt="" onclick="showDetail(25)">
            </div>
            `;
            e.preventDefault();}
        else if(e.target.value === "Microorganisms"){
            imgBox.classList = "imgBox";
            imgBox.innerHTML = `
            <div class="select-scroll">
                <img src="img/mushroom.jpg" alt="" onclick="showDetail(12)">
                <img src="img/bacteria.jpg" alt="" onclick="showDetail(13)">
            </div>
            `;
            e.preventDefault();}
        else if(e.target.value === "Plants") {
            imgBox.classList = "imgBox";
            imgBox.innerHTML = `
            <div class="select-scroll">
                <img src="img/grass.jpg" alt="" onclick="showDetail(14)">
                <img src="img/roses.jpg" alt="" onclick="showDetail(15)">
                <img src="img/banana.jpg" alt="" onclick="showDetail(16)">
                <img src="img/cactus.jpg" alt="" onclick="showDetail(17)">
                <img src="img/grape.jpg" alt="" onclick="showDetail(18)">
                <img src="img/fern.jpg" alt="" onclick="showDetail(19)">
                <img src="img/pine.jpg" alt="" onclick="showDetail(20)">
            </div>
            `;
            e.preventDefault();}
            else if(e.target.value === "Insects") {
                imgBox.classList = "imgBox";
                imgBox.innerHTML = `
                <div class="select-scroll">
                    <img src="img/bee.jpg" alt="" onclick="showDetail(22)">
                    <img src="img/butterfly.jpg" alt="" onclick="showDetail(23)">
                    <img src="img/spider.jpg" alt="" onclick="showDetail(24)">    
                </div>
                `;
                e.preventDefault();}
    
    });
}




let detailText = [`Cats are agile and good at jumping, and are nocturnal creatures. The head is round, the face is short, the front limbs have five fingers, the hind limbs have four toes, and the toes have sharp and curved claws that can stretch. Hunting other animals in ambush, most of them can climb trees. Cats have fat pads on the bottom of their toes to avoid making noises when walking, and they will not start the mice when hunting. The claws are in a contracted state when traveling to prevent the claws from being blunt, and they will stick out when catching mice and climbing rocks. The mission on Mars is to explore the topography of Mars, climb the rocks on Mars, and explore unknown places.`,
`The physique of cattle is strong, and the neck, shoulders or back often have bulges formed by the back spine and developed muscles, which are suitable for long-distance running. The mission on Mars is to help transport supplies and clear wasteland.`, 
`Dogs have a keen sense of smell, hearing and vision. They are good friends of mankind. The person on Mars is responsible for exploring whether there are creatures on Mars and searching and rescuing other players who are in danger`,
`The eagle has a fierce temperament and often forages in the canyon. The two wings are well-developed and good at flying. Generally, they are active in the daytime, and they live in mountains and forests or plains. When hunting, eagles always first land on a big tree with a wide field of vision to look for prey. Once they find a target, they will rush down to capture prey. Players who choose to become eagles need to wear instruments to survey the terrain in the air, the customer service is weightless, and the materials are transported in the air.`,
`The lion is large in size, uniform in body, medium-length limbs, and toes. The head is large and round, the snout is short, and the senses of sight, hearing, and smell are well developed. Canine teeth and cracked teeth are extremely developed. The lion is the only male and female cat in the world. The male lion has a mane, but the female lion does not. The lion can explore different Martian terrains and be responsible for long-distance transportation on Mars, and contribute to the construction of Mars. They can also play with tigers on Mars.`,
`Owls like to sleep among the leaves during the day and wait until night falls to find food. They are experts in hunting rats in the forest. They have excellent depth perception during hunting, especially in dimly lit environments. Owls are color-blind and the only bird that cannot distinguish colors. Players who become owls on Mars are responsible for surveying Mars at night and wearing instruments to ease the weightless flight. They usually accompany the players who become trees.`,
`Parrots are suitable for gripping, with a strong beak and can eat hard-shelled fruits. The plumes are brightly colored. With their beautiful feathers and the characteristics of good human language skills, they are responsible for communicating on Mars and singing on Mars to cheer for everyone.`,
`The pig is an omnivorous mammal with a sturdy body, short limbs, a long nose and a long muzzle, a gentle personality, and strong adaptability. Do some light physical work on Mars, play with friends, and gather together to heat others when the weather is cold.`,
`Sheep are docile animals. The hair on their bodies keeps them warm. Work with people on Mars to find ways to grow grass on the Martian soil, eat grass and keep your friends warm.`,
`The snake has a slender body, divided into three parts: head, trunk and tail. It has no limbs and is covered with scales. They moved quickly on the ground. Snake is a kind of temperature-changing animal whose body temperature changes with temperature, because snake itself does not have a perfect body temperature regulation mechanism to generate and maintain a constant body temperature. The optimum temperature for snake activity is 20-30℃. They are advancing in an "S" pattern. On Mars, they will follow sheep or other animals to prevent the low temperatures on the stars, and are also members of the geological survey.`,
`The pangolin has a long and narrow body, with scaly armor all over the body, stubby limbs, a flat and long tail, and a slightly raised back. Pangolins usually live alone in caves and are good at digging burrows. They come out day and night. When encountering enemies, they curl up into a ball. The hard shell makes it difficult for beasts to bite or swallow. The primary task of pangolins on Mars is to dig a hole in the soil of Saturn to build a house. Because of the hard shell, it can travel through the rocks on Mars and dig out the soil for the accompanying people to test.`,
`The tiger is a typical mountain and forest animal, majestic, strong and tall, just like a lion. Will go on an adventure with the lion on Mars. Compete with the lions to see who surveys the geological range. Race against other animals on Mars.`,
`Mushroom is a kind of fungus that grows in dark areas and spreads in dark areas. It generally grows on rotting wood and leaves, and decomposes organic matter. On Mars, it is responsible for decomposing the feces left by the deciduous animals left by plants and providing organic matter for Mars.`,
`Bacteria mainly decompose rotting animal and plant corpses and convert them into inorganic substances. These inorganic substances return to the soil and are transformed into organic substances by life. If the player chooses to be a microorganism, the specific roles are randomly assigned to enter the Martian soil layer and detect the soil quality. When other players put organic matter into the Martian soil, the role of the microorganisms is to decompose them.ia`,
`Grass is a very common plant on the earth. Players who become grass grow quietly on Mars. Photosynthesis releases oxygen and provides a place for fallen animals to rest.`,
`Roses are beautiful and charming, becoming roses, blooming quietly on Mars and chatting with passing players.`,
`Banana trees like high temperature and humidity, and the growth temperature is 20～35℃, the most suitable is 24～32℃. So growing on Mars requires the help of equipment. Banana trees grow bananas on Mars for other players to replenish their energy and physical strength. They usually perform photosynthesis to produce oxygen, and in their leisure time they chat with others and sing and rest.`,
`CactusCactus loves sunlight, warmth, drought tolerance, fear of cold, waterlogging, and acidic soil. It is suitable for growth in neutral and slightly alkaline soil. In places with low temperatures on Mars, warmth needs to be done, but in Martian water shortages, cacti can tolerate drought, photosynthesize, and stabilize the soil.`,
`The vines like fertile soil with ventilation, sunshine, and good drainage. The co-existing grape vines on Mars need people’s help. During photosynthesis, the branches and leaves can be stretched and climbed to different places and buildings. The grapes produced can be eaten by animals and people, or used to make wine.`,
`Most ferns like to grow in warm, humid, white forest environments, and become an important part of the herb layer in forest vegetation, which has a significant impact on the growth and development of forests. On Mars, the main task of ferns is to help trees form forests.`,
`The pine tree itself has strong adaptability, so it can grow in various types of soil. It has strong drought resistance and likes light. It is an important member of the forest. On Mars, pine trees provide small animals with a place to play, and work together with small animals to form a forest on Mars, conduct photosynthesis, and prevent soil erosion.`,
`Brown tree`,
`BeeBees are social insects, composed of individuals such as queen bees, drones, and worker bees. They have a variety of information exchange methods, and different types of division of labor are also different. Players can choose to become a kind of bee and enter Mars. The main mission on Mars is to build honeycombs and pollinate the flowers of plants.`,
`Butterflies are beautiful, but they morph from caterpillars and need to feed on the leaves of plants. Butterflies need to live with plants on Mars, and the main task of butterflies is to send messages when building forests.`,
`Spiders are good at making webs. Once plants find a place to take root on Mars, spiders will come to make webs. You can make a big net on Mars and have fun on it.`,
`HumanThe task of choosing humans on Mars will be heavier. It needs to undertake the main Mars construction task, and requires cooperative role assignment. Some people are responsible for exploring the terrain, some people are responsible for researching how to create oxygen, and some people are responsible for building bases, etc.`];

function showDetail(index) {
    imgBox.classList="imgBox";
    imgBox.classList.add("activity")
    if (index ===0){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/cat.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";} 
    else if(index ===1){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/cow.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===2){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/dog.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===3){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/eagle.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===4){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/lion.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===5){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/owl.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===6){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/parrot.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===7){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/pig.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===8){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/sheep.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===9){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/snake.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===10){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/Pangolin.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===11){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/tiger.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===12){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/mushroom.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===13){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/bacteria.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===14){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/grass.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===15){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/roses.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===16){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/banana.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===17){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/cactus.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===18){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/grape.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===19){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/fern.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}
    else if(index ===20){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/pine.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}              

    else if(index ===22){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/bee.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}      
    else if(index ===23){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/butterfly.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}    
    else if(index ===24){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/spider.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}  
    else if(index ===25){
        imgBox.innerHTML=`
        <div class="activities-content">
            <img src="img/human.jpg" alt="">
            <p>${detailText[index]}</p >
        </div>
        `;
        document.querySelector(".spiecies-dropdown").value="";}              
};

// activities for choosing location
/**
MEANINGFUL INTERACTION #2
clicking the options of select, the imgbox will show location and images.
when clicking random, the numbers will be generated randomly
*/
const locationDropDown = document.querySelector(".locations-dropdown");
const locationBox = document.querySelector(".locationBox");

if (locationDropDown) {
    locationDropDown.addEventListener("change",function(e){
        console.log(e.target.value);
        if(e.target.value==="The South Pole"){
            locationBox.classList = "locationBox";
            locationBox.innerHTML = `
            <div class="location-content">
                <div class="location">
                    <p>Latitude: 0 </p>    
                    <p>Longitude: S 90 </p>   
                    <p>In July 2018, scientists discovered a lake about 20 kilometers in diameter beneath the Martian South Pole, located 1 mile below the surface of Mars. Scientists believe that the depth of this lake is at least 1 meter.</p> 
                    <p>In September 2020, scientists conducted further analysis and research on the data collected by the Mars Express, and finally found multiple saltwater lakes underground in the Antarctic Mars, the larger of which was more than 20 kilometers in diameter.</p>
                </div>           
                <img src="img/the south pole.png" alt="">
            </div>
            `;
            e.preventDefault();}
        else if(e.target.value==="The North Pole"){
            locationBox.classList = "locationBox";
            locationBox.innerHTML = `
            <div class="location-content">
                <div class="location">
                    <p>Latitude: 0 </p>    
                    <p>Longitude: N 90 </p>   
                    <p>There is a huge crater at the north pole of Mars, which is probably caused by a celestial collision.</p> 
                </div>           
                <img src="img/the north pole.png" alt="">
            </div>
            `;
            e.preventDefault();}
        else if(e.target.value==="The Equator"){
            locationBox.classList = "locationBox";
            locationBox.innerHTML = `
            <div class="location-content">
                <div class="location">
                    <p>Latitude: 0 </p>    
                    <p>Longitude: 0 </p>
                    <p>The highest temperature on Mars' equatorial day can reach about 30 degrees Celsius, and the atmosphere is very thin, but it can still protect against some of the sun's ultraviolet rays.</p>               
                </div>
                <img src="img/the equaitor.png" alt="">
            </div>
            `;
            e.preventDefault();}
        else if(e.target.value==="Random"){
            let Latitude = (Math.random() * 90);
            let Longitude = (Math.random() * 90);
            let longLocation = ['N', 'S']
            let longlocationIndex = Math.floor(Math.random() * 2);
            let latiLocation = ['W', 'E']
            let latilocationIndex = Math.floor(Math.random() * 2);
        
            locationBox.classList = "locationBox";
            locationBox.innerHTML = `
            <div class="latitude-content">
                <p>Latitude: ${latiLocation[latilocationIndex]} ${Latitude}</p>    
            </div>
            <div class="longitude-content">
                <p>Longitude: ${longLocation[longlocationIndex]} ${Longitude}</p>    
            </div>
            `;
    
        }
        
    })
}

/**
MEANINGFUL INTERACTION #3
when clicking submit button, the pop up window will appear
*/
function ActivitysubClickfunction(x){
    x.parentElement.classList.add("hidden");
    document.querySelector(".pop-up").classList.add("play");
    e.preventDefault();
}

function ActivityreClickfunction(x){
    x.parentElement.classList ="pop-up";
    document.querySelector(".container_one_col.hidden").classList = "container_one_col" ;
    e.preventDefault();
}


// knowing js
/**
MEANINGFUL INTERACTION #4
clicking the theory number button, the paragraph matched number will be only visible
the clicked button will be hover red ,others are blue
*/

function KnowingClickfunction(x){
    if (document.querySelector(".theorybuttonclicked")) {
        document.querySelector(".theorybuttonclicked").classList.remove("theorybuttonclicked");
    }

    if(x===1){
        document.querySelector(".theory1").classList = "theory1 play";
        document.querySelector(".theory2").classList = "theory2";
        document.querySelector(".theory3").classList = "theory3";
        document.querySelector(".theorybutton1").classList.add("theorybuttonclicked");
    }
    else if(x===2){
        document.querySelector(".theory1").classList = "theory1";
        document.querySelector(".theory2").classList = "theory2 play";
        document.querySelector(".theory3").classList = "theory3";
        document.querySelector(".theorybutton2").classList.add("theorybuttonclicked");
    }
    else if(x===3){
        document.querySelector(".theory1").classList = "theory1";
        document.querySelector(".theory2").classList = "theory2";
        document.querySelector(".theory3").classList = "theory3 play";
        document.querySelector(".theorybutton3").classList.add("theorybuttonclicked");
    }

}


// forum js
/**
MEANINGFUL INTERACTION #3
when clicking submit button, the pop up window will appear
*/
function ForumposterClickfunction(x){
    x.parentElement.parentElement.parentElement.classList.add("hidden");
    document.querySelector(".container-poster").classList.add("play");
  
}


function ForumsubmitClickfunction(x){
    x.parentElement.parentElement.classList = "container-poster"
    document.querySelector(".pop-up").classList.add("play")
}

function ForumreClickfunction(x){
    x.parentElement.classList ="pop-up";
    document.querySelector(".container_one_col.hidden").classList = "container_one_col" ;
    e.preventDefault();
}
/**
MEANINGFUL INTERACTION #5
get information from users and show users'name in Forum page to inform 
they have submitted infomation successfully
*/
document.querySelector("#userinfo").innerHTML = "Hello!" +" "+ localStorage.getItem("username")

//registeration js
function RegistersubClickfunction(x){
    x.parentElement.parentElement.parentElement.classList.add("hidden");
    document.querySelector(".pop-up").classList.add("play");
    localStorage.setItem("username",document.getElementById("Name").value);
    localStorage.setItem("userbirth",document.getElementById("Birth").value);
    localStorage.setItem("usergender",document.getElementById("Gender").value);
    localStorage.setItem("usernation",document.getElementById("Nation").value);
    localStorage.setItem("userphone",document.getElementById("Phone Number").value);
    localStorage.setItem("useraddress",document.getElementById("Address").value);
    localStorage.setItem("userjob",document.getElementById("introduction_job").value);
    localStorage.setItem("userhobby",document.getElementById("Hobby").value);
    e.preventDefault();
}

function RegisterreClickfunction(x){
    x.parentElement.classList ="pop-up";
    document.querySelector(".container_one_col.hidden").classList = "container_one_col" ;
    e.preventDefault();
}



