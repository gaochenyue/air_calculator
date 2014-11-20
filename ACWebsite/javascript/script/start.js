Ext.namespace('math');
Ext.BLANK_IMAGE_URL = 'javascript/ext-2.2/resources/images/default/s.gif';

Ext.app.BookLoader2 = Ext.extend(Ext.ux.XmlTreeLoader2, {
    processAttributes : function(attr){
        if(attr.name&&!attr.input){ 
            attr.text = attr.name;
           
            attr.loaded = true;
           
        }
        else if(attr.input){ 
		if(attr.tip_1)
			
			attr.qtip="�������� : "+attr.text+"<br>"+"���ø�ʽ : "+attr.tip_1+"<br>"+"����˵�� : "+attr.tip_2+"<br>"+"��&nbsp;&nbsp;��&nbsp;&nbsp;ֵ : "+attr.tip_3+"<br>"+"ʾ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;�� : "+attr.tip_4;
            attr.text = attr.name ;
          
			attr.draggable=true;
			
            attr.iconCls = 'func';
           
            attr.leaf = true;
        }
    }
});

var customroot=new Ext.tree.AsyncTreeNode(
															   {
																   text:"������������",
																   id:'custom_tree',
																   expanded: true,
																   loader:new Ext.app.BookLoader2({
	                                                                        dataUrl:'shared/shared.asp'
	                                                                })
															   }
															   );

Ext.app.BookLoader1 = Ext.extend(Ext.ux.XmlTreeLoader1, {
    processAttributes : function(attr){
        if(attr.name&&!attr.input){ 
            attr.text = attr.name;
            
            attr.loaded = true;
           
        }
        else if(attr.input){ 
			attr.draggable=true;
			if(attr.tip_1)
			
			attr.qtip="�������� : "+attr.text+"<br>"+"���ø�ʽ : "+attr.tip_1+"<br>"+"����˵�� : "+attr.tip_2+"<br>"+"��&nbsp;&nbsp;��&nbsp;&nbsp;ֵ : "+attr.tip_3+"<br>"+"ʾ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;�� : "+attr.tip_4;
            
            attr.iconCls = 'func';
            attr.text = attr.name ;
          
            attr.leaf = true;
        }
    }
});

var private=new Ext.tree.AsyncTreeNode(
									 {
										 text:"˽�к���������",
										 loader:new Ext.app.BookLoader1({
	                                                                           dataUrl:user_path
	                                                              }),
										 expanded :true
										 });
var private2=new Ext.tree.AsyncTreeNode(
									 {
										 text:"˽�к���������",
										 loader:new Ext.app.BookLoader1({
	                                                                           dataUrl:user_path
	                                                              }),
										 expanded :true
										 });				        	   
Ext.app.BookLoader = Ext.extend(Ext.ux.XmlTreeLoader, {
    processAttributes : function(attr){
        if(attr.name&&!attr.input){
            attr.text = attr.title;
            attr.loaded = true;
           
        }
        else if(attr.input){ 
			attr.draggable=true;
			if(attr.tip_1)
			
			attr.qtip="�������� : "+attr.text+"<br>"+"���ø�ʽ : "+attr.tip_1+"<br>"+"����˵�� : "+attr.tip_2+"<br>"+"��&nbsp;&nbsp;��&nbsp;&nbsp;ֵ : "+attr.tip_3+"<br>"+"ʾ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;�� : "+attr.tip_4;
									   
			attr.text = attr.name ;
            attr.iconCls = 'func';
            attr.leaf = true;
        }
    }
});

function start_textnode()  //�����ڷ������BUTTON������ʾ��Ϣ����ֹ���հ�
{
	var str="��ӭʹ�ã�����վΪ���ṩ���л�������ѧ���š���ֵ�ȵļ��㡣�����������黭ͼ���ܣ��������Լ�����Ը����д�Լ��ĺ����⡭��(����ť��ʾ�����������Ȱ�װMathPlayer)";
	var str1="��ܰ��ʾ������ʱ��ִ٣�Ϊ���������ʽ�ӵõ���ȷ�Ľ�����������ձ�վʽ������������롭��лл������";
	var temp=document.getElementById('active_area');
	var n=temp.childNodes.length;
	 for(var j=n;j>0;j--)
	 {
		 temp.removeChild(temp.lastChild);
	 }
	temp.appendChild(document.createElement('hr'));
	temp.appendChild(document.createElement('br'));
	
	temp.appendChild(document.createTextNode(str));
	temp.appendChild(document.createElement('br'));
	temp.appendChild(document.createElement('br'));
	temp.appendChild(document.createElement('hr'));
	temp.appendChild(document.createElement('br'));
	
	temp.appendChild(document.createTextNode(str1));
}

function start_textnode1()  //�����ڷ������BUTTON������ʾ��Ϣ����ֹ���հ�
{
	var str="��ӭʹ�ã�����վΪ���ṩ���л�������ѧ���š���ֵ�ȵļ��㡣�����������黭ͼ���ܣ��������Լ�����Ը����д�Լ��ĺ����⡭��(����ť��ʾ�����������Ȱ�װMathPlayer)";
	var str1="��ܰ��ʾ������ʱ��ִ٣���ģ���ݲ�֧�����������룬���������ť���в�������лл������";
	var temp=document.getElementById('active_area');
	var n=temp.childNodes.length;
	 for(var j=n;j>0;j--)
	 {
		 temp.removeChild(temp.lastChild);
	 }
	temp.appendChild(document.createElement('hr'));
	temp.appendChild(document.createElement('br'));
	
	temp.appendChild(document.createTextNode(str));
	temp.appendChild(document.createElement('br'));
	temp.appendChild(document.createElement('br'));
	temp.appendChild(document.createElement('hr'));
	temp.appendChild(document.createElement('br'));
	
	temp.appendChild(document.createTextNode(str1));
}



//����ִ�����
  
		
function start()
 {   myMask.hide();
	 Ext.QuickTips.init();
	 var root=new Ext.tree.TreeNode({
		  id:"root",
		  text:"���ĸ�"
		  });
	 root.appendChild( new Ext.tree.TreeNode({
		   id:"c1",
		   text:"�ӽڵ�"
		 })
	  );
	var bodywidth=document.body.clientWidth;
var view=new Ext.Viewport({
	 enableTabScroll:true,
	 id:'vp',
	 renderTo:'userui',
	 autoShow:true,
	 layout:"border",
	 height: document.body.clientHeight,
	 width:800,
	 //autoWidth:true,
	 //autoHeight:true,
	 items:
	 [
	  {
		  title:"Welcome",
		  id:'north_panel',
		  region:"north",//split: true,<h1 align='center'>Air Calculator</h1>
		  height:80,
		  html:"<image src='javascript/image/log_bg.png'></image>"
		},
		{
			xtype:"tabpanel",
			//tabPosition:"bottom",
			split: true,
			region:"center",
			activeTab:0,
			width:400,
			height:250,
			plain:true,
			//collapsible:true,
			defaults:{autoScroll: true},
			items:
			[
			 //���ż���ģ��
			 {
			 xtype:"panel",
			 title:"���ż���",
			 layout:"border",
			 items:
			 [
			  {
				  xtype:"panel",
				  title:"�������",
				  layout:"form",
				  //autoScroll:true,
				  collapsible:true,
				  region:"west",
				  split: true,
				  //layout:"border",
				  width:370,
				  minWidth:360,
				  //height:500,
				  items:
				  [{xtype:"panel",
				   
				   height:258,
				  //region:"center",
				   items:[
				   {
					      xtype:"panel",
						 // region:"center",
				          layout:"accordion",
				          layoutConfig:{
				     	  //animate:true,
				    	  sequence :true,
				    	  //activeOnTop :true,
				     	  collapseFirst :true,
				    	  fill:false
				          },
				         items:[{
					           xtype:"panel",
							   id:'common',
                               title:"��ͨ����",
							   frame:true,
							   listeners:
										  {
											  "collapse":function(e){
												                              Ext.getCmp('maths').expand(true);math_active=1;start_textnode1();
																			  },
												"expand":function(q){
													                        button_cls1();math_active=0;
																
												                        }  
											},
											
                               //titleCollapse :true,
                               collapsible:true,
				                 //split: true,
							      //collapsed :true,
                                  autoScroll:true,
                               //width:300,
                               height:230,
                        
                               autoWidth:true,
                               
                                html:"<button id='button_zero' onclick=button_append('0')> <font size=3>"+zero+"</font></button>&nbsp"+"<button id='button_one' onclick=button_append('1')> <font size=3>"+one+"</font></button>&nbsp"+"<button id='button_two' onclick=button_append('2')> <font size=3>"+two+"</font></button>&nbsp"+"<button id='button_three' onclick=button_append('3')> <font size=3>"+three+"</font></button>&nbsp"+"<button id='button_four' onclick=button_append('4')> <font size=3>"+four+"</font></button>&nbsp"+"<button id='button_five' onclick=button_append('5')> <font size=3>"+five+"</font></button>&nbsp"+"<button id='button_six' onclick=button_append('6')> <font size=3>"+six+"</font></button>&nbsp"+"<button id='button_seven' onclick=button_append('7')> <font size=3>"+seven+"</font></button>&nbsp"+"<button id='button_eight' onclick=button_append('8')> <font size=3>"+eight+"</font></button>&nbsp"+"<button id='button_nine' onclick=button_append('9')> <font size=3>"+nine+"</font></button>&nbsp"+"<button id='button_dot' onclick=button_append('.')> <font size=6>"+dot+"</font></button>&nbsp"+"<button id='button_plus' onclick=button_append('+')> <font size=3>"+plus+"</font></button>&nbsp"+"<button id='button_minus' onclick=button_append('-')> <font size=5>"+minus+"</font></button>&nbsp"+"<button id='button_multiply' onclick=button_append('*')> <font size=5>"+multiply+"</font></button>&nbsp"+"<button id='button_divide' onclick=button_append('/')> <font size=5>"+divide+"</font></button>&nbsp"+"<button id='button_equal' onclick=button_calculate()> <font size=3>"+equal+"</font></button>&nbsp"+"<button id='button_leftbracket' onclick=button_append('(')> <font size=4>"+leftbracket+"</font></button>&nbsp"+"<button id='button_rightbracket' onclick=button_append(')')> <font size=4>"+rightbracket+"</font></button>&nbsp"+"<button id='button_pai' onclick=button_append('pi')> <font size=4>"+pai+"</font></button>&nbsp"+"<button id='button_back' onclick=button_back()> <font size=3 color=#0000ff>"+"back"+"</font></button>&nbsp"+"<button id='button_clc1' onclick=button_cls()> <font size=3 color=#0000ff>"+"cls"+"</font></button>&nbsp<hr>"+"<button id='button_sinx' onclick=button_append('sin(')> <font size=4>"+sinx+"</font></button>&nbsp"+"<button id='button_cosx' onclick=button_append('cos(')> <font size=4>"+cosx+"</font></button>&nbsp"+"<button id='button_tanx' onclick=button_append('tan(')> <font size=4>"+tanx+"</font></button>&nbsp"+"<button id='button_cotx' onclick=button_append('cot(')> <font size=4>"+cotx+"</font></button>&nbsp"+"<button id='button_sinx1' onclick=button_append('sin^-1(')> <font size=4>"+sinx1+"</font></button>&nbsp"+"<button id='button_cosx1' onclick=button_append('cos^-1(')> <font size=4>"+cosx1+"</font></button>&nbsp"+"<button id='button_tanx1' onclick=button_append('tan^-1(')> <font size=4>"+tanx1+"</font></button>&nbsp"+"<button id='button_cotx1' onclick=button_append('cot^-1(')> <font size=4>"+cotx1+"</font></button>&nbsp"+"<button id='button_sinh' onclick=button_append('sinh(')> <font size=4>"+sinhx+"</font></button>&nbsp"+"<button id='button_cosh' onclick=button_append('cosh(')> <font size=4>"+coshx+"</font></button>&nbsp"+"<button id='button_tanh' onclick=button_append('tanh(')> <font size=4>"+tanhx+"</font></button>&nbsp"+"<button id='button_coth' onclick=button_append('coth(')> <font size=4>"+cothx+"</font></button>&nbsp"+"<button id='button_sinh1' onclick=button_append('sinh^-1(')> <font size=4>"+sinh1+"</font></button>&nbsp"+"<button id='button_cosh1' onclick=button_append('cosh^-1(')> <font size=4>"+cosh1+"</font></button>&nbsp"+"<button id='button_tanh1' onclick=button_append('tanh^-1(')> <font size=4>"+tanh1+"</font></button>&nbsp"+"<button id='button_coth1' onclick=button_append('coth^-1(')> <font size=4>"+coth1+"</font></button>&nbsp"+"<button id='button_logx' onclick=button_append('log(')> <font size=4>"+logx+"</font></button>&nbsp"+"<button id='button_lnx' onclick=button_append('ln(')> <font size=4>"+lnx+"</font></button>&nbsp"+"<button id='button_expx' onclick=button_append('e')> <font size=5>"+expx+"</font></button>&nbsp"+"<button id='button_sqrtx' onclick=button_append('sqrt(')> <font size=4>"+sqrtx+"</font></button>&nbsp"+"<button id='button_xy' onclick=button_append('^')> <font size=4>"+xy+"</font></button>&nbsp"+"<button id='button_jiecheng' onclick=button_append('!')> <font size=4>"+jiecheng+"</font></button>&nbsp"+"<button id='button_absx' onclick=button_append('abs(')> <font size=4>"+absx+"</font></button>&nbsp"
                             },
				   
                            {
                                   xtype:"panel",
								   id:'maths',
                                  title:"�ߵ���ѧ",
								  listeners:
											 {
									           "collapse":function(e){
												                              Ext.getCmp('common').expand(true);
																			  },
								                 "expand":function(q){
													                        math_active=1;
																
												                        }  
											},
								  frame:true,
								  //titleCollapse :true,
                                  collapsible:true,
				                 //split: true,
							      collapsed :true,
                                  autoScroll:true,
                                   //width:300,
                                   height:230,
                                   autoWidth:true,
                                  
								   html:"<button id='button_clc2' onclick=button_cls()> <font size=2 color=#0000ff>"+"cls"+"</font></button>&nbsp"+"<button id='button_integrate' onclick=amath_integrate(),button_append('int(f(x))dx')> <font size=2>"+integrate+"</font></button>&nbsp"+"<button id='button_integrate_a' onclick=amath_integrate_a(),button_append('int_a^b(f(x))dx')> <font size=2>"+integrate_a+"</font></button>&nbsp"+"<button id='button_differential' onclick=amath_differential(),button_append('d(f(x))/dx')> <font size=2>"+differential+"</font></button>&nbsp"+"<button id='button_differential_x' onclick=amath_differential_x(),button_append('d(f(x))/dx|x=x_0') > <font size=2>"+differential_x+"</font></button>&nbsp"+"<button id='button_limit' onclick=amath_limit(),button_append('lim_(xtoa)(f(x))')> <font size=2>"+limit+"</font></button>&nbsp"+"<button id='button_limit_p'  onclick=amath_limit_p(),button_append('lim_(xtoa^+)(f(x))')> <font size=2>"+limit_p+"</font></button>&nbsp"+"<button id='button_limit_m' onclick=amath_limit_m(),button_append('lim_(xtoa^-)(f(x))')> <font size=2>"+limit_m+"</font></button>&nbsp"+"<button id='button_solve' onclick=amath_solve(),button_append('solve(f(x)=0)')> <font size=2>"+solve+"</font></button>&nbsp"+"<button id='button_taylor' onclick=amath_taylor(),button_append('taylor(f(x))') > <font size=2>"+taylor+"</font></button>&nbsp"+"<button id='button_laplace' onclick=amath_laplace(),button_append('laplace(f(x))')> <font size=2>"+laplace+"</font></button>&nbsp"+"<button id='button_expand'  onclick=amath_expand(),button_append('expand(f(x))') > <font size=2>"+expand+"</font></button>&nbsp"+"<button id='button_combine' onclick=amath_combine(),button_append('combine(f(x))') > <font size=2>"+combine+"</font></button>&nbsp"+"<button id='button_factor'  onclick=amath_factor(),button_append('factor(f(x))') > <font size=2>"+factor+"</font></button>&nbsp"+"<button id='button_factorial' onclick=amath_factorial(),button_append('(f(x))!')> <font size=2>"+factorialx+"</font></button>&nbsp"+"<button id='button_sum' onclick=amath_sum(),button_append('sum_(i=a)^b(f(i))')> <font size=2>"+sum+"</font></button>&nbsp"+"<button id='button_prod' onclick=amath_prod(),button_append('prod_(i=a)^b(f(i))')> <font size=2>"+prod+"</font></button>&nbsp"+"<button id='button_clc2' onclick=button_cls()> <font size=2 color=#0000ff>"+"cls"+"</font></button>&nbsp"
                               }]
				   }
							   ]
				        },{xtype:"panel",
						
						    height:800,
							//layout:"accordion",
								items:[{
									xtype:"panel",
									title:"��ʾ",
									 styles:"font-size:30px",
									//region:"south",
									//title:"eefddff",
								  //titleCollapse :true,
                                  //collapsible:true,
				                  split: true,
							      //collapsed :true,
                                  autoscroll:true,
								  frame:true,
                                   width:300,
                                   height:300,
                                   autoWidth:true,
                                  
								   html:"<div id='active_area'></div>"
								}]
						}
				   ]
			  },
			  {
				  xtype:"panel",
				  id:'tab0_center',
				  title:"�������",
				  layout:"border",
				  region:"center",
				  //items:txtarea,
				  autoScroll:true,
				  //collapsible:true,
				  items:
				  [
				   {
						  xtype:"panel",
						  //title:"panel4",
						  //frame:true,
						  region:"center",
						  
							   height:200,
                               autoscroll:true,
							   items:
							   [
								    {
										xtype:"panel",
										id:'panel_out',
										autoWidth:true,
										autoScroll:true,
										height:284,
										//html:"<font size=4>��Ҫ�����ʽ�ӣ�</font><br>>><font size=5><div id='out'></div></font>"
										html:"<table cellpadding=0 onClick=setFocusToEntryBox1() cellspacing=0 border=0 height=100% width=100%><tr><td height=100% width=100%  valign=top><div style=width:750px><div id='outputContainer'><font size=2><p>Welcome to Web Air Calculator</p><p>Version 1.00</p><p>��գ�AC:\\>cls</p></div></font><div id='out' style=position:relative><input type=text id='entryBox_out' onkeyup=keyEvent() /><br><span id='commandPrompt_out'></span><span id='commandContainer_out'></span><span id='image'></span></div></div></td></tr></table>"
									}
								]
						  //html:"<font size=4>��Ҫ�����ʽ�ӣ�</font><br>>><font size=5><div id='out'></div></font>"
					  },
				      {
						  xtype:"panel",
						  title:"ʽ�Ӵ���(���ɱ༭��",
						  listeners:{
							               "collapse":function(e1){
											                           Ext.getCmp('panel_out').setHeight(Ext.getCmp('tab0_center').getInnerHeight()-35);
										                           },
											"expand":function(q){
													                   Ext.getCmp ('panel_out').setHeight(Ext.getCmp('tab0_center').getInnerHeight()-this.getInnerHeight()-35);Ext.getCmp ('panel_in').setHeight(this.getInnerHeight());
												                  } ,
											"resize":function(s){//Ext.getCmp('tab0_center').syncSize();
												                        Ext.getCmp ('panel_out').setHeight(Ext.getCmp('tab0_center').getInnerHeight()-this.getInnerHeight()-35);Ext.getCmp ('panel_in').setHeight(this.getInnerHeight());
											                      }
						             },
						  layout:"form",
						  region:"south",
						  collapsible:true,
						  titleCollapse :true,
				               split: true,
							   //frame:true,
							   height:180,
							   //collapsed :true,
                               autoscroll:true,
							   
							   items:
							   [
								      {
										xtype:"panel",
										id:'panel_in',
										tbar:
										[
										      {
												  text:"�����¼",
												  listeners:{
													             "click":function(e){
																	                       var gram_now=document.getElementById('grammar_now');
	                                                                                       var gram_last=document.getElementById('grammar_last');
	                                                                                       gram_last.innerHTML='AC:\\\>&nbsp;';
	                                                                                       gram_now.innerHTML="";
																                      }
												            }
											  },
											  {xtype:"tbseparator"}
										 ],
										autoScroll:true,
										height:150,
										html:"<div id='grammar'><span id='grammar_last'></span><span id='grammar_now'></span></div>"
									}
								]
						  //html:"<div style=position:relative><span id='commandPrompt'></span><span id='commandContainer'></span><img src=cursor.gif  /><input type=text id='entryBox' onkeyup=keyEvent() /></div>"
					  }
				   ],
				 
				  tbar:
				  [ //{xtype:"tbfill"},
				   { //pressed:true,
				       width:200,
					   text: '�ļ�'//iconCls: 'album-btn'
					 },
					 {xtype:"tbseparator"},
					 { //pressed:true,
					    text: '�༭'
					},
					{xtype:"tbseparator"},
					{//pressed:true, 
					    text:'�鿴'
					},
					{xtype:"tbseparator"},
					{
						text: '����'
					}
				  ]
				 }
			  ]
		 },
		 //��ֵ����ģ��
			   {
				   xtype:"panel",
				   layout:"border",//toggleCollapsehideCollapseTool=true
				   listeners:{
					              "activate":function(e){num_active=1;
									                        Ext.getCmp('history').expand(false);
															//gridload();
															
															if(document.getElementById('commandPrompt_text').innerHTML=="e")
															document.getElementById('commandPrompt_text').innerHTML = 'AC:\\\>&nbsp;';
															document.getElementById('entryBox_text').focus();
														  }
							},
                  title: '��ֵ����',
                 items:
                [
                   {
				  xtype:"panel",
				  title:"��ֵ����",
				  collapsible:true,
				  split: true,
				  layout:"form",
				  width:400,
				  height:500,
				  //maxWidth:500,
				  //autoScroll:true,
				  region:"west",
				  items:
				  [
				   {
					   xtype:"tabpanel",
					   id:'tab_shuzhi',
					   activeTab:0,
					   height:250,
					   //region:'center',
					   autoHeight:true,
					   autoWidth:true,
					   autoScroll:true,
					   tabPosition:'bottom',
					   items:
					   [
						   {
							   xtype:"treepanel",
							   title:"��ֵ���㹤����",
							   id:'tree',
							   useArrows :true,
							   //collapsible:true,
							   //collapsed:true,
							   //hideCollapseTool :true,
                               width:100,//draggable:true,
					           height:225,
							   frame:true,
							   containerScroll: true,
							   listeners:{
									"activate":function(tp){
										                
															var t=Ext.getCmp('tree').getRootNode();
															if(!t.findChild('text','˽�к���������'))
															 {
																 private.loader=new Ext.app.BookLoader1({
																				id:'num_tree_loader',
																				listeners:
																				{
																					"load":function(a,b,c)
																					{//alert('ff');
																						t.appendChild(private);
																					}
																				},
	                                                                           dataUrl:user_path
	                                                              });
																 t.appendChild(private);
															 }
															
														  },
									 "dblclick":function(node,e)
									           {//alert('ok');
											       tree_dbclick(node);
											   }
							},
							   //autoHeight:true,
                               autoScroll: true,
					           //rootVisible: false,
	                           root: new Ext.tree.AsyncTreeNode({text:"��ֵ���㹤����",id:'tt',expanded :true}),
				        	   loader: new Ext.app.BookLoader({
	                               dataUrl:'shared/shared.asp'
	                           }),
							  
                               autoWidth:true
						   },
						   {
							   
							  xtype:"panel",
							  id:'gridp',
							  collapsible:true,
							  collapsed:true,
							  listeners:{"activate":function(e){this.expand(false);}},
							   title:"�����б�",
							   layout:"form",
							   autoWidth:true,
							   //autoScroll:true,
							   width:500,
							   height:250,
							   items:new Ext.grid.GridPanel(
							  { 
							  //title:"dfdfd",
							  //border:true,
							 // stripeRows :true,
							  autoScroll:true,
							  //autoWidth:true,
							  sm :sm1,
							  id:'grid_var_panel',
							  //autoHeight:true,
							  height:199,
							  ds: varibles_store, 
							  cm: varibles_clo
							  }
							  ),
							   tbar:
							   [
								    {
										listeners:{
													"click":function(e)
													{
														var win=new Ext.Window({
																	   title:"��ӱ���",
																	   id:'win_add',
																	   constrain : true,
																	   resizable:false,
																	   //minButtonWidth :75,
																	   //minimizable :true,
																	   modal:true,
																	   width:370,
																	   height:400,
																	   autoHeight:true,
																	   autoShow:true,
																	   autoDestroy:true,
																	   autoScroll:true,
																	   //maskDisabled :false,
																	   //layout:"border",
																	   tbar:
																	   [
																		   {
																			   text:"���ļ�ֱ�ӵ���",
																			   listeners:
																			   {
																				   "click":function(e)
																				           {
																							   
																							   ReadFiles();
																						   }
																			   }
																		   },'-'
																		],
																	   items:
																	   [   
																		    {
																				title:" ",
																				xtype:'fieldset',
																				id:'add',
																				//region:"center",
																				//autoScroll:true,
																				labelWidth: 60,
																				defaultType: 'textfield',
																				autoHeight: true,
																				autoWidth:true,
																				
																				border: true,
																				items:
																				[
																				      {
																						  id:'add_var',
																						  width:250,
																						  height:30,
																						  autoScroll:true,
																						  fieldLabel: '������'
																					  },
																					  {
																						  id:'add_type',
																						  //inputType:'select',
																						  width:250,
																						  height:30,
																						  autoScroll:true,
																						  fieldLabel: '��������'
																					  },
																					  {
																						  id:'add_value',
																						  xtype:"textarea",
																						  autoScroll:true,
																						  width:250,
																						  height:100,
																						  fieldLabel: '����ֵ'
																						  
																					  }
																		
																				 ]
																			  }
																			  
																		],
																		buttonAlign:'center',
																	    buttons:
																		[
																		    {
																			   text:"ȷ��",
																			   listeners:{
																				              "click":function(e){
																													add_column();  
																													var var_add=Ext.getCmp('add_var').getValue();
                                                                                                                    var type_add=Ext.getCmp('add_type').getValue();
                                                                                                                    var value_add= Ext.getCmp('add_value').getValue();
	                                                                                                                if(var_add!=""&&type_add!=""&&value_add!=""){
																												     	win.close();
																													}
																												   }
																			              }
																		     },
																		    {
																			   text:"ȡ��",
																			   listeners:{
																				              "click":function(e){win.close();}
																			              }
																			 }
																		 ]
																	   });
														
														win.show();
													}
												},
										text:"��ӱ���"
									},
									{xtype:"tbseparator"},
									{
										listeners:{
													"click":function(e)
													{
														var sel=Ext.getCmp('grid_var_panel').getSelectionModel();
														var sels=sel.getSelections();
														var n=sel.getCount();
														if(n==0)
														{
															Ext.Msg.show
															(
															     {
																	 title:"��ʾ",
																	 msg:"��ѡ����Ҫɾ���ı���!",
																	 buttons:Ext.Msg.OK,
																	 icon:Ext.MessageBox.INFO
																 }
															 );
														}
														for(var i=0;i<n;i++)
														Ext.getCmp('grid_var_panel').getStore().remove(sels[i]);
													}
												},
										text:"ɾ������"
									},
									{xtype:"tbseparator"},
									{
										listeners:{
													"click":function(e)
													{
														var win=new Ext.Window({
																	   title:"�鿴����",
																	   constrain : true,
																	   resizable:false,
																	   //minButtonWidth :75,
																	   //minimizable :true,
																	   modal:true,
																	   width:370,
																	   height:400,
																	   autoHeight:true,
																	   autoShow:true,
																	   autoDestroy:true,
																	   autoScroll:true,
																	   //maskDisabled :false,
																	   //layout:"border",
																	   items:
																	   [   
																		    {
																				title:" ",
																				xtype:'fieldset',
																				//region:"center",
																				//autoScroll:true,
																				labelWidth: 60,
																				defaultType: 'textfield',
																				autoHeight: true,
																				autoWidth:true,
																				
																				border: true,
																				items:
																				[
																				      {
																						  id:'see_var',
																						  readOnly :true,
																						  width:250,
																						  height:30,
																						  autoScroll:true,
																						  fieldLabel: '������'
																					  },
																					  {
																						  id:'see_type',
																						  readOnly :true,
																						  width:250,
																						  height:30,
																						  autoScroll:true,
																						  fieldLabel: '��������'
																					  },
																					  {
																						  id:'see_value',
																						  readOnly :true,
																						  xtype:"textarea",
																						  autoScroll:true,
																						  width:250,
																						  height:100,
																						  fieldLabel: '����ֵ'
																						  
																					  }
																		
																				 ]
																			  }
																			  
																		],
																		buttonAlign:'center',
																	    buttons:
																		[
																		    {
																			   text:"ȷ��",
																			   listeners:{"click":function(e){win.close()}}
																		     }
																		 ]
																	   });
														var sel=Ext.getCmp('grid_var_panel').getSelectionModel().getSelected();
														if(sel)
														{
															Ext.getCmp('see_var').setValue(sel.data.name);
															Ext.getCmp('see_type').setValue(sel.data.type);
															Ext.getCmp('see_value').setValue(sel.data.value);
															win.show();
														}
														else
														{
															Ext.Msg.show
															(
															     {
																	 title:"��ʾ",
																	 msg:"��ѡ����Ҫ�鿴�ı���!",
																	 buttons:Ext.Msg.OK,
																	 icon:Ext.MessageBox.INFO
																 }
															 );
															//win.close();
														}
														
														
														
														
													}
												},
										text:"�鿴����"
									},
									'-',
									{
										text:"�ϴ�������",
										listeners:
										{
											"click":function(e)
											        {
														var sel=Ext.getCmp('grid_var_panel').getSelectionModel();
														//alert(sel.getCount());
														var sels=sel.getSelections();
														var n=sel.getCount();
														//alert(sels[0].data.name);
														for(var i=0;i<n;i++)
														{
															if(i<n-1)
															varlist+=sels[i].data.name+"|"+sels[i].data.type+"|"+sels[i].data.value+"%26";
															else
															varlist+=sels[i].data.name+"|"+sels[i].data.type+"|"+sels[i].data.value;
														}
														//alert(varlist);
														if(varlist!="")
														ACUpdateVar(varlist);
														else
														{
															Ext.Msg.show
															(
															     {
																	 title:"��ʾ",
																	 msg:"��ѡ����Ҫ�ϴ��ı���!",
																	 buttons:Ext.Msg.OK,
																	 icon:Ext.MessageBox.INFO
																 }
															 );
														}
														varlist="";
													}
										}
									},'-'
								]
								
						
							  
						   }
						   
						   
						]
					   
				   },
				   {
                       xtype:"panel",
					  //region:'south',
					   title:" ��ʷ��¼",
					   layout:"form",
					   split:true,
					   id:'history',
					   tbar:
					   [
						     {
								 text:"�����¼",
								 listeners:
								 {
									 "click":function(e)
									         {
												 var sel=Ext.getCmp('grid_history_panel').getSelectionModel();
												 var sels=sel.getSelections();
												 var n=sel.getCount();
												 if(n==0)
												 {
													 Ext.Msg.show
															(
															     {
																	 title:"��ʾ",
																	 msg:"��ѡ����Ҫ�������ʷ��¼!",
																	 buttons:Ext.Msg.OK,
																	 icon:Ext.MessageBox.INFO
																 }
															 );
												 }
												 for(var i=0;i<n;i++)
												 Ext.getCmp('grid_history_panel').getStore().remove(sels[i]);
											 }
								 }
							  },'-',
							 {
								  text:"�ϴ�������",
								  listeners:
								  {
								     "click":function(e)
											        {
														var sel=Ext.getCmp('grid_history_panel').getSelectionModel();
														//alert(sel.getCount());
														var sels=sel.getSelections();
														var n=sel.getCount();
														//alert(sels[0].data.name);
														for(var i=0;i<n;i++)
														{
															if(i<n-1)
															historylist+=sels[i].data.name+"|"+sels[i].data.date+"|"+sels[i].data.time+"%26";
															else
															historylist+=sels[i].data.name+"|"+sels[i].data.date+"|"+sels[i].data.time;
														}
														//alert(varlist);
														if(historylist!="")
														ACUpdateHistory(historylist);
														else
														{
															Ext.Msg.show
															(
															     {
																	 title:"��ʾ",
																	 msg:"��ѡ����Ҫ�ϴ�����ʷ��¼!",
																	 buttons:Ext.Msg.OK,
																	 icon:Ext.MessageBox.INFO
																 }
															 );
														}
														historylist="";
													}
									}
								},'-'
					   ],
					   height:300,
					   //autoHeight:true,
					   
					   //autoWidth:true,
					   collapsible:true,
					   hideCollapseTool:true,
					   collapsed:true,
					   items:new Ext.grid.GridPanel({
													id:'grid_history_panel',
										            store:history_store,
											        sm:sm2,
										            columns:[
													        sm2,
													         {header:"����",width:100,dataIndex:"name"},
                                                            {header:"����",width:100,dataIndex:"date"},
                                                            {header:"ʱ��",width:100,dataIndex:"time"}
													        ],
													listeners:
													{
														"rowdblclick":function(g,r,e)
														{
															var sel=Ext.getCmp('grid_history_panel').getStore();
															var rec=sel.getAt(r);//alert(rec.data.name);
															document.getElementById('entryBox_text').value=rec.data.name;
														}
													},
										              //autoWidth:true,
										             autoScroll:true,
											         //autoHeight:true,
										              height:200
										   }),
					   autoScroll:true
                   }

				   ]
			  },
			  {
				  xtype:"panel",
				  title:"������",
				  id:'cmdp',
				  //layout:"form",
				  listeners:
				  {
					  "activate":function(e)
					          {
								  document.getElementById('entryBox_text').focus();
							  }
				  },
				  autoScroll:true,
				  region:"center",
				  html:"<div id='outputContainer_text'><p>Welcome to Web Air Caculator</p>	<p>Version 1.00</p><p>��գ�AC:\\>cls</p><br></div><div style=position:relative><span id='commandPrompt_text'>e</span><input type=text id='entryBox_text' onkeyup=command_text() /></div>",
				  tbar:
				  [ //{xtype:"tbfill"},
				   { //pressed:true,
				       width:200,
					   text: '�ļ�'//iconCls: 'album-btn'
					 },
					 {xtype:"tbseparator"},
					 { //pressed:true,
					    text: '�༭'
					},
					{xtype:"tbseparator"},
					{//pressed:true, 
					    text: '�鿴'
					},
					{xtype:"tbseparator"},
					{
						text: '����'
					}
				  ]
				 }
                ]
                
            },
			//��ͼģ��
			 {
			 xtype:"panel",
			 id:'draw_panel',
			 title:"������ͼ",
			 layout:"border",
			 listeners:
			 {
				 "activate":function(e)
				 {
					 if(active_time==0)
					 {
						 var io=document.getElementById('image_out');
						 var n=image_data.getCount();
						 var rec=image_data.getRange(0,n);
						 io.innerHTML+="<br>";
						 
						 var r=new RegExp();
			             
						 for(image_index;image_index<n;image_index++)
						 {
							 var s=rec[image_index].data.name+'.';
							 r.compile(s);
							 var im_path=rec[image_index].data.type.replace(r,'_'+s);
							 io.innerHTML+="<span  style=width:110;height:110;margin-left:15 id=image"+image_index+" onmouseover=image_mouseon(this.id,"+image_index+") onmouseout=image_mouseout(this.id) onclick=image_click(this.id,"+image_index+") > <image id=image"+i+"x src="+im_path+"  style=height:100;width:100;margin-left:5;margin-top:5></image></span>";
						 }
						 active_time++;
					 }//
				 }
			 },
			 //this.addListener("click",draw),class='imageclass'<span align='center'>"+rec[i].data.name+"</span><span>"+rec[i].data.expression+"</span>
			 items:
			 [
			  
			  {
				  xtype:"panel",
				  title:"��ͼ���",
				  id:'draw_west_panel',
				  collapsible:true,
				  split: true,
				  layout:"accordion",
				  //autoScroll:true,
				  width:380,
				  minWidth:380,
                  height:300,
				  //autoHeight:true,
				  layoutConfig: 
				  {
					  animate: true
                   },
				  region:"west",
				  items:
				  [
				           {
							   xtype:"panel",
							   frame:true,
                               title:"2D������ͼ",
                               id:'2D_panel',
				               //split: true,
							   collapsible:true,
							   collapsed :false,
                               autoscroll:true,
                               width:300,
                               height:300,
                               listeners:
							   {
								   "collapse":function(e)
								                     {
														 Ext.getCmp('3D_panel').expand();type="3d";
													 }
							   },
                               //autoWidth:true,
                               //autoHeight:true,
                               
                                html: "<br><p>����ʽ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea id='2D_fxy' >exp(x)</textarea></p><p><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style=margin-left:55>��ʼ��</label>&nbsp;&nbsp;&nbsp;&nbsp;<label style=margin-left:65>�յ�</label></p><p><br><label style=margin-left:20>x:</label><input type=text id='2D_x1' value='0' /><input type=text id='2D_x2' value='3' /></p><p><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style=margin-left:130>�����ܶ�</label><br>&nbsp;</p><p><label style=margin-left:23>x����:</label><input type=text id='2D_x' value='100' /></p><br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select id='2D_select'><option selected=selected>jpeg</option><option>png</option></select>&nbsp;&nbsp;&nbsp;<input id='2D_filename' type=text value=filename_2D /></p><br><font color=red>ͼƬ��������</font><br><hr><br><br><fieldset><br><button id='2D_draw' onclick=draw2D()>����</button><button id='2D_reset' onclick=reset2D()>����</button><br><br></fieldset>"
                              
                             },
							 {
								 xtype:"panel",
								 id:'3D_panel',
								 frame:true,
                                 title:"3D������ͼ",
                                 layout:"form",
				                 //split: true,
								 listeners:
							     {
								   "collapse":function(e)
								                     {
														 Ext.getCmp('2D_panel').expand();type="2d";
													 }
							     },
								 collapsible:true,
							      collapsed :true,
                                  autoscroll:true,
                                  width:300,
                                  height:800,
                     
                                  html:"<br><p>����ʽ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea id='3D_fxyz' >log(x^2+y^2)</textarea></p><p><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style=margin-left:55>��ʼ��</label>&nbsp;&nbsp;&nbsp;&nbsp;<label style=margin-left:65>�յ�</label></p><p><br><label style=margin-left:20>x:</label><input type=text id='3D_x1' value='-10' /><input type=text id='3D_x2' value='10' /></p><p><br><label style=margin-left:20>y:</label><input type=text id='3D_y1' value='-10' /><input type=text id='3D_y2' value='10' /></p><p><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label style=margin-left:130>�����ܶ�</label><br>&nbsp;</p><p><label style=margin-left:15>x����:</label><input type=text id='3D_x' value='50' /><label style=margin-left:25>y����:</label><input type=text id='3D_y' value='50' /></p><br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select id='3D_select'><option selected=selected>jpeg</option><option>png</option></select>&nbsp;&nbsp;<input id='3D_filename' type=text value=filename_3D /></p><br><font color=red>ͼƬ��������</font><br><hr><br><fieldset><br><button id='3D_draw' onclick=draw3D()>����</button><button id='3D_reset' onclick=reset3D()>����</button><br><br></fieldset>"
                                 
                             }
				   ]
			  },
			  {
				  xtype:"panel",
				  title:"ͼƬ��ʾ����",
				  id:'photo_panel',
				  //layout:"border",
				  region:"center",
				  autoScroll:true,
				  html:"<span id='image_out'></span>",
				  //anchor: '100% -0',
            
				  tbar:
				  [ //{xtype:"tbfill"},
				   
				   { //pressed:true,
				       width:200,
					   text: '�ļ�'//iconCls: 'album-btn'
					 },
					 {xtype:"tbseparator"},
					 { //pressed:true,
					    text: '�༭'
					},
					{xtype:"tbseparator"},
					{//pressed:true, 
					    text: '�鿴'
					},
					{xtype:"tbseparator"},
					{
						text: '����'
					}
				  ]
				 }
			  ]
			  },
			  //�û��Զ��庯��
			{
				xtype:"panel",
                title: '�û��Զ��庯��',
				layout:"border",
				autoScroll:false,
				listeners:
				{
					"activate":function(e)
					{
						var ctp=Ext.getCmp('custom_tree_panel').getRootNode();
						if(!ctp.findChild('text','��������������'))
						{
							ctp.appendChild(customroot);
							ctp.appendChild(private2);
						}
						//custom.removeChild(custom.findChild('text','matrixtoolbox'));
					}
				},
				items:
				[
				     {
						 
				          xtype:"panel",
				          title:"�Ѷ��庯���б�",
				          collapsible:true,
						  //frame:true,
				           split: true,
				          layout:"border",
				           width:370,
                           height:300,
				           region:"west",
						   tbar:
							   [
								    {
										text:"Դ����"
									},'-',
									{
										text:"ɾ��"
									},'-',
									{
										text:"�½��ļ���"
									},'-'
								],
				            items:
				           [
							
							  {
				               xtype:"treepanel",
							   region:"center",
							   id:"custom_tree_panel",
							   frame:true,
                               useArrows :true,
                               autoScroll:true,
                               width:300,
                               height:100,
                               
                               //autoWidth:true,
							   
                                root:new Ext.tree.TreeNode(
									 {
										 text:"�û��ļ���",
										 expanded :true
									 })
							  },
							 {
								  xtype:"panel",
                                  title:"������Ϣ",
								  region:"south",
								  frame:true,
                                  layout:"form",
				                  split: true,
							      //collapsed :true,
                                  autoScroll:true,
                                  width:300,
                                  height:280,
                                  //autoWidth:true,
                                 
								  html:"<fieldset><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:20><font size=2>�������� ��</font><input id='func_desc' value=�������������ֵ type=text /> </label><br><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:20><font size=2>���ø�ʽ ��</font><input id='func_form' value=max([x],[y]) type=text /> </label><br><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:20><font size=2>����˵�� ��</font><input id='func_illu' value=������x��y type=text /> </label><br><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:20><font size=2>��&nbsp; ��&nbsp;&nbsp;ֵ ��</font><input id='func_back' value=��������������һ�� type=text /> </label><br><br>&nbsp;&nbsp;&nbsp;<label style=margin-left:20><font size=2>ʾ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;�� ��</font><input id='func_exam' value=max([1],[2]) type=text /> </label><br><br><select id='func_select'><option selected='selected'>����</option><option>˽��</option></select><button id='func_sub' onclick=custom()><font size=2>ȷ��</font></button>&nbsp;<br><br></fieldset>"
                                 
                             }
				   ]
			  },
			  {
				  xtype:"panel",
				  title:"�����༭��",
				  layout:"border",
				  region:"center",
				  height:600,
				  //anchor: '100% -0',
				  items:
				  [
				       {
						   xtype:"panel",
						   //title:"����һ",
						   layout:"form",
						   height:300,
						   //collapsible:true,
				                 //split: true,
							     // collapsed :true,
						   //autoWidth:true,
						   region:"center",
						    items:[{
						    	  
						          xtype:"textarea",
								  id:'func_text',
								  value:'max(int x,int y,out int * z)\n{ \n int i; \n if(x>=y)\n *z=x;\n else \n*z=y;\n return(z 1*1);\n}',
								  //region:"center",
								  height:300,
					              hideLabel: true, //wrap:true,
					              anchor: '100% -0'
						     }]
					   },
				       {
								   xtype:"panel",
								   title:"������Ϣ",
								   titleCollapse :true,
								   collapsible:true,
								   height:200,
								   region:"south",
								   layout:"form",
								   //frame:true,
								   //border:true,
								  items:[
										 {
											 xtype:"textarea",
											 id:'func_info',
											 readOnly:true,
											 //region:"center",
								             //height:150,
											 hideLabel: true,
								             anchor:'100% -0'
										 }
								   //listeners:{'onload':function(){Ext.getEl().cneter();}},
								   ],
								  tbar:
								  [
								      {
										  text:"�����Ϣ",
										  listeners:
										  {
											  "click":function(e)
											  {
												  document.getElementById('func_info').value="";
											  }
										  }
									  },'-'
								   ]
											
					    }


					],
				  
				  tbar:
				  [ 
				   { //pressed:true,
				       width:200,
					   text: '�ļ�'//iconCls: 'album-btn'
					 },
					 {xtype:"tbseparator"},
					 { //pressed:true,
					    text: '�༭'
					},
					{xtype:"tbseparator"},
					{//pressed:true, 
					    text: '�鿴'
					},
					{xtype:"tbseparator"},
					{
						text: '����'
					}
				  ]
				 }
					 
				 ]
            },
			//���м���
			{
                title: '���м���',
				id:'help',
                disabled:true,
                html: 'help/ACHelp.html'
            }
			]
		  }
	  ]
								
  });

start_textnode();
document.getElementById('grammar_last').innerHTML = 'AC:\\\>&nbsp;';
document.getElementById('commandPrompt_out').innerHTML = 'AC:\\\>&nbsp;';

//document.getElementById('panel_in').focus();
setFocusToEntryBox();
if(user_path=="error")
{
	//username='anonymous';
	user_path="users/anonymous/user.asp";
	Ext.Msg.show
	(
        {
			 title:"��ʾ",
			 msg:"Anonymous logined ok!",
			 buttons:Ext.Msg.OK,
			 icon:Ext.MessageBox.INFO
		 }
	 );
}
Ext.getCmp('north_panel').setTitle("Welcome,"+username+" logined"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='ACHelp.html' target=_blank><font color=white>�鿴����</font></a>");
Ext.getCmp('north_panel').setIconClass('user');
//var s="AC\\:>";var s2='AC';var r=new RegExp();r.compile(s2);
//var i=s.indexOf('>');var s1=s.replace(r,'_>');//alert(i);alert(s1);

}
