$( document ).ready(function() {

	var isRun = false;
	$(document).on("click","#happystoryMore",function(){ 
		if(isRun == true) {
			return;
		}
		var page = ($("#currentPage").val()*1) +1; 
		$("#currentPage").val(page);

		isRun = true;
		var formData = $("#happystoryFrm").serialize();
		
		$.ajax({
			url: "/loadBusinessListAjax.do",
			type: "POST",
			cache : false,
			data : formData,
			success: function (result) {
				if(result.ajaxResult == "SUCCESS"){
					var sub_contents = '';
					for(var i=0; i < result.boardList.length; i++){
						sub_contents += '<div class="list_box">';
						sub_contents += '<a href="/happystory/happystoryView.do?boardSeq='+ result.boardList[i].boardSeq +'#news_view">';
						if(result.boardList[i].thumImg != null && result.boardList[i].thumImg != '')
							sub_contents += '<div class="img" style="background: url(/liveFile/happystory-img/happyFileView.do?fileName='+result.boardList[i].thumImg+') no-repeat center top; background-size: cover;"></div>';
						else
							sub_contents += '<img class="no_img" src="/resources/img/common/noimage.jpg" alt=""> <!-- 썸네일 이미지가 없을 경우 -->';
						sub_contents += '<div class="text_area">';
						sub_contents += '<p>'+result.boardList[i].title+'</p>';
						sub_contents += '<p>'+result.boardList[i].content.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "").substring(0,80);
						if(result.boardList[i].content.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "").length > 80)
							sub_contents += '...';
						sub_contents += '</p>';
						sub_contents += '<p>'+result.boardList[i].useDate+'</p></div></a></div>';
					}
					$("#sub_contents").html($("#sub_contents").html() + sub_contents);
					
					if(result.searchBoardVO.currentPage >= 3 ){
						$("#happystoryMore").hide();
					}else if(result.searchBoardVO.currentPage >= result.searchBoardVO.totalPage ){
						$("#happystoryMore").hide();
					}else{
						$("#happystoryMore").show();
					}
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

