// JavaScript Document
/*
	�˽ű�����������ʾ��Ϸswf��ҳ�沢��swf������Ϸ����
	���ô˽ű���ҳ����뱻�������������͵Ĳ�����
	srvaddr=��½��������ַ&srvport=��½�˿�&srvid=������ID&&spid=��Ӫ�̱�ʶ&ressite=��Ϸ��Դ������վ���ַ
*/
function get(p){
var url= document.URL.toString();
var tmpStr=p+"=";
var tmp_reg=eval("/[\?&]"+tmpStr+"/i");
if(url.search(tmp_reg)==-1)return null;
else{
    var a=url.split(/[\?&]/);
    for(var i=0;i<a.length;i++)
         if(a[i].search(eval("/^"+tmpStr+"/i"))!=-1)return a[i].substring(tmpStr.length);
}
}


srvaddr = get("srvaddr");

srvport = get("srvport");

srvid = get("srvid");

spid = get("spid");

ressite = get("ressite");

rankurl = get("rankurl");

user = get("user");

lang = get("lang");

gameName = get("gameName");

if ( !lang || lang == '' ) lang = "zh-CN";
if ( !gameName || gameName == '' ) gameName = '����Х������';


		
		
		//"��ҳ�ɼ������"+ document.body.clientWidth; 
        //��ҳ�ɼ�����ߣ�"+ document.body.clientHeight; 
        //��ҳ�ɼ�����ߣ�"+ document.body.offsetWidth +" (�������ߵĿ�)"; 
        //��ҳ�ɼ�����ߣ�"+ document.body.offsetHeight +" (�������ߵĿ�)"; 
		//��ҳ����ȫ�Ŀ�"+ document.body.scrollWidth; 
		//��ҳ����ȫ�ĸߣ�"+ document.body.scrollHeight; 
		//��ҳ����ȥ�ĸߣ�"+ document.body.scrollTop; 
		//��ҳ����ȥ����"+ document.body.scrollLeft; 
		//��ҳ���Ĳ����ϣ�"+ window.screenTop; 
		//��ҳ���Ĳ�����"+ window.screenLeft; 
		//��Ļ�ֱ��ʵĸߣ�"+ window.screen.height; 
		//��Ļ�ֱ��ʵĿ�"+ window.screen.width; 
		//��Ļ���ù������߶ȣ�"+ window.screen.availHeight; 
		//��Ļ���ù�������ȣ�"+ window.screen.availWidth; 
var width= document.body.clientWidth;
var height = document.body.clientHeight;
//alert('ԭʼ��С��'+width + 'x' + height);
//if (width > 1000) width = 1000; else if (width < 1000) width = 1000;//��Ȳ���С��1000������ť������
//if (height > 600) height = 600; else if (height < 500) height = 500;
if (width < 1000) width = 1000;//��Ȳ���С��1000������ť������
if (height < 500) height = 500;
//alert('�������С��'+width + 'x' + height);

var _flvars = 'srvaddr='+srvaddr+'&srvport='+srvport+'&srvid='+srvid+'&&spid='+spid+'&ressite='+ressite+'&rankurl='+rankurl+'&width='+width+'&height='+height+'&lang='+lang+'&gameName='+gameName;

document.write(
	'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
	+ '	id="gameProject"'
	+ '	codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab" width="' + width + '" height="' + height + '" align="middle">'
	+ '	<param name="movie" value="LoadGame.swf" />'
	+ '	<param name="quality" value="high" />'
	+ '	<param name="flashVars" value="' + _flvars + '" />'
	+ '	<param name="bgcolor" value="0" />'
	+ '	<param name="allowScriptAccess" value="sameDomain" />'
	+ '	<param name="menu" value="false" />'
	+ '	<embed src="LoadGame.swf" quality="high" bgcolor="0"'
	+ '		width="' + width + '" height="' + height + '" name="MingJiangClient" align="middle"'
	+ '		play="true"'
	+ '		loop="false"'
	+ '		quality="high"'
	+ '		menu="false"'
	+ '		allowScriptAccess="sameDomain"'
	+ '		type="application/x-shockwave-flash"'
	+ '		flashVars="' + _flvars + '"'
	+ '		pluginspage="http://www.adobe.com/go/getflashplayer">'
	+ '	</embed>'
	+ '</object>'
	);
