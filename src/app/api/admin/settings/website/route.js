import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../api/auth/[...nextauth]/route"; // Adjust path as needed
import multer from 'multer';
import path from 'path';
import fs from 'fs/promises';

// Ensure the uploads directory exists
const uploadDir = path.join(process.cwd(), 'public/uploads');
fs.mkdir(uploadDir, { recursive: true }).catch(console.error);

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Helper to run Multer middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  try {
    // Convert Next.js Request to Node.js compatible request for Multer
    const req = request.clone();
    const res = new NextResponse(); // Dummy response object for Multer

    await runMiddleware(req, res, upload.single('logo'));

    // Access file from req.file after Multer processes it
    const file = req.file;

    if (file) {
      // Save logo path to database or configuration (e.g., a new Setting model)
      // For now, just return the path
      const logoPath = `/uploads/${file.filename}`;
      return NextResponse.json({ message: 'Logo uploaded successfully', logoPath }, { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ message: 'No file uploaded' }), { status: 400 });
    }
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Failed to upload logo', error: error.message }), { status: 500 });
  }
}
