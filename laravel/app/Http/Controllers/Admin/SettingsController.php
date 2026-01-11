<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;
use Illuminate\Support\Facades\Storage;

class SettingsController extends Controller
{
    public function websiteSettings()
    {
        $settings = Setting::all()->pluck('value', 'key')->toArray();
        return view('admin.settings.website', compact('settings'));
    }

    public function updateWebsiteSettings(Request $request)
    {
        $request->validate([
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        $settings = $request->except('_token', 'logo');

        if ($request->hasFile('logo')) {
            $oldLogoPath = Setting::where('key', 'logo')->value('value');
            if ($oldLogoPath) {
                Storage::disk('public')->delete($oldLogoPath);
            }
            $path = $request->file('logo')->store('logos', 'public');
            Setting::updateOrCreate(
                ['key' => 'logo', 'value' => $path],
            );
        }

        foreach ($settings as $key => $value) {
            if($value === null) continue;
            Setting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
