<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use App\Like;

class TaskController extends Controller
{
    // Mostrar lista de tareas
    public function index()
    {
        $tasks = Task::withCount('likes')->get();

        return response()->json($tasks);
    }

    // Crear nueva tarea
    public function store(Request $request)
    {
        $request->validate([
            'title'         => 'required|string',
            'description'   => 'required|string',
            'date'          => 'required|date',
            'state'         => 'required|string',
            'creator_name'  => 'required|string',
        ]);

        $task = Task::create($request->all());

        return response()->json($task, 201);
    }

    // Borrar tarea
    public function destroy(Task $task)
    {
        // Verificar la tarea tiene likes
        if ($task->likes()->count() > 0) {
            return response()->json(['message' => 'No se puede borrar una tarea con likes.'], 401);
        }

        $task->delete();

        return response()->json(['message' => 'Tarea borrada.']);
    }
}
