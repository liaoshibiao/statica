   	 var flag=0;
$("#quanxuan1").on('click',function(){
		if(flag == 0){	
			flag=1;
			$(".shezhi div").each(function(){
				$(this).css("background","rgb(229,250,250)")
				$(this).children(".gou").css("display","block")
				$("#quanxuan1").html("清除")
			})
		}else{
			flag = 0;
			$(".shezhi div").each(function(){
				$(this).css("background","rgb(242,243,245)")
				$(this).children(".gou").css("display","none")
				$("#quanxuan1").html("全选")
			})
		 }
		
//		$(".shezhi div").each(function(){
//			if(flag == 0){
//				flag=1;
//				$(this).on('click',function(){
//					$(this).css("background","rgb(242,243,245)")
//					$(this).children(".gou").css("display","none")
//				})
//			}else{
//				flag = 0;
//				$(this).on('click',function(){
//					$(this).css("background","rgb(229,250,250)")
//					$(this).children(".gou").css("display","block")
//				})
//			}
//		})
	
})
	  
