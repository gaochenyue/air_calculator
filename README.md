
提醒：

1.若其他文档中描述的配置方法和运行环境和这里不同，以此文件中的方法为准。
2.一定要安装IE插件Mathplayer(免费软件，光盘中有)并保证它能正常使用，否则页面将无法正常显示
3.若页面显示不正常，请刷新页面。
4.ACWebsite路径中不要含有中文
5.第一次运行AC功能时服务器响应时间比较慢,请耐心等待(大约5s)


--------------------------------------------------------------------------
运行环境：

Windows XP or Windows Vista
IIS 5.1 or IIS 7.0
Framework 2.0以上
IE8.0（安装Mathplayer插件，在光盘中）
屏幕分辨率：1024*768或更高

提醒：
若在IIS 7.0下运行，还需装visual studio 2005(或更高)和IE8

--------------------------------------------------------------------------

Windows XP IIS5.1下安装配置方法

1.将光盘中ACWebsite文件夹保存在本地硬盘,路径中不要含有中文
2.打开IIS5.1
3.将ACWebsite文件夹作为IIS中的网站根目录
4.打开浏览器输入http://localhost/Service.asmx看到Webservice页面可以正常显示，若无法显示则可能是IIS设置问题，请检查服务器设置
5.在浏览器中打开http://localhost/index.html即可体验Air Calculator(建议多刷新几次后再开始操作)。

注意：
若之前有人按照Windows Vista IIS7.0下的安装配置方法使用过本软件，则ACWebsite\javascript\script\Connect_to_server.js文件可能已经被改动，请将它恢复原状。

--------------------------------------------------------------------------

Windows Vista IIS7.0下安装配置方法(此方法也适用于IIS5.1)

提醒：以下方法只在IE8浏览器中可行(这和IE8支持AJAX跨域访问有关)


1.将光盘中ACWebsite文件夹保存在本地硬盘,路径中不要含有中文
2.打开IIS7.0，将IIS7.0的网站根目录设为ACWebsite
3.打开Visual Studio 2005或以上版本
4.点击"文件"->"新建"->"网站"->选择“ASP.NET WEB 服务”(语言选择C#)，点击“浏览”，找到ACWebsite文件夹,选择"打开"，点击"确定"后选择"打开现有网站"
5.点击执行按钮（绿色箭头）
6.在Visual Studio调试服务器下浏览Service.asmx页面，并复制Service.asmx页面地址，如：http://localhost:1062/ACWebsite/Service.asmx
7.打开ACWebsite\javascript\script\Connect_to_server.js文件，找到第三行: var Service_url="Service.asmx";
8.修改成var Service_url="http://localhost:1062/ACWebsite/Service.asmx";
9.确认无误后，保存并退出Connect_to_server.js文件
10.在浏览器中输入：http://localhost/index.html即可使用软件(此时浏览的是80端口下的index.html,建议打开主页后等待5s后再执行其他操作)
11.在以上过程中不要关闭Visual Studio调试服务器,若Visual Studio调试服务器端口号改变，需要重新执行6-9操作。


注意：
Visual Studio调试服务器和IIS7.0指向的是同一个目录，即：ACWebsite
在浏览AC页面时需要同时开启Visual Studio调试服务器和IIS7.0。
浏览完毕后请把Connect_to_server.js中的Service_url恢复原状，以便在IIS 5.1下可以正常浏览


这样做的原因是：
webservice中用到的ACWebsite\bin\dllproxy.dll文件在IIs7.0下不能正常运行（在我们的机器上是这样，此文件用vc6.0编译），但在Visual Studio调试服务器下正常。经过以上处理我们把AC的后台服务转交visual Studio调试服务器，IIS只提供页面下载和AJAX加载xml数据。

--------------------------------------------------------------------------


如有任何疑问请联系：
高晨悦，电话：15312062298,Email:gaochenyue@gmail.com


