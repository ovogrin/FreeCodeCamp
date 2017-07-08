$(document).ready(function(){

  var chan=["freecodecamp","ESL_SC2","GamesDoneQuick","OgamingSC2"]

  var freeCC="https://www.twitch.tv/freecodecamp";
  var ESL="https://www.twitch.tv/esl_sc2";
  var Gam="https://www.twitch.tv/gamesdonequick";
  var Ogam="https://www.twitch.tv/ogamingsc2";

  var chanLinks=[freeCC,ESL,Gam,Ogam]

  for(i=0;i<chan.length;i++){
    twitchCall(i+1, chan[i], chanLinks[i]);
  }

/*Function to render the json request to Twitch's api.
id = integer to attach to the html id for each corresponding */
  function twitchCall(id, name, chanUrl){
    $.ajax(
      {
        type:"GET",
        dataType: "jsonp",
        url: "https://wind-bow.gomix.me/twitch-api/streams/"+name+"?callback=?",
        success: function(data)
        {
          if(data.stream === null || data.stream === undefined){
            $("#status0"+id).append("<a href="+chanUrl+">Offline</a>");
            $("#game0"+id).append("N/A");
//            console.log(data);
          }
          else{
            $("#status0"+id).append("<a href="+chanUrl+">Online</a>");
            $("#game0"+id).append(data.stream.game);
            $("#tr0"+id).css("background-color", "green");
//            console.log(data);
          }
        },
        error: function(){
          $("#status0"+id).append("DNE");
//          console.log(data);
        }
      });
    }
    //------------------------------------------------------------------
  });
