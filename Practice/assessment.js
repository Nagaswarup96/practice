var btn = document.querySelector("button");
var namevalue = document.querySelector("#customname");
var ukm = document.querySelector("#uk");
var usm = document.querySelector("#us");
btn.addEventListener('click',function(){
    
        var storycontent = document.querySelector(".story");
    
        var nameenterd = namevalue.value ;
        var cel = 34.444;
        var  ston =  300 * 0.0714286 ;
        var uk_measure = "stones";
        var us_measure = "pounds";

        if(namevalue.value === ""){
            alert("Please enter the name")
        }

        if(ukm.checked == true){
            var storyText = `It was ${cel} celsius outside, so Willian the Goblin  
                    went for a walk. When they got to the soup kitchen,
                    they stared in horror for a few moments,
                      then turned into a slug and crawled away .
                      ${nameenterd} saw the whole this but was not surprised
                        —Willian the Goblin  weighs ${ston} ${uk_measure}, 
                        and it was a hot day.`;
        }
        else if(usm.checked === true){
            var storyText = `It was 94 fahrenheit outside, so Willian the Goblin  
                    went for a walk. When they got to the soup kitchen,
                    they stared in horror for a few moments,
                      then turned into a slug and crawled away .
                      ${nameenterd} saw the whole this but was not surprised
                        —Willian the Goblin weighs 300 ${us_measure}, 
                        and it was a hot day.`;
        }

        storycontent.textContent = storyText;

        namevalue.value = "";
});


