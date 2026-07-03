# 🚀 Feedback Management System

A full-stack Feedback Management System built using **Next.js**, **Express.js**, **Supabase PostgreSQL**, and **Prisma ORM**.

The application allows users to submit feedback while providing administrators with a modern dashboard to manage and analyze submissions.

---

## 📸 Screenshots

> Add screenshots after deployment.

- Home Page
- Feedback Form
- Admin Dashboard
- Analytics
- Categories

---

## ✨ Features

### Public Feedback Form

- Submit feedback
- Select category
- Optional email (anonymous feedback supported)
- Client-side validation
- Responsive UI

### Admin Dashboard

- Dashboard overview
- Total feedback statistics
- Category distribution
- Search feedback
- Filter by category
- Recent submissions

### Analytics

- Pie Chart
- Bar Chart
- Category distribution

### Categories

- Category-wise feedback
- Percentage distribution
- Summary cards

### Settings

- Admin settings page
- Ready for future enhancements

---

# 🛠 Tech Stack

## Frontend

- Next.js (App Router)
- React.js
- Tailwind CSS
- Fetch API
- Recharts
- Lucide React

## Backend

- Express.js
- Prisma ORM
- Supabase PostgreSQL
- JWT
- Zod Validation

---

# 📁 Project Structure

```
feedback-management-system/

├── frontend/
│
├── backend/
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/feedback-management-system.git
```

```bash
cd feedback-management-system
```

---

## Backend

```bash
cd backend
```

Install packages

```bash
npm install
```

Create `.env`

```env
DATABASE_URL=your_database_url
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your_secret
```

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Start backend

```bash
npm run dev
```

---

## Frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Run frontend

```bash
npm run dev
```

---

# 🌐 API Endpoints

## Feedback

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /api/feedback | Submit Feedback |
| GET | /api/feedback | Get All Feedback |

---

## Analytics

| Method | Endpoint |
|----------|----------|
| GET | /api/analytics |

---

## Health

| Method | Endpoint |
|----------|----------|
| GET | /api/health |

---

# 🚀 Deployment

## Frontend

Vercel

## Backend

Render

## Database

Supabase PostgreSQL

---

# 👨‍💻 Author

**Vishal Gaurav**

Full Stack Developer

- React.js
- Next.js
- Express.js
- Node.js
- Prisma
- PostgreSQL
- Supabase

---

# 📄 License

This project is created for learning and machine test purposes.