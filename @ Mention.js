$(function(){if(!$.sceditor||/\/privmsg/.test(window.location.pathname))return;var storage=window.localStorage,s=document.createElement('SELECT'),amis;if(storage&&storage.faAmis&&storage.faAmisExp>+new Date-29*59*1000&&storage.faAmisUser==_userdata.username)s.innerHTML=storage.faAmis;else{$.get('/privmsg?mode=post',function(d){amis=$('select[name="userfriend"]',d)[0]||0;if(amis){amis.firstChild.innerHTML='நண்பரைத் தேர்ந்தெடு';s.innerHTML=amis.innerHTML}if(storage){storage.faAmis=amis?amis.innerHTML:0;storage.faAmisUser=_userdata.username;storage.faAmisExp=+new Date}})}$.sceditor.command.set('mention',{dropDown:function(editor,caller,callback){var a=document.createElement('DIV'),b=document.createElement('INPUT'),c=document.createElement('INPUT');b.type='button';b.value='நுழைக்க';b.className='button';c.type='text';c.id='fa-mention';a.innerHTML='<div><label for="fa-mention">உறுப்பினர்:</label></div>'+(s.innerHTML?'<div><label>நண்பரைக் குறிப்பிடவும்:</label></div>':'')+'<div></div>';a.firstChild.appendChild(c);a.lastChild.appendChild(b);if(s.innerHTML!=0){s.value='';a.getElementsByTagName('DIV')[1].appendChild(s);s.onchange=function(){c.value=s.value}}b.onclick=function(){c.value&&callback(c.value);editor.closeDropDown(true)};editor.createDropDown(caller,'insertmention',a)},exec:function(c){mention(c,this)},txtExec:function(c){mention(c,this)},tooltip:'உறுப்பினரைக் குறிப்பிடுங்கள்'});toolbar=toolbar.replace(/quote,/,'mention,quote,');function mention(c,e){$.sceditor.command.get('mention').dropDown(e,c,function(pseudo){e.insertText('@"'+pseudo+'" ')})}});