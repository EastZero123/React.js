$(function() {
	function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}
	
	var isRun = false;
	
	$('#btn_submit').on('click', function(){
		if(isRun == true) {
			return;
		}
	
		if($("#title").val() == ""){
			alert("이름을 입력해 주세요.");
			$("#title").focus();
			return;
		}else if($("#column1Value").val() == ""){
			alert("회사명을 입력해 주세요.");
			$("#column1Value").focus();
			return;
		}else if($("#column2Value").val() == ""){
			alert("연락처를 입력해 주세요.");
			$("#column2Value").focus();
			return;
		}else if($("#column3Value").val() == ""){
			alert("이메일을 입력해 주세요.");
			$("#column3Value").focus();
			return;
		}else if(!validateEmail($("#column3Value").val())){
			alert("이메일을 확인해 주세요.");
			$("#column3Value").focus();
			return;
		}else if($("#category option:selected").val() == ""){
				alert("문의 카테고리를 선택해 주세요.");
				$("#category").focus();
				return;
		}else if($("#content").val() == ""){
			alert("문의내용을 입력해 주세요.");
			$("#content").focus();
			return;
		}else if($("#cb1").is(":checked") == false){
			alert("개인정보 수집 및 이용에 동의해주세요.");
			$("#cb1").focus();
			return;
		}

		$("#categoryEmail").val($("#category option:selected").data("email"));
		
		if(confirm("제출하시겠습니까?")){
			$(".wrap-loading").show();
			isRun = true;
			var formData = $("#regFrm").serialize();

			$.ajax({
				url: "/insertBoardAjax.do",
				type: "POST",
				cache : false,
				data : formData,
				success: function (result) {
					if(result.ajaxResult == "SUCCESS"){
						alert("완료되었습니다.");
						location.reload();
					}else{
						alert("제출에 실패하였습니다.");
					}
					isRun = false;
					$(".wrap-loading").hide();
				}
			,error:function(request,status,error){
				alert("제출에 실패하였습니다.");
				isRun = false;
				$(".wrap-loading").hide();
				console.log("code:"+request.status+"\n"+"error:"+error);}
			});
		}
	});
});

function autoHypen() {
	var x = document.getElementById("column2Value");
	x.value = x.value.replace(/[^0-9]/g, '');
	var tmp = "";

	if (x.value.length > 3 && x.value.length <= 7) {
		tmp += x.value.substr(0, 3);
		tmp += '-';
		tmp += x.value.substr(3);
		x.value = tmp;
	} else if (x.value.length > 7) {
		tmp += x.value.substr(0, 3);
		tmp += '-';
		tmp += x.value.substr(3, 4);
		tmp += '-';
		tmp += x.value.substr(7);
		x.value = tmp;
	}
}

function inputTelNumber(obj) {

    var number = obj.value.replace(/[^0-9]/g, "");
    var tel = "";

    // 서울 지역번호(02)가 들어오는 경우
    if(number != ""){
    if(number.substring(0, 2).indexOf('02') == 0) {
        if(number.length < 3) {
            return number;
        } else if(number.length < 6) {
            tel += number.substr(0, 2);
            tel += "-";
            tel += number.substr(2);
        } else if(number.length < 10) {
            tel += number.substr(0, 2);
            tel += "-";
            tel += number.substr(2, 3);
            tel += "-";
            tel += number.substr(5);
        } else {
            tel += number.substr(0, 2);
            tel += "-";
            tel += number.substr(2, 4);
            tel += "-";
            tel += number.substr(6);
        }
    
    // 서울 지역번호(02)가 아닌경우
    } else {
        if(number.length < 4) {
            return number;
        } else if(number.length < 7) {
            tel += number.substr(0, 3);
            tel += "-";
            tel += number.substr(3);
        } else if(number.length < 11) {
            tel += number.substr(0, 3);
            tel += "-";
            tel += number.substr(3, 3);
            tel += "-";
            tel += number.substr(6);
        } else {
            tel += number.substr(0, 3);
            tel += "-";
            tel += number.substr(3, 4);
            tel += "-";
            tel += number.substr(7);
        }
    }
    }
    obj.value = tel;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}