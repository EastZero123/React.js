$( document ).ready(function() {
	$(document).on("click",".tabs li",function(){ 
		if($(this).text() == "전체")
			$("#searchCategory").val("");
		else
			$("#searchCategory").val($(this).text());
		$("#currentPage").val(1);
		loadHappystoryList();
		
	});
	
	$(document).on("click",".btn-search",function(){ 
		loadHappystoryList();
	});
});

function is_ie() {
    if (navigator.userAgent.toLowerCase().indexOf("chrome") != -1) return false;
    if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) return true;
    if (navigator.userAgent.toLowerCase().indexOf("windows nt") != -1) return true;
    return false;
}

function urlShare(url) {
	var _url = encodeURIComponent(url);
	if (is_ie()) {
        window.clipboardData.setData("Text", url);
        alert("복사되었습니다.");
        return;
    }
    prompt("Ctrl+C를 눌러 복사하세요.", url);
}

function goSearch(page){
	$("#currentPage").val(page);
	loadHappystoryList();
}

var isRun = false;
function loadHappystoryList(){
	if(isRun == true) {
		return;
	}
	
	isRun = true;
	var formData = $("#happystoryFrm").serialize();

	$.ajax({
		url: "/loadBoardListAjax.do",
		type: "POST",
		cache : false,
		data : formData,
		success: function (result) {
			if(result.ajaxResult == "SUCCESS"){
				var sub_contents = '<div class="happystory_wrap"><div class="happystory_list"><ul class="tabs">';
				sub_contents += '<li rel="tab1"" ';
				if(result.searchBoardVO.searchCategory == '')
					sub_contents += 'class="active"';
				sub_contents += '>전체</li>';
				sub_contents += '<li rel="tab2" ';
				if(result.searchBoardVO.searchCategory == '공지/뉴스')
					sub_contents += 'class="active"';
				sub_contents += '>공지/뉴스</li>';
				sub_contents += '<li rel="tab3" ';
				if(result.searchBoardVO.searchCategory == '언론보도')
					sub_contents += 'class="active"';
				sub_contents += '>언론보도</li>';
				sub_contents += '<li rel="tab4" ';
				if(result.searchBoardVO.searchCategory == 'IT사회공헌')
					sub_contents += 'class="active"';
				sub_contents += '>IT사회공헌</li>';
				sub_contents += '<li rel="tab5" ';
				if(result.searchBoardVO.searchCategory == 'IT육성·교육')
					sub_contents += 'class="active"';
				sub_contents += '>IT육성·교육</li>';
				sub_contents += '</ul><div class="input-search">';
				sub_contents += '<input type="text" id="search" name="search" value="';
				if(result.searchBoardVO.search != null)
					sub_contents += result.searchBoardVO.search;
				sub_contents += '" class="input" title="행복ICT 행복이야기 게시물 검색어 입력" placeholder="검색어를 입력해 주세요" onkeypress="if( event.keyCode==13 ){loadHappystoryList();}">';
				sub_contents += '<button class="btn-search" title="행복ICT 행복이야기 게시물 검색 버튼" type="button"><span class="blind">검색어를 입력해 주세요</span></button>';
				sub_contents += '</div><ul class="tab_cont">';
				for(var i=0; i < result.boardList.length; i++){
					sub_contents += '<li>';
					sub_contents += '<a href="#" onclick="javascript:goHappystoryView('+ result.boardList[i].boardSeq +');">';
					if(result.boardList[i].thumImg != null && result.boardList[i].thumImg != '')
						sub_contents += '<div class="img" style="background: url(/liveFile/happystory-img/happyFileView.do?fileName='+result.boardList[i].thumImg+') no-repeat center top; background-size: cover;"></div>';
					else
						sub_contents += '<div class="img" style="background: url(/resources/img/common/noimage.jpg) no-repeat center top; background-size: cover;"></div>';
					sub_contents += '<div class="text_area">';
					sub_contents += '<p>'+result.boardList[i].category+'</p>';
					sub_contents += '<p>'+result.boardList[i].title+'</p>';
					sub_contents += '<p>'+result.boardList[i].useDate+'</p>';
					sub_contents += '</div>';
					sub_contents += '</a>';
					sub_contents += '</li>';
				}
				sub_contents += '</ul>';
				if(result.boardList.length == 0)
					sub_contents += '<p class="no_result">검색 결과가 존재하지 않습니다.</p>';
			
				sub_contents += '<div class="paging-t1">';
				sub_contents += '<div class="inner_num">';
				sub_contents += result.paging;
				sub_contents += '</div>';
				sub_contents += '</div>';
				sub_contents += '</div>';
				sub_contents += '</div>';
				$("#sub_contents").html(sub_contents);
			}else{
				alert("불러오기 실패하였습니다.");
			}
			isRun = false;
		}
	,error:function(request,status,error){
		alert("불러오기 실패하였습니다.");
		isRun = false;
		console.log("code:"+request.status+"\n"+"error:"+error);}
	});
}

function goHappystoryList(){
	$("#happystoryFrm").submit();
}

function goHappystoryView(seq){
	$("#boardSeq").val(seq);
	$("#happystoryFrm").attr("action","/happystory/happystoryView.do?boardSeq="+seq+"#news_view");
	$("#happystoryFrm").submit();
}


function shareAct(snsCode, boardSeq){
        var cUrl = window.location.hostname + "/happystory/happystoryView.do?boardSeq=" + boardSeq;
        var title = $("#shareTitle").val();
        switch(snsCode){
            case"vIconTw":
                //트위터
                cUrl = 'https://twitter.com/intent/tweet?text='+title+'&url='+cUrl;
            break;
            case"vIconFb":
                //페이스북
                cUrl = 'http://www.facebook.com/sharer/sharer.php?u='+cUrl;
            break;
        }
  
        window.open(cUrl,'','width=600,height=300,top=100,left=100,scrollbars=yes');
  
    }
