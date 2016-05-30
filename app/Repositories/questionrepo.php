<?php
namespace App\Repositories;

use App\question;
use App\option;
use App\correct;
use App\result;
use App\studentanswer;
use DB;
class questionrepo{
	
	public function createquestion(array $question){
		$questionid=DB::table('questions')->insertGetId($question);
		
	    return $questionid;
	}
	
	
	public function createoption(array $option){
		
		
		$option=option::create($option);
		if($option){
		  return 'success';
			
		}else{
			
			return 'failure';
		}
		
	}
	//update question function
	public function updatequestion(array $data1, array $data2,array $data3 ,$questionid){
		$updatequestion=DB::table('questions')
					->where('id',$questionid)
					->update($data1);
					
		$updateoption=DB::table('options')
					->where('question_id',$questionid)
					->update($data2);
					
		$updatecorrect=DB::table('corrects')
					->where('question_id',$questionid)
					->update($data3);
					
		if($updatequestion||$updatecorrect||$updateoption){
			
			return response()->json(['messsage'=>'You have successfully updated Question']);
			
		}
		else{
			return response()->json(['messsage'=>'You have already Updated Question']);	
		}
		
	}
	
	public function createcorrect(array $correct){
		$correct=correct::create($correct);
		if($correct){
			return 'success';
		}
		else{
			return 'failure';
			
		}
	}
	//get all questions
	public function displayquestion(){
		$questions=DB::table('questions')
		->join('options','questions.id','=','options.question_id')
		->join('corrects','questions.id','=','corrects.question_id')
		->select('questions.*','options.*','corrects.*')
		->orderBy('questions.id','desc')
		->paginate(10);
		if($questions){
			return $questions;
		}
		else{
			return response()->json(['message'=>'failure']);
		}
		
	}
	public function showsolution($userid){
		
		$solution=DB::table('questions')
		->join('options','options.question_id','=','questions.id')
		->join('studentanswers','studentanswers.question_id','=','questions.id')
		->where('studentanswers.user_id','=',$userid)
		->distinct('questions.id')
		->paginate(5);
		return $solution;
		
	}
	public function countquestion(){
		
		$questioncount=question::count('id');
		
		return response()->json($questioncount);
	}
	public function displayquestionjson($skip){
		
		$questionall=DB::table('questions')
		->join('options','questions.id','=','options.question_id')
		->join('corrects','questions.id','=','corrects.question_id')
		->select('questions.*','options.*','corrects.*')
		->orderBy('questions.id','asc')
		->skip($skip)->take(5)
		->get();
		return response()->json($questionall);
	}
	
	//get question by id
	public function getquestionbyid($id){
		
		$questions=DB::table('questions')
		->join('options','questions.id','=','options.question_id')
		->join('corrects','questions.id','=','corrects.question_id')
		->select('questions.*','options.*','corrects.*')
		->where('questions.id','=',$id)
		->where('options.question_id','=',$id)
		->where('corrects.question_id','=',$id)
		->get();
		if($questions){
			return response()->json($questions);
		}
		else{
			return response()->json(['message'=>'failure']);
		}
		
	}
	
	public function deletequestion($id){
		
		$question=question::find($id);
		$question->delete();
		$option=option::where('question_id',$id);
		$option->delete();
		$correct=correct::where('question_id',$id);
		$correct->delete();
		
		return response()->json(['message'=>'successfully deleted question']);
	}
	//view all result
	public function viewresult(){
		$viewresult=DB::table('users')
		->join('results','results.user_id','=','users.id')
		->orderBy('results.score','desc')
		->paginate(3);
		return $viewresult;
		
	}
	/** function selectcorrect($option){
		$checkcorrect=corrects::where('question_id',$questionid);
		
	} **/
	//get correct option
	public function getcorrect($questionid){
		
	 $getcorrect=correct::where('question_id',$questionid)
				->get();
			foreach($getcorrect as $option){
				
				return $option->correctoption;
			}
	
	}
	//get current users score
	public function getscore($userid){
		$score=result::where('user_id',$userid)
		->get();
		foreach($score as $myscore){
			
			return $myscore->score;
		}
		
	}
	public function resetanswer($userid){
		
		try{
		$delectselectedoption=studentanswer::where('user_id',$userid);
		$delectselectedoption->delete();
		
			$delectresult=result::where('user_id',$userid);
		$delectresult->delete();
		return response()->json(['message'=>'success']);
		}
		catch(\Exception $e){
			
			return response()->json(['message'=>'failure']);
		}
		
	}
	
	public function submitanswer(array $data,$questionid,$selectedoption,$userid){
		
		try{
			
			$checkcorrect=questionrepo::getcorrect($questionid);
			$getscore=questionrepo::getscore($userid);
			if($checkcorrect==$selectedoption){
				
				
				
				if($getscore==""){
					
					$createresult=result::create(['user_id'=>$userid,'score'=>1]);
				}
				else {
					
				$myscore=$getscore+1;
				$updateresult=result::where('user_id',$userid)
				->update(['score'=>$myscore]);
				}
			}
		/* 	else{
				
				$checkifalreadyanswer=studentanswer::where('question_id',$questionid);
				foreach($checkifalreadyanswer as $getselectedoption){
					$checkexist=$getselectedoption->selectedoption;	
				}
				if($checkexist!=""){
				
					if($getscore!=""){
						$myscore=$getscore-1;
						$updateresult=result::where('user_id',$userid)
					->update(['score'=>$myscore]);
					}
				
				}
				
			} */
			
		$submitanswer=studentanswer::create($data);
			return response()->json(['message'=>'success']);
		}
		catch(\Exception $e){
			try{
			$updateanswer=studentanswer::where('question_id',$questionid)
			->update($data);
					return response()->json(['message'=>'success']);
			}
			catch(\Exception $e){
				return response()->json(['message'=>'failure']);
			}
			
		
		}
	}
	
	public function getmyresult($id){
		$gettheresult=result::where('user_id',$id)
		->select('score')
		->get();
		return response()->json($gettheresult);
		
		
	}
}







