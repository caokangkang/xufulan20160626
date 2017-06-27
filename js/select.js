function radioPost( a , b , c){
	$('.' + a + ' .radioBox').on("click",function(){
		if($('.' + a + ' .radio1 .radio').hasClass('on')){
			var For = $('.' + a + ' .radio1 .on').attr("for");
			if(For == b){
				$('.' + a + ' .radioHtml').html('恭喜您答对啦~')
				if(c == 0){
					setTimeout(function () {
						$('.radio').removeClass('on');
				        mySwiper.slideNext();
				    }, 1000);
				}else{
					window.location = 'http://www.baidu.com';
				}
			}else{
				$('.' + a + ' .radioHtml').html('您选择的答案不正确哦~')
			}
		}else{
			$('.' + a + ' .radioHtml').html('请选择一个选项！！')
		}
	})
}