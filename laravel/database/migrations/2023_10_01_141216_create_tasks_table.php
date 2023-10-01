<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTasksTable extends Migration
{
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->timestamp('created_at')->useCurrent();
            $table->string('state');
            $table->string('creator_name');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}

