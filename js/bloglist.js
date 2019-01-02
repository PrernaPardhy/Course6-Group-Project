
function showContent(){
    var i=1;
    var dotIcon='dotIcon'
    for(i;i<=5;i++){
        dotIcon+=dotIcon+i;
        
        var template='<div class="post">'+
        '<div class="post-left">'+
            '<p class="post-username">Jimi</p>'+
        '</div>'+
        '<div class="post-content">'+
           
'<span class="glyphicon glyphicon-trash"  style="position: absolute; right:10px; top:10px;"></span>'+
           ' <p class="post-title">Hello there ! This is Post '+i+'.'+' </p>'+
           '<p class="post-desc">Jimi Hendrix was arguably the greatest instrumentalist in the history of rock music.[1] Hendrix expanded the range and vocabulary of the electric guitar into areas no musician had ever ventured before. His boundless drive, technical ability and creative application of such effects as distortion forever transformed the sound of rock and roll. While creating his unique musical voice and guitar style, Hendrix synthesized diverse genres, including blues, R&B, soul, British rock, American folk music, 1950s rock and roll, psychedelic and jazz.</p>'+

            '<p class="glyphicon glyphicon-option-horizontal" style="position: absolute; right: 2%;top: 80%;" id='+dotIcon+' ></p>'+
            
        '</div>'+
    '</div>';
    if(i==5){
        document.getElementsByClassName('Post').style
        ='position:ablsolute;left:50%';
        alert("hii");
    }
    
    document.getElementsByClassName('allPostsContainer')[0].innerHTML += template;
    
    }
}
    
showContent();

function funSignUp(){
    
    document.getElementById('myModal').style.display='block';
}

function funSignIn(){
    document.getElementById('myModal1').style.display='block';
}

