# 🚀 Lead Distribution System

A full-stack Lead Distribution Platform , designed to simulate a real-world provider allocation system. 👨‍💻⚡ Customers can submit service enquiries, and the platform automatically stores and distributes leads fairly among providers using intelligent business rules. 📦🎯

The system implements round-robin lead allocation, monthly quota management, duplicate lead prevention, webhook idempotency, and real-time dashboard updates. ⚖️🔄📊 Every lead is safely processed using MongoDB transactions to ensure concurrency-safe operations and database consistency. 🛡️🍃

The project also includes a live provider dashboard, webhook testing tools, concurrent lead generation testing, and full cloud deployment using Vercel and MongoDB Atlas. ☁️🚀 The focus of this project is backend correctness, scalability, fairness, and real-world engineering reliability rather than complex UI design. 🔐💡

---

# Live Demo

https://lead-distribution-system-xi.vercel.app

---

# GitHub Repository


https://github.com/barsha20061001/lead-distribution-system

---

# Tech Stack

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

## Backend
- Next.js API Routes
- MongoDB Atlas
- Mongoose

## Deployment
- Vercel

---

# ✨ Features Implemented

## 📝 Public Customer Lead Form
- Customer enquiry submission form
- Stores leads in MongoDB database
- Automatic provider assignment after submission
- Service selection dropdown
- Input validation

---

## 🚫 Duplicate Lead Prevention
- Same phone number cannot create duplicate lead for same service
- Database-level duplicate protection
- Allows same number for different services

---

## 🎯 Smart Lead Distribution System
- Exactly 3 providers assigned per lead
- Mandatory provider rules implemented
- Fair provider allocation
- Persistent allocation logic
- No duplicate provider assignment

---

## ⚖️ Fair Round-Robin Allocation
- Non-random provider selection
- Round-robin distribution logic
- Allocation state stored in database
- Fair load balancing between providers
- Continues correctly after server restart

---

## 📊 Provider Dashboard
- Real-time provider monitoring
- Displays:
  - Total quota
  - Used quota
  - Remaining quota
  - Assigned leads
- Live database data display

---

## 🔄 Real-Time Dashboard Updates
- Dashboard updates automatically
- No manual page refresh needed
- Implemented using polling
- Detects newly assigned leads instantly

---

## 📦 Monthly Provider Quota Management
- Every provider has monthly quota
- Quota automatically decreases on assignment
- Prevents exceeding quota limit
- Remaining quota tracking

---

## 🔐 Concurrency-Safe Lead Assignment
- Handles simultaneous lead creation safely
- MongoDB transaction support
- Mongoose session handling
- Prevents inconsistent assignments

---

# ⚙️ Setup Instructions

Follow the steps below to run this project locally.

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/lead-distribution-system.git
cd lead-distribution-system
2️⃣ Install Dependencies
npm install
3️⃣ Create Environment File

Create a file named .env.local in the root folder of the project.

.env.local

Add your MongoDB Atlas connection string:

MONGODB_URI=your_mongodb_connection_string

Example:

MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/lead-distribution-system?retryWrites=true&w=majority
4️⃣ Run the Development Server
npm run dev

Open the project in browser:

http://localhost:3000
5️⃣ Seed the Database

Open this URL once in browser:

http://localhost:3000/api/seed

This will automatically insert:

Service 1
Service 2
Service 3
Provider 1 to Provider 8
Initial allocation states
6️⃣ Test Main Routes
📝 Customer Request Form
http://localhost:3000/request-service
📊 Provider Dashboard
http://localhost:3000/dashboard
🧪 Testing Panel
http://localhost:3000/test-tools
7️⃣ Test Database Connection
http://localhost:3000/api/test-db

Expected response:

{
  "success": true,
  "message": "MongoDB connected successfully"
}
8️⃣ Build the Project
npm run build
9️⃣ Start Production Build Locally
npm start
🔟 Deploy on Vercel
Push the project to GitHub.
Import the GitHub repository into Vercel.
Add the environment variable in Vercel:
MONGODB_URI=your_mongodb_connection_string
Deploy the project.
After deployment, run the seed route once:
https://your-live-url.vercel.app/api/seed



















This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
