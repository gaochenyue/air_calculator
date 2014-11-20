// JavaScript Document
Ext.namespace('math');
var clicktimes=0;
function setFocusToEntryBox()
       {
          var box=document.getElementById('entryBox_out');
          box.focus();//alert(box.tagName);
          box.value=box.value;
		  if(clicktimes==0){
          box.value='';
		  clicktimes=1;
		  }
       }

function setFocusToEntryBox1()
       {
          var box=document.getElementById('image');
          box.innerHTML="<img src=javascript/image/cursor.gif />";
		  setFocusToEntryBox()
       }
	   
//此函数暂时不用
function blurevent()
{
	var box=document.getElementById('image');
          box.innerHTML="";
}

function keyEvent()
       {
		   
                        var command=document.getElementById('commandContainer_out');
                        var text=document.getElementById('entryBox_out');
                        var prompt1=document.getElementById('commandPrompt_out');
                        var key=0;
						str1=text.value;
                        document.onkeyup = function(e){  if(math_active==0){
	                                                         if(e==null){
	                                                               key=event.keyCode;
		                                                      }else{
		                                                              key=e.which;
		                                                      }
		                                                     switch(key)
		                                                     {
		                                                        case 13:
																if(text.value!=""){
			                                                    var str_return=calculate('entryBox_out','commandContainer_out');
			                                                    //式子显示处理
		                                                        command.innerHTML='';
		                                                        prompt1.innerHTML+="amath`"+text.value+'<br><br>'+'&nbsp;&nbsp;ans=<br><br>'; //alert(prompt1.innerHTML);
			                                                    prompt1.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"amath`"+str_return+'<br><br>'+'AC:\\\>&nbsp;';
			                                                    //代码显示处理
			                                                     var gram_now=document.getElementById('grammar_now');
		                                                        var gram_last=document.getElementById('grammar_last');
		                                                         gram_last.innerHTML+=text.value+'<br><br>'+'&nbsp;&nbsp;ans=<br><br>';
		                                                           gram_last.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+str_return+'<br><br>'+'AC:\\\>&nbsp;';
		                                                         gram_now.innerHTML="";
			   
		                                                         var cmd=encodeURIComponent(text.value);
			                                                     if(cmd == "cls"){
                                                                          prompt1.innerHTML='AC:\\\>&nbsp;';
                                                                   }
		                                                           //sendMessages(cmd);
			                                                      AMprocessNode(document.getElementById('out'));
																  //document.getElementById('panel_out').scroll(0,500);
			                                                      text.value="";
																}
		                                                           setFocusToEntryBox();
		                                                           break;    
		                                                           default :
			                                                       //式子显示处理
		                                                          command.innerHTML="amath`"+text.value;//alert(command.innerHTML);
			                                                      AMprocessNode(document.getElementById('out'));
			                                                      //代码显示处理
			                                                      var gram_now=document.getElementById('grammar_now');
			                                                      gram_now.innerHTML=document.getElementById('entryBox_out').value;
		                                                            break;
		                                                          }
																  }else{
																	  
			                                                        document.getElementById('entryBox_out').value="";
		                                                          }
                                                           }
		   
	   }


	   