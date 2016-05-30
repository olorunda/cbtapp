@extends('app')
@section('content')

  <section class="content-header" onLoad="display5()">
          <h1>
            Welcome to C B T Portal
            <small>Electronic Test</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>Home</a></li>
            <li class="active">Here</li>
          </ol>
        </section>
	<div class="container-fluid">
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<div class="panel panel-primary">
				<div class="panel-heading"><b>CBT Text (Duration 60 Minute)<b style="float:right;" id="timer"></b></div>
				<div class="panel-body" >
				<div id="question">
				<div id="displayquestion">
				</div>
			  
				 <input type="hidden"  value="0" id="count" > 
				 <input type="hidden"  value="0" id="max" >
				 <input type="hidden"  value="{{Auth::user()->id}}" id="userid" >
				  
				 <div class="col-md-6"><button class="btn btn-primary btn-md fixed-buttom" id="prev" >Previous</button>  </div>
				 <div class="col-md-3"><button class="btn btn-primary btn-md fixed-buttom span-left" style="float:left;" id="next" >Next</button></div>
				 <div class="col-md-3"><button class="btn btn-success btn-md fixed-buttom span-left" style="float:left;" id="submit" >Submit</button></div>
					</div>
					<div id="submittted">
					<b style="font-size:30px;" class="text success">Your Answer Has Been Submitted Check The Result Table For Your Result click <button id="reset" style="background-color:white; border:none; color:green;"> here</button> to retake the text <br>
					<a href="/view/solution/{{Auth::user()->id}}" style=" color:green;"> Show Solution</a><div class="col-md-12">Your Test Score is:<div id="score"></div></b></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection