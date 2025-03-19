<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
class AccountController extends Controller
{
    //
    public function login(Request $request)
    {
        Log::info('Login request received', $request->all()); // Ghi log dữ liệu gửi lên

        try {
            $credentials = $request->validate([
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if (Auth::attempt($credentials)) {
                Log::info('Auth::attempt success');
                $user = Auth::user();
                Log::info('User after login:', ['user' => $user]);

                if (!$user) {
                    return response()->json(['message' => 'Error: User not found ❗'], 401);
                }

                $role = optional($user->roles)->pluck('name')->first() ?? 'No Role Assigned';

                return response()->json([
                    'message' => 'Login Success ',
                    'user' => [
                        'name' => $user->name,
                        'email' => $user->email,
                        'role' => $role,
                    ],
                ]);
            }

            Log::warning('Login failed: Invalid credentials');
            return response()->json(['message' => 'Error: Your information does not match ❗'], 401);

        } catch (\Throwable $th) {
            Log::error('Login Error: ' . $th->getMessage()); // Ghi log lỗi
            return response()->json(['error' => 'Internal Server Error', 'message' => $th->getMessage()], 500);
        }
    }

    public function Register(Request $request)
    {
        try {
            Log::info($request->all());
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:6|confirmed'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error' => 'Validation failed',
                    'message' => $validator->errors()
                ], 422);
            }
            // Log::info(dd($request->all()));
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);

            return response()->json([
                'message' => 'User registered successfully!',
                'user' => $user
            ], 201);

        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Register Fail',
                'message' => $th->getMessage()
            ]);
        }

    }
}
