<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Setting;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::all();
        $logoSetting = Setting::where('key', 'logo')->first();
        $logo = $logoSetting ? asset('storage/' . $logoSetting->value) : '/placeholder.jpg';
        $activeCategoryName = $request->input('category', $categories->first()->name ?? '');

        $productQuery = Product::query()->whereHas('category', function ($query) use ($activeCategoryName) {
            $query->where('name', $activeCategoryName);
        });

        $products = $productQuery->get();

        return view('home', [
            'products' => $products,
            'categories' => $categories,
            'logo' => $logo,
            'activeCategory' => $activeCategoryName,
            'searchTerm' => '',
        ]);
    }

    public function filter(Request $request)
    {
        $activeCategoryName = $request->input('category');
        $searchTerm = $request->input('search', '');

        $productQuery = Product::query()->whereHas('category', function ($query) use ($activeCategoryName) {
            $query->where('name', $activeCategoryName);
        });

        if ($searchTerm) {
            $productQuery->where('name', 'like', '%' . $searchTerm . '%');
        }

        $products = $productQuery->get();

        return view('partials.product_list', compact('products'));
    }
}
