function ajaxPost(url,data,callback){
	data = JSON.stringify(data);
	$.ajax({
	    type: "POST",
	    data : data,
	    url: url,
	    success:callback,
	    error : function(e) {
	    	alert(e.responseJSON.error);
	    }
	});
}

function ajaxHtmlPost(url,data,callback){
	data = JSON.stringify(data);
	$.ajax({
		type: "POST",
		dataType : "html",
		data : data,
		url: url,
		success:callback,
		error : function(e) {
			alert(e.responseJSON.error);
		}
	});
}

function ajaxGet(url,data,callback){
	data = JSON.stringify(data);
	$.ajax({
	    type: "GET",
	    data : data,
	    url: url,
	    success:callback,
	    error : function(e) {
	    	alert(e.responseJSON.error);
	    }
	});
}

function ajaxPut(url,data,callback){
	data = JSON.stringify(data);
	$.ajax({
	    type: "PUT",
	    data : data,
	    url: url,
	    success:callback,
	    error : function(e) {
	    	alert(e.responseJSON.error);
	    }
	});
}

function ajaxDelete(url,data,callback){
	data = JSON.stringify(data);
	$.ajax({
	    type: "DELETE",
	    data:data,
	    url: url,
	    success:callback,
	    error : function(e) {
	    	alert(e.responseJSON.error);
	    }
	});
}

function callKMCpopUp(data){
	var f = document.createElement("form");
	f.setAttribute('method',"post");
	f.setAttribute('action',"https://www.kmcert.com/kmcis/web/kmcisReq.jsp");

	var i = document.createElement("input"); //input element, text
	i.setAttribute('type',"hidden");
	i.setAttribute('name',"tr_cert");
	i.setAttribute('value',data.tr_cert);
	
	var j = document.createElement("input"); //input element, text
	j.setAttribute('type',"hidden");
	j.setAttribute('name',"tr_url");
	j.setAttribute('value',data.tr_url);
	
	var k = document.createElement("input"); //input element, text
	k.setAttribute('type',"hidden");
	k.setAttribute('name',"tr_add");
	k.setAttribute('value',data.tr_add);
	
	f.appendChild(i);
	f.appendChild(j);
	f.appendChild(k);
	
	document.body.appendChild(f);
	
	var kmcWindowTarget = 'KMCISWindow';
	var KMCIS_window = window.open('', kmcWindowTarget , 'width=425, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250');

	var isInapp = (navigator.userAgent.toUpperCase().match(/KAKAOTALK/i) ? true : false);
    if (KMCIS_window == null && !isInapp) {
        alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
    }
    
    f.target = kmcWindowTarget;
    f.submit();
}
