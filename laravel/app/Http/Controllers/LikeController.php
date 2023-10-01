<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use App\Like;

class LikeController extends Controller
{
    // Otorgar un "like" a una tarea
    public function like(Task $task)
    {
        $like = new Like();
        $task->likes()->save($like);

        return response()->json(['message' => 'Se agrego un like.']);
    }
}
