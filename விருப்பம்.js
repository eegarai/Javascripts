var Like_Copyright='A New Like/Dislike system for Forumotion Boards. Copyright © by LGforum. All Rights Reserved. Use and  modification of this script is not allowed without this entire copyright notice in the original, copied, or modified script. No distribution without consent.';function lglike(url,elem){var prev=elem.innerHTML;elem.innerHTML="தங்களின் விருப்பத்திற்கு  நன்றி...!";elem.onclick='#';$.get(url,function(){elem.className+=' LGnovote';elem.innerHTML=prev;var count=elem.nextSibling;var curcount=parseInt(/\d+/.exec(count.innerHTML)[0])+1;count.innerHTML=count.innerHTML.replace(/\d+/,curcount)})}$(function(){var x=$('.vote');var vote_plural="";var vote_singular="";for(var i=0,l=x.length;i<l;i++){var vote=x[i],count=0,plus;var bar=$(x[i]).find('.vote-bar')[0];var button=$(x[i]).find('.vote-button')[0];if(bar){count=bar.title.replace(/.*\((\d+).*/,'$1');var percent=bar.title.replace(/.*\s(\d+)%.*/,'$1');plus=Math.round(parseInt(percent)*parseInt(count))/100}else{plus=count}button=button?'<span onclick="lglike(\''+button.firstChild.href+'\',this);" class="LGlike">'+vote_singular+'</span>':'<span class="LGlike LGnovote">'+vote_singular+'</span>';var votes_text='<span class="LGlikecount">'+plus+' '+(plus==1?vote_singular:vote_plural)+'</span>';$(x[i].parentNode.parentNode).find('.corners-bottom').before('<div class="LGvote" style="margin:2px">'+button+votes_text+'</div>')}x.remove()});