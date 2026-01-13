<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Admin Users') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-12xl mx-auto sm:px-12 lg:px-12">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold">Admin User List</h3>
                        <a href="{{ route('admin.users.create') }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add New Admin
                        </a>
                    </div>

                    @if (session('success'))
                        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <span class="block sm:inline">{{ session('success') }}</span>
                        </div>
                    @endif
                    @if (session('error'))
                        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                            <span class="block sm:inline">{{ session('error') }}</span>
                        </div>
                    @endif

                    <table class="min-w-full bg-white">
                        <thead class="bg-gray-800 text-white">
                            <tr>
                                <th class="w-2/3 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">
                            @foreach ($users as $user)
                                <tr>
                                    <td class="w-2/3 text-left py-3 px-4">{{ $user->email }}</td>
                                    <td class="text-left py-3 px-4">
                                        <a href="{{ route('admin.users.edit', $user->id) }}" class="text-blue-500 hover:text-blue-700">Edit</a>
                                        @if(auth()->id() !== $user->id)
                                            <form action="{{ route('admin.users.destroy', $user->id) }}" method="POST" class="inline-block" onsubmit="return confirm('Are you sure you want to delete this admin?');">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="text-red-500 hover:text-red-700 ml-4">Delete</button>
                                            </form>
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</x-admin-layout>
