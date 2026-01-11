<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;

class SettingsController extends Controller
{
    public function websiteSettings()
    {
        $settings = Setting::all()->pluck('value', 'key')->toArray();
        return view('admin.settings.website', compact('settings'));
    }

    public function updateWebsiteSettings(Request $request)
    {
        $settings = $request->except('_token');

        foreach ($settings as $key => $value) {
            Setting::where('key', $key)->update(['value' => $value]);
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
