(function(){'DEVELOPED BY ANGE TUTEUR';'NO DISTRIBUTION WITHOUT CONSENT OF THE AUTHOR';'ORIGIN : http://fmdesign.forumotion.com/t399-display-the-user-avatar-before-mentions#3207';window.faMentionAvatar={position:0,cacheTime:1*60*60*1000,mentions:null,index:-1,getter:function(){var mention=faMentionAvatar.mentions[++faMentionAvatar.index],storage=window.localStorage,id;if(mention){id=mention.href.replace(/.*?\/u/,'');if(storage&&storage['mentionAvatar_'+id]&&storage['mentionAvatar_'+id+'_exp']>+new Date-faMentionAvatar.cacheTime){var avatar=document.createElement('IMG');avatar.className+=' mention-ava';avatar.src=storage['mentionAvatar_'+id];faMentionAvatar.position?mention.appendChild(avatar):mention.insertBefore(avatar,mention.firstChild);faMentionAvatar.getter()}else{$.get('/ajax/index.php?f=m&user_id='+id,function(d){var avatar=$('.tooltip-content > img',d)[0];if(avatar){faMentionAvatar.position?mention.appendChild(avatar):mention.insertBefore(avatar,mention.firstChild);if(storage){storage['mentionAvatar_'+id]=avatar.src;storage['mentionAvatar_'+id+'_exp']=+new Date}}faMentionAvatar.getter()})}}}};document.write('<style type="text/css">.mentiontag img { height:20px; width:20px; vertical-align:middle; border-radius:100px; background:#FFF; box-shadow:0px 1px 1px rgba(0, 0, 0, 0.3), 0px -0px 1px rgba(0, 0, 0, 0.3); margin:1px 3px; padding:1px; }</style>');$(function(){faMentionAvatar.mentions=$('.mentiontag');faMentionAvatar.getter()})}());