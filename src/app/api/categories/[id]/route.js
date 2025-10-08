
import { NextResponse } from 'next/server';

let categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Books' },
];

export async function GET(request, { params }) {
  const category = categories.find((c) => c.id === parseInt(params.id));
  if (category) {
    return NextResponse.json(category);
  } else {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }
}

export async function PUT(request, { params }) {
  const { name } = await request.json();
  const categoryIndex = categories.findIndex((c) => c.id === parseInt(params.id));
  if (categoryIndex !== -1) {
    categories[categoryIndex].name = name;
    return NextResponse.json(categories[categoryIndex]);
  } else {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }
}

export async function DELETE(request, { params }) {
  const categoryIndex = categories.findIndex((c) => c.id === parseInt(params.id));
  if (categoryIndex !== -1) {
    categories.splice(categoryIndex, 1);
    return new NextResponse(null, { status: 204 });
  } else {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }
}
