@extends('app')
@section('content')
  <section class="content-header">
          <h1>
            Welcome to C B T Portal
            <small>Electronic Test</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>Home</a></li>
            <li class="active">Here</li>
          </ol>
        </section>
		@if(count($result)>0)
			
		@foreach($result as $myresult)
		<div class="col-md-12 label-info"> <p class="text-center text-lg">Your Score is {{$myresult->score}} </p></div>	
			
		@endforeach
		
		
		
		@endif
@endsection