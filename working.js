String.prototype.sliceReplace=function(start,end,repl){return this.substring(0,start)+repl+this.substring(end)}var app=angular.module('myApp',[]);app.controller('customersCtrl',function($scope,$http,$sce){$scope.suggestions=[];$scope.currentSuggestions=[];$scope.engToTamilResult=[];$scope.inputText='';$scope.lastWord='';$scope.getGoogle=function(word){if(!$scope.suggestions[word]){$http.get("https://inputtools.google.com/request?text="+word+"&itc=ta-t-i0-und&num=13&cp=0&cs=0&ie=utf-8&oe=utf-8&app=demopage").success(function(response){var myresponse=(angular.fromJson(response));if(myresponse[0]=='SUCCESS'){var mydata=myresponse[1];var mydataWrap=mydata[0];var question=mydataWrap[0];var answers_array=mydataWrap[1];$scope.suggestions[word]=answers_array;$scope.currentSuggestions=answers_array}})}}$scope.proccessWord=function(word){word=word.trim();if(!$scope.suggestions[word]){$scope.getGoogle(word,false)}else{$scope.currentSuggestions=$scope.suggestions[word]}}$scope.getWord=function(){var boxTextOriginal=jQuery('.sceditor-container iframe, .sceditor-container textarea','.sceditor-container iframe, .sceditor-container textarea').val();var boxText=jQuery('.sceditor-container iframe, .sceditor-container textarea').val().trim();var boxTextArray=boxText.split(" ");for(var i=0;i<boxTextArray.length;i++){var word=boxTextArray[i];if(word!=''){$scope.proccessWord(word.trim())}}var lastChar=boxTextOriginal.charAt(parseInt(boxTextOriginal.length)-1);if(parseInt(boxText.length)>=2&&lastChar==" "||lastChar==","||lastChar=="."||lastChar=="-"||lastChar=="_"||lastChar=="!"||lastChar=="@"||lastChar=="#"||lastChar=="&"||lastChar=="("||lastChar==")"||lastChar=="/"||lastChar=="?"){$scope.setWord()}}$scope.setSelectdWord=function(selectedWord){var tamilWords='';var tamilWord='';var boxText=jQuery('.sceditor-container iframe, .sceditor-container textarea').val().trim();var boxTextArray=boxText.split(" ");var lastlen=boxTextArray.length-1;for(var j=0;j<boxTextArray.length;j++){var word=boxTextArray[j];if(j==lastlen){tamilWord=selectedWord;if(tamilWords==''){tamilWords=selectedWord}else{tamilWords+=' '+selectedWord}$scope.suggestions[word]=[selectedWord]}else{tamilWord=word;if(word!=''){if($scope.suggestions[word]){tamilWord=$scope.suggestions[word][0];if(tamilWords==''){tamilWords=tamilWord}else{tamilWords+=' '+tamilWord}}else{$scope.getGoogle(word);if($scope.suggestions[word]){tamilWord=$scope.suggestions[word][0]}if(tamilWords==''){tamilWords=tamilWord}else{tamilWords+=' '+tamilWord}}}}$scope.suggestions[tamilWord]=$scope.suggestions[word]}jQuery(sceditor-textarea').val(tamilWords+'');jQuery('.sceditor-container iframe, .sceditor-container textarea').focus()}$scope.setWord=function(){var tamilWords='';var tamilWord='';var boxText=jQuery('.sceditor-container iframe, .sceditor-container textarea').val().trim();var boxTextArray=boxText.split(" ");for(var i=0;i<boxTextArray.length;i++){var word=boxTextArray[i];tamilWord=word;if(word!=''){if($scope.suggestions[word]){tamilWord=$scope.suggestions[word][0];if(tamilWords==''){tamilWords=tamilWord}else{tamilWords+=' '+tamilWord}}else{$scope.getGoogle(word);if($scope.suggestions[word]){tamilWord=$scope.suggestions[word][0]}if(tamilWords==''){tamilWords=tamilWord}else{tamilWords+=' '+tamilWord}}}$scope.suggestions[tamilWord]=$scope.suggestions[word]}jQuery('.sceditor-container iframe, .sceditor-container textarea').val(tamilWords+' ');jQuery('.sceditor-container iframe, .sceditor-container textarea').focus()}$scope.highlightText=function(str,htext){return str.replace(htext,'<span class="highlighted">'+htext+'</span>')}$scope.cleanUrlJs=function(str){if(!arguments.callee.re){arguments.callee.re=[/[^a-z0-9]+/ig,/^-+|-+$/g]}return str.toLowerCase().replace(arguments.callee.re[0],'-').replace(arguments.callee.re[1],'')}$scope.engToTamil=function(){$scope.engToTamilZeroResult=0;jQuery('.mod_eng_tamil #transResultLoader_1').show();var word=jQuery('#tranInputArea_1').val().trim();if(word==''){$scope.engToTamilResult=[];jQuery('.mod_eng_tamil .tranResult').slideUp('slow')jQuery('.mod_eng_tamil #transResultLoader_1').hide();return false}var wordIndex=word.charAt(0);var wordIndex2=word.charAt(0)+word.charAt(1);var element=document.querySelector('meta[name="postKey"]');var postKey=element&&element.getAttribute("content");var crntDate=new Date();var crntDateTime=crntDate.getTime();var postString='quickaccess=1&postKey='+postKey+'&searchkey='+word+'&wordIndex='+wordIndex+'&wordIndex2='+wordIndex2+'&timestamp='+crntDateTime;$http({url:'english-to-tamil.html',method:"POST",headers:{'Content-Type':'application/x-www-form-urlencoded'},data:postString}).then(function(result){var response=result.data;jQuery('.mod_eng_tamil #transResultLoader_1').hide();if(response=='zero'){$scope.engToTamilZeroResult=word;$scope.engToTamilResult=[]}else if(response!=''){var responseArray=response.split('||');var ajaxTimestamp=responseArray[0];var filteredResponse=responseArray[1];if(ajaxTimestamp<$scope.timestamp){return false}$scope.timestamp=ajaxTimestamp;jQuery('.mod_eng_tamil .tranResult').slideDown('slow');var tamilResponse=(angular.fromJson(filteredResponse));$scope.engToTamilResult=[];angular.forEach(tamilResponse,function(value){var engWord=value.english_word;value.english_word_raw=engWord;if(engWord.length>=15){engWord=engWord.slice(0,15)+' ...'}engWord=$scope.highlightText(engWord,word);value.english_word_link=$scope.cleanUrlJs(value.english_word);value.english_word=$sce.trustAsHtml(engWord);var tamilWord=value.tamil_words;tamilWord=tamilWord.replace(new RegExp(",","g"),", ");value.tamil_words_raw=tamilWord;if(tamilWord.length>=15){tamilWord=tamilWord.slice(0,15)+' ...'}value.tamil_words=tamilWord;$scope.engToTamilResult.push(value)})}else{$scope.engToTamilResult=[];jQuery('.mod_eng_tamil .tranResult').slideUp('slow')}})}});