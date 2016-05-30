<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class studentanswer extends Model {

	//
	protected $fillable=['user_id','question_id','selectedoption'];
}
