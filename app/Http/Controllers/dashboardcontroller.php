<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class dashboardcontroller extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	 public function __construct(){
		 
		 $this->middleware('auth');
	 }
	public function index()
	{
		return view('dashhome');
	}
public function testview()
	{
		return view('test');
	}
	public function about(){
		
		return view('about');
	}

}
