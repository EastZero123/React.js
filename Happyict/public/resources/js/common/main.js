$( document ).ready(function() {
	var isRun = false;
	
	$(document).on("click","#portfolioMore",function(){ 
		if(isRun == true) {
			return;
		}
		
		var page = ($("#currentPage").val()*1) +1; 
		if(page >= $("#totalPage").val()){
			$("#portfolioMore").hide();
			return;
		}
		$("#currentPage").val(page);
		isRun = true;
		var formData = $("#portfolioFrm").serialize();

		$.ajax({
			url: "/loadMainListAjax.do",
			type: "POST",
			cache : false,
			data : formData,
			success: function (result) {
				if(result.ajaxResult == "SUCCESS"){
					var sub_contents = '';
					for(var i=0; i < result.boardList.length; i++){
						sub_contents += '<li>';
						sub_contents += '<a href="/portfolio/portfolioView.do?boardSeq='+ result.boardList[i].boardSeq +'">';
						sub_contents += '<span class="figure"><img src="/liveFile/portfolio-img/happyFileView.do?fileName='+result.boardList[i].thumImg+'" alt="'+result.boardList[i].title+' 포토폴리오 바로가기"></span>';
						sub_contents += '<span class="figure_logo"><img src="/liveFile/portfolio-img/happyFileView.do?fileName='+result.boardList[i].thumImg2+'" alt="'+result.boardList[i].title+' 포트폴리오 바로가기" /></span>';
						sub_contents += '</a>';
						sub_contents += '</li>';
					}
					$("#sub_contents").html($("#sub_contents").html() + sub_contents);
					
					if(result.searchBoardVO.currentPage >= result.searchBoardVO.totalPage )
						$("#portfolioMore").hide();
					else
						$("#portfolioMore").show();
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
	});
	
	$(document).on("click","#happystoryMore",function(){ 
		if(isRun == true) {
			return;
		}
		
		var page = ($("#currentPage2").val()*1) +1; 
		$("#currentPage2").val(page);

		isRun = true;
		var formData = $("#happystoryFrm").serialize();
		
		$.ajax({
			url: "/loadMainListAjax.do",
			type: "POST",
			cache : false,
			data : formData,
			success: function (result) {
				if(result.ajaxResult == "SUCCESS"){
					var sub_contents2 = '';
					for(var i=0; i < result.boardList.length; i++){
						sub_contents2 += '<div class="list_box">';
						sub_contents2 += '<a href="/happystory/happystoryView.do?boardSeq='+ result.boardList[i].boardSeq +'#news_view">';
						if(result.boardList[i].thumImg != null && result.boardList[i].thumImg != '')
							sub_contents2 += '<div class="img" style="background: url(/liveFile/happystory-img/happyFileView.do?fileName='+result.boardList[i].thumImg+') no-repeat center top; background-size: cover;"></div>';
						else
							sub_contents2 += '<img class="no_img" src="/resources/img/common/noimage.jpg" alt=""> <!-- 썸네일 이미지가 없을 경우 -->';
						sub_contents2 += '<div class="text_area">';
						sub_contents2 += '<p>'+result.boardList[i].title+'</p>'
						sub_contents2 += '<p>'+result.boardList[i].content.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "").substring(0,80);
						if(result.boardList[i].content.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "").length > 80)
							sub_contents2 += '...';;
						sub_contents2 += '<p>'+result.boardList[i].useDate+'</p></div></a></div>';
					}
					$("#sub_contents2").html($("#sub_contents2").html() + sub_contents2);
					
					if(result.searchBoardVO.currentPage >= 3 )
						$("#happystoryMore").hide();
					else
						$("#happystoryMore").show();
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
	});
});

