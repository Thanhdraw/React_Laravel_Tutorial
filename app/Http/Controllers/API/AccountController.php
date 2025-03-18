<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    //
    public function login(Request $request)
    {
        $credential = $request->validate([
            'email' => "required|email",
            'password' => "required"
        ]);
        if (Auth::attempt($credential)) {
            $user = Auth::user();
            $role = $user->roles->pluck('name')->first();
            return response()->json([
                'message' => 'Login Success ',
                'user' => [
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => $role,
                ],
            ]);
        }
        return response()->json(['message' => 'Error Your infomation not match ❗']);
    }
}
