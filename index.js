/*function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
} */

        var apiKey = "jrD3hPC2tBHcbtcCD8FMSdfYRGlDilzWSWR1a2afDZxAQthMkRL8AwBxLRBFfWyu";
        $.ajax({
            type: "GET",
            url: "https://www.thebluealliance.com/api/v3/event/2023cmptx/teams/keys",
            headers: { "X-TBA-Auth-Key": apiKey },
            success: function(result){
                result.forEach(element => {
                    var apiKey = "jrD3hPC2tBHcbtcCD8FMSdfYRGlDilzWSWR1a2afDZxAQthMkRL8AwBxLRBFfWyu";
              $.ajax({
                    type: "GET",
                    url: "https://www.thebluealliance.com/api/v3/team/"+element+"/awards/2023",
                    headers: { "X-TBA-Auth-Key": apiKey },
                    success: function(result){
                        result.forEach(element =>{
                            count = 1
                            if(element.award_type == '0'){
                               getchairs(element)
                            }else{
                               
                            }
                        })
                    
                    }
                })
                });
                } 
              } 
         );

         function getchairs(element){
             var team = element.recipient_list[0].team_key;
            var apiKey = "jrD3hPC2tBHcbtcCD8FMSdfYRGlDilzWSWR1a2afDZxAQthMkRL8AwBxLRBFfWyu";
              $.ajax({
                    type: "GET",
                    url: "https://www.thebluealliance.com/api/v3/team/"+team+"/simple",
                    headers: { "X-TBA-Auth-Key": apiKey },
                    success: function(result){
                        
                        if(result.team_number == '6413'){
                            $('.result').append('<a href="https://www.thebluealliance.com/team/6413"><li class="list-group-item list-group-item-success">'+result.team_number+": "+result.nickname+"</li></a>")
                        }else{
                             $('.result').append('<a href="https://www.thebluealliance.com/team/'+result.team_number+'"><li class="list-group-item">'+result.team_number+": "+result.nickname+"</a> from "+result.city+", "+result.state_prov+"</li>")
                        }
                        console.log(count)  
                    }
                })
         }
