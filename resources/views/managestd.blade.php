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
		  <table class="table table-inverse">
  <thead>
    <tr>
      <th>#</th>
      <th></th>
      <th>Full Name</th>
      <th>Matric Number</th>
      <th>Email Address</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  @if(count($allstd) > 0) 
	
	  @foreach($allstd as $student)
      
    <tr >
	 <th scope="row">{{$index++}}</th>
      <th scope="row"><img style="height:150px; width:150px;" src='{{url ("upload/$student->image") }}'></img></th>
     
      <td>{{$student->name}}</td>
      <td>{{$student->matric}}</td>
      <td>{{$student->email}}</td>
      <td><button class="btn btn-primary btn-md" onClick="(deletedstudent({{$student->id}}))">Delete</button></td>
    </tr>
	@endforeach

	@else
		 <tr >
	 <th class="text-info">No </th>
      <th class="text-info">Student</th>
     
      <td class="text-info"><b>In</b></td>
      <td class="text-info"><b>The</b></td>
      <td class="text-info"><b>Database</b></td>
    </tr>
	
	@endif
 
  </tbody>
</table>
  	<div class="col-md-9"></div>{!! $allstd->render() !!}
        </section>
@endsection