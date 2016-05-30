$(function(){


if(localStorage.getItem('resume')=='NaN' || localStorage.getItem('resume')=='null' ||localStorage.getItem('resume')=='undefined'){
	
	var secondss=localStorage.setItem('resume',0);
}

//timerfunction
$('#timer').timer({
	seconds:localStorage.getItem('resume'),
	duration:'60m0s',
	callback: function(){
		
			localStorage.setItem('testtaken','Yes');
				submitanswer();
				$('#submittted').text('Time Up!!');
				$('#submittted').show();
				getscore();
				$('#question').hide();
				localStorage.setItem('resume',0);
				$('#timer').timer('pause');
	}
	
});




$(window).on('beforeunload',function(){
	
	var data=$('#timer').data('seconds');
	localStorage.setItem('resume',data);
	
	
});



if(localStorage.getItem('testtaken')==null){
$('#submittted').hide();
}else{
$('#question').hide();	
$('#timer').timer('remove');
}

//reset button
$('#reset').click(function(){
	var userid=$('#userid').val();
	$.get('/reset/'+userid,function(data,status,xhr){
		
		$.each(data,function(index,element){
			
			if(element=='success'){
		localStorage.removeItem('testtaken');
	localStorage.setItem('resume',0);
	$('#timer').timer('reset');
	$('#question').show();
	$('#submittted').hide();
			}
			else{
			 swal("Error", "Some Unknown error occured :)", "error"); 	
			}
		});
	});
	

	
});

//get question size#
	$.get('/count',function(data,status,xhr){

	if((Math.ceil(data/5))-1==0){
	 $('#prev').hide();		
	 $('#next').hide();		
	}
	
	$('#max').val((Math.ceil(data/5))-1);

	
	});
	$('#submit').click(function(){
		
		localStorage.setItem('testtaken','Yes');
		submitanswer();
		$('#question').hide();		
		$('#submittted').show();
		$('#timer').timer('remove');
		localStorage.removeItem('resume');
		getscore();
		
	});
getscore();
	function getscore(){
		var id=$('#userid').val();
		$.get('/view/result/'+id,function(data,status,xhr){
			if(data==""){
				$('#score').text(0);
			}
			$.each(data,function(index,element){
				
			$('#score').text(element.score);
				
			});
			
		});
	}
	function submitanswer(){
		
			var	questionid1=$('#questid1').val();
	var	questionid2=$('#questid2').val();
	var	questionid3=$('#questid3').val();
	var	questionid4=$('#questid4').val();
	var	questionid5=$('#questid5').val();
	if(questionid2==undefined){
	var	selectedoption1=$('input[name=option'+questionid1+']:checked').val();
	var	insertquestion=[{question1:{ 
	question:questionid1,
	option:selectedoption1
	}}];
    $.each(insertquestion,function(index,element){
		submitstudentanswer(element.question1.question,element.question1.option);

	});
	}
	else if(questionid3==undefined){
	var	selectedoption1=$('input[name=option'+questionid1+']:checked').val();
	var	selectedoption2=$('input[name=option'+questionid2+']:checked').val();
	var	insertquestion=[{question1:{ 
	question:questionid1,
	option:selectedoption1
	},
	question2:{ 
	question:questionid2,
	option:selectedoption2
	}}];
    $.each(insertquestion,function(index,element){
		submitstudentanswer(element.question1.question,element.question1.option);
		submitstudentanswer(element.question2.question,element.question2.option);
	});
	}
	else if(questionid4==undefined){
	var	selectedoption1=$('input[name=option'+questionid1+']:checked').val();
	var	selectedoption2=$('input[name=option'+questionid2+']:checked').val();
	var	selectedoption3=$('input[name=option'+questionid3+']:checked').val();
	var	insertquestion=[{question1:{ 
	question:questionid1,
	option:selectedoption1
	},
	question2:{
	question:questionid2,
	option:selectedoption2
	},
	question3:{
	 question:questionid3,
	option:selectedoption3
	},
    }];
    $.each(insertquestion,function(index,element){
		submitstudentanswer(element.question1.question,element.question1.option);
		submitstudentanswer(element.question2.question,element.question2.option);
		submitstudentanswer(element.question3.question,element.question3.option);
	});
	}
	else if(questionid5==undefined){
		
	var	selectedoption1=$('input[name=option'+questionid1+']:checked').val();
	var	selectedoption2=$('input[name=option'+questionid2+']:checked').val();
	var	selectedoption3=$('input[name=option'+questionid3+']:checked').val();
	var	selectedoption4=$('input[name=option'+questionid4+']:checked').val();
	var	insertquestion=[{question1:{ 
	question:questionid1,
	option:selectedoption1
	},
	question2:{
	question:questionid2,
	option:selectedoption2
	},
	question3:{
	 question:questionid3,
	option:selectedoption3
	},
	question4:{
		question:questionid4,
		option:selectedoption4
	}}];
	    $.each(insertquestion,function(index,element){
		submitstudentanswer(element.question1.question,element.question1.option);
		submitstudentanswer(element.question2.question,element.question2.option);
		submitstudentanswer(element.question3.question,element.question3.option);
		submitstudentanswer(element.question4.question,element.question4.option);
	});
	}
	else{
	var	selectedoption1=$('input[name=option'+questionid1+']:checked').val();
	var	selectedoption2=$('input[name=option'+questionid2+']:checked').val();
	var	selectedoption3=$('input[name=option'+questionid3+']:checked').val();
	var	selectedoption4=$('input[name=option'+questionid4+']:checked').val();
	var	selectedoption5=$('input[name=option'+questionid5+']:checked').val();
	var	insertquestion=[{question1:{ 
	question:questionid1,
	option:selectedoption1
	},
	question2:{
	question:questionid2,
	option:selectedoption2
	},
	question3:{
	 question:questionid3,
	option:selectedoption3
	},
	question4:{
		question:questionid4,
		option:selectedoption4
	},
	question5:{
		question:questionid5,
		option:selectedoption5
	}}];
		
    $.each(insertquestion,function(index,element){
		submitstudentanswer(element.question1.question,element.question1.option);
		submitstudentanswer(element.question2.question,element.question2.option);
		submitstudentanswer(element.question3.question,element.question3.option);
		submitstudentanswer(element.question4.question,element.question4.option);
		submitstudentanswer(element.question5.question,element.question5.option);
	});
	
	}
	
		
	}
	
	//next button condition
	$('#next').click(function(){
		
 submitanswer();
	

	//submit answer when user click next

	
	max=$('#max').val();
		
		if($('#count').val()>=1){
		 $('#prev').show();	
	}
	else{
		 $('#prev').hide();	
	}
	
	var counter= $('#count').val();
	counter++;
//	alert($('#max').val());
	$('#count').val(counter);
	
	getquestion(counter);
	if($('#count').val()==max){
		 $('#next').hide();
		 $('#prev').show();
  		 
	}
	});
	
   $('#prev').hide();	
	
	//previous button condition
	$('#prev').click(function(){
	    	max=$('#max').val();
		
		min=1;
	var counter= $('#count').val();
	counter--;
	 $('#count').val(counter);

	getquestion( counter);
	
	if($('#count').val()<max){
		 $('#prev').show();	
		 $('#next').show();	
	}
		if($('#count').val()<=0){
		 $('#prev').hide();	
		 
	}
	else{
		 $('#prev').show();	
	}
	
	});



getquestion(0);


	//submit student answer function
	function submitstudentanswer(questionid,selectedoption){
		
		var userid=$('#userid').val();

	
	$.get('/student/submittest/'+userid+'/'+questionid+'/'+selectedoption,function(data,status,xhr){
		
		if(data=='failure'){
			
		 swal("Error", "Some Unknow error occured :)", "error"); 
		}
	
		
	});
		
		
	}

     function getquestion(num){	
	 if(num==0){
		 num=0;
	 }
	 else{
		 num=num*5;
	 }
		$.get('/taketest/'+num,function(data,status,xhr){
				$('#displayquestion').html("");
		$.each(data,function(index,element){
		
			$('#displayquestion').append(
			'<br><br><input type="hidden" id="questid'+(index+1)+'" value="'+element.question_id+ '"><div class="col-md-12"><b>'
				+(element.id)+
				')&nbsp;&nbsp;&nbsp;&nbsp;'
				+ element.content+
				'</b></div><div class="col-md-12" style="padding-top:10px; padding-left:33px;">'+
				'<input type="radio"  name="option'+element.question_id+'" id="option'+element.question_id+'" value="1" style="float:left;" ><div class="col-md-4">'
				+ element.option1+
				'</div></div>'+
				'</div><div class="col-md-12"  style="padding-top:10px; padding-left:33px;">'+
				'<input type="radio" name="option'+element.question_id+'" id="option'+element.question_id+'" value="2" style="float:left;" ><div class="col-md-4">'
				+ element.option2+
				'</div></div>'+
				'</div><div class="col-md-12"  style="padding-top:10px; padding-left:33px;">'+
				'<input type="radio" name="option'+element.question_id+'" id="option'+element.question_id+'" value="3" style="float:left;" ><div class="col-md-4">'
				+ element.option3+
				'</div></div>'	+
				'</div><div class="col-md-12"  style="padding-top:10px; padding-left:33px;">'+
				'<input type="radio"  id="option'+element.question_id+'" value="4" name="option'+element.question_id+'" style="float:left;" ><div class="col-md-4"><div class="col-md-4">'
				+element.option4+
				'</div></div><br>');
			
			
		});
		
});
	 }
	
		$('#editfield').hide();
	$(document).ajaxStart(function(){
		
		$('#addquestion').text('Adding...');
		$('#next').text('Loading...');
		
		
	}).ajaxStop(function(){
			$('#addquestion').text('Add Question');
				$('#next').text('Next');
	
	});
	$('#addquestion').click(function(){
		var question=$('#questions').val();
		
		var option1=$('#option1').val();
		var option2=$('#option2').val();
		var option3=$('#option3').val();
		var option4=$('#option4').val();
		var ccc=$('#ccc').val();
		var answer=$('#answer').val();
		if(question.trim()==""||option1.trim()==""||option2.trim()==""||option3.trim()==""||option4.trim()==""||answer.trim()==""){
	
			alert('Please fill all fields');
			
		}
		else{
		$.post('/manage/addtest',{
			question:question,
			option1:option1,
			option2:option2,
			option3:option3,
			_token:ccc,
			option4:option4,
			answer:answer
		},function(data,status,xhr){
		  
		  
			
			$.each(data, function(index,element){
				
			console.log(data);
			if(element=='success'){
				alert('Successfully Added test')
			}
			
		else{
			alert(element);
		}
			
		});
		});

		}
		
	});
	
	$('#update').click(function(){
	var question=$('#questions').val();
	var option1=$('#option1').val();
	var option2=$('#option2').val();
	var option3=$('#option3').val();
	var option4=$('#option4').val();
	var answer=$('#answer').val();
	var id=$('#id').val();
	var csrf=$('#ccc').val();
		
		$.post('/managestd/updatequestion',{
		
			question:question,
			_token:csrf,
			option1:option1,
			option2:option2,
			option3:option3,
			option4:option4,
			answer:answer,	
			id:id	
			
		},function(data,status,xhr){
				$('#editfield').hide(1000);
			$.each(data,function(index,element){
			alert(element);
			location.reload();
			});
		});
		
		
	});
	
	
		$('#managetests').click(function(){
		
		$('#managetests').text('Loading...');
		
		});
	
});
function edit(id){
		$('#editfield').show(1000);
		$.get('/managestd/displayquestion/'+id,function(data,status){
			
			$.each(data,function(index,element){
				$('#questions').val(element.content);
				$('#option1').val(element.option1);
				$('#option2').val(element.option2);
				$('#option3').val(element.option3);
				$('#option4').val(element.option4);
				$('#answer').val(element.correctoption);
				$('#id').val(element.question_id);
				
			});
			
		});
	
	}
	
	//deletestudent
	function deletedstudent(id){
	swal({   title: "Are you sure?",   
             text: "Deletion is irreverssible!",   
             type: "warning", 
             showCancelButton: true, 
             confirmButtonColor: "#DD6B55",   
             confirmButtonText: "Yes, Delete ",  
            cancelButtonText: "No, cancel please!",  
            closeOnConfirm: false,   
            closeOnCancel: false }, 
           function(isConfirm){  
                 if (isConfirm) {  
	$.get('/managestd/deletestudent/'+id,function(data,status,xhr){
		
		$.each(data,function(index,element){
			
			swal("Successfullly", "Deleted Student :)", "success"); 
			window.location.reload();
		});
		
	});
  } 

             else {     swal("Cancelled", "No Changes Made :)", "error");   } });	
		
	
}

	//delete question by id
function deleted(id){
	swal({   title: "Are you sure?",   
             text: "Deletion is irreverssible!",   
             type: "warning", 
             showCancelButton: true, 
             confirmButtonColor: "#DD6B55",   
             confirmButtonText: "Yes, Delete ",  
            cancelButtonText: "No, cancel please!",  
            closeOnConfirm: false,   
            closeOnCancel: false }, 
           function(isConfirm){  
                 if (isConfirm) {  
	$.get('/managestd/deletequestion/'+id,function(data,status,xhr){
		
		$.each(data,function(index,element){
			
		swal("Successfullly", "Deleted Student :)", "success"); 
			window.location.reload();
		});
		
	});
  } 

             else {     swal("Cancelled", "No Changes Made :)", "error");   } });	
		
	
}


