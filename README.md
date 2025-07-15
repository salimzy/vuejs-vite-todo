# Todo List App 📝

A modern, responsive todo list application built with Vue 3, Vite, Tailwind CSS, and Supabase for backend functionality.

![Todo App Screenshot](https://github.com/salimzy/vitejs-vite-todo/blob/main/public/Screenshot_14-7-2025_154243_localhost.jpeg?raw=true) 

## Features ✨

- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete
- ✅ Filter todos (All/Active/Completed)
- ✅ Real-time sync via Supabase
- 📱 Fully responsive design
- 🔒 User authentication (optional)
- 🚀 Blazing fast with Vite

## Technologies Used 🛠️

- **Frontend**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL database)
- **Deployment**: Netlify/Vercel
  
## Live Demo 🌐

[View Live Demo](https://vitejs-vite-todo-git-feature-new-todo-feature-salimzys-projects.vercel.app/)

## Project Setup 🚀

### 1. Clone the repository
```bash
git clone https://github.com/salimzy/vitejs-vite-todo
cd todo-app
cp .env.example .env
// install a dependency
npm install && npm run dev
```

###2. setting up a environment file
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_KEY=your-supabase-key
```
4. Run development server
```bash
npm run dev ```

5. Build for production
```bash
npm run build ```
### Supabase Setup 🔌
Create a new project at Supabase
Create a todos table with these columns:

``id (UUID, primary key)``

```text (text)```
```
completed (boolean)```
```
created_at (timestamp, default now())```

Enable Row-Level Security (RLS) if needed

### Folder Structure 📂
```text
src/
├── assets/          # Static assets
|   |── supabase.js      # Supabase client
├── components/      # Vue components
│   └── TodoItem.vue # Single todo item
|
├── App.vue          # Main component
└── main.js          # Vue entry point
```
### Available Scripts 📜
```bash
 npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build
 ```

### Contributing 🤝
Fork the project

-Create your feature branch (git checkout -b feature/AmazingFeature)

-Commit your changes (git commit -m 'Add some AmazingFeature')

-Push to the branch (git push origin feature/AmazingFeature)

- Open a Pull Request

### License 📄
This project is licensed under the MIT License - see the LICENSE file for details.

Made with ❤️ by Salimzy



