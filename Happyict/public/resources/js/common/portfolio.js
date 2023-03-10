$( document ).ready(function() {
	$("#portfolioListBtn").attr("href", "/portfolio/portfolio.do?search=" + $("#search").val() + "&searchHashtag=" + $("#searchHashtag").val() + "&currentPage=" + $("#currentPage").val() + "&boardSeq=1#focus" + $("#boardSeq").val());
	$(document).on("click","#portfolioMore",function(){ 
		if(isRun == true) {
			return;
		}
		
		var page = ($("#currentPage").val()*1) +1; 
		if(page > $("#totalPage").val()){
			$("#portfolioMore").hide();
			return;
		}
		$("#currentPage").val(page);
		isRun = true;
		var formData = $("#portfolioFrm").serialize();

		$.ajax({
			url: "/loadBoardListAjax.do",
			type: "POST",
			cache : false,
			data : formData,
			success: function (result) {
				if(result.ajaxResult == "SUCCESS"){
					var sub_contents = '';
					for(var i=0; i < result.boardList.length; i++){
						sub_contents += '<li>';
						sub_contents += '<a href="#none"  onclick="javascript:goPortfolioView('+ result.boardList[i].boardSeq +');">';
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

	$(document).on("click",".search_word ul li a",function(){
		if($(this).attr("class") == "active")
			$(this).removeAttr("class");
		else 
			$(this).attr("class","active");
		/*if($(this).attr("class") == "active"){
			$(this).removeClass("active");
			var ainner = $(this).parent().html();
			$(this).parent().html(ainner);
		}else 
			$(this).addClass("active");
		*/
		$("#searchHashtag").val("");
		$(".search_word ul li a").each( function() {
			if($(this).attr("class") == "active"){
				if($("#searchHashtag").val() == "")
					$("#searchHashtag").val($(this).data("hashtag"));
				else
					$("#searchHashtag").val($("#searchHashtag").val() + "," + $(this).data("hashtag"));
			}
		});
		$("#currentPage").val(1);
		loadPortfolioList();
	});

});

function goSearch(){
	$("#currentPage").val(1);
	loadPortfolioList();
}

function goPortfolioView(seq){
	$("#boardSeq").val(seq);
	$("#portfolioFrm").submit();
}
var isRun = false;
function loadPortfolioList(){
	if(isRun == true) {
		return;
	}
	
	isRun = true;
	var formData = $("#portfolioFrm").serialize();

	$.ajax({
		url: "/loadBoardListAjax.do",
		type: "POST",
		cache : false,
		data : formData,
		success: function (result) {
			$("#portfoliaoNot").hide();
			if(result.ajaxResult == "SUCCESS"){
				var sub_contents = '';
				for(var i=0; i < result.boardList.length; i++){
					sub_contents += '<li>';
					sub_contents += '<a href="#none"  onclick="javascript:goPortfolioView('+ result.boardList[i].boardSeq +');">';
					sub_contents += '<span class="figure"><img src="/liveFile/portfolio-img/happyFileView.do?fileName='+result.boardList[i].thumImg+'" alt="'+result.boardList[i].title+' 포토폴리오 바로가기"></span>';
					sub_contents += '<span class="figure_logo"><img src="/liveFile/portfolio-img/happyFileView.do?fileName='+result.boardList[i].thumImg2+'" alt="'+result.boardList[i].title+' 포트폴리오 바로가기" /></span>';
					sub_contents += '</a>';
					sub_contents += '</li>';
				}
				$("#sub_contents").html(sub_contents);
				if(result.boardList.length == 0)
					$("#portfoliaoNot").show();
			
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
}
