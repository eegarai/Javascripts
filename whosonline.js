$(function(){if(_userdata.tpl_mobile)return;var text={onLast:'இன்று ஈகரையில் இணைந்திருந்தவர்கள்',onNow:'நிகழ்நிலை உறுப்பினர்கள் '};var newTxt=$('#i_whosonline + p').html().replace(/Members connected during last 99 hours/,text["onLast"]).replace(/Registered Users/,text["onNow"]);$('#i_whosonline + p').html(newTxt)});