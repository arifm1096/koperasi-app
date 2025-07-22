<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RuteController extends Controller
{
    public function index()
    {
        return Inertia::render('Rute');
    }

    public function create()
    {
        return Inertia::render('Rute/Create');
    }

    public function edit($id)
    {
        return Inertia::render('Rute/Edit', ['id' => $id]);
    }
}
