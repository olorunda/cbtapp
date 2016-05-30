<?php

namespace App\Repositories;
use App\User;
class managestudentrepo {

public function liststudent(){
	
	$allstudent=User::where('type','=',0)->paginate(10);
	return $allstudent;
	
}

public function deletestudent($id){
	
	$deletestudent=User::find($id);
	$deletestudent->delete();
	return response()->json(['message'=>'Successfully Deleted Student']);
	
}
	
	
	
	
	
}