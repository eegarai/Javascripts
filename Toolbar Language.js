function changeToolbar(word,replacement){for(var name in word){document.getElementById('fa_menulist').innerHTML=document.getElementById('fa_menulist').innerHTML.replace(RegExp(name,'g'),word[name])}}$(window).load(function(){changeToolbar({'My private messages':'தனிமடல்','Welcome':'நல்வரவு','View profile':'சுயவிவரம்','Edit profile':'சுயவிவரத்தை திருத்து','My topics':'என் இடுகைகள்','My posts':'என் பின்னூட்டங்கள்','Watched topics':'பார்த்த தலைப்புகள்','Administration Panel':'அட்மின் பேனல்','Log out':'வெளியேறுக','Log in':'புகுபதிகை','Register':'','Notifications':'அறிவிப்புகள்','PMs':'தனிமடல்கள்','Reputation':'மதிப்பீடு','Share':'பகிர்க','Posts':'பதிவுகள்'})});$(window).load(function(){document.getElementById('fa_search').getElementsByTagName('input')[0].setAttribute('placeholder','ஈகரையில் தேடுங்கள்')});function changeToolbar(word,replacement){for(var name in word){document.getElementById('fa_toolbar').innerHTML=document.getElementById('fa_toolbar').innerHTML.replace(RegExp(name,'g'),word[name])}}$(window).load(function(){changeToolbar({'welcome ':'நல்வரவு ','Log in':'உள்நுழைக','Register':'பதிவுசெய்க','Notifications':'அறிவிப்புகள்','Share':'பகிர்க'})});