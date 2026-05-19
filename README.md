#  Lead Distribution System

A full-stack Lead Distribution Platform , designed to simulate a real-world provider allocation system.  Customers can submit service enquiries, and the platform automatically stores and distributes leads fairly among providers using intelligent business rules. 

The system implements round-robin lead allocation, monthly quota management, duplicate lead prevention, webhook idempotency, and real-time dashboard updates.  Every lead is safely processed using MongoDB transactions to ensure concurrency-safe operations and database consistency. 

The project also includes a live provider dashboard, webhook testing tools, concurrent lead generation testing, and full cloud deployment using Vercel and MongoDB Atlas.  The focus of this project is backend correctness, scalability, fairness, and real-world engineering reliability rather than complex UI design. 

---

# Live Demo

https://lead-distribution-system-xi.vercel.app


#  Project Links

##  Frontend (Live Application)

```txt
https://lead-distribution-system-xi.vercel.app
```

---



---

##  Dashboard Route

```txt
https://lead-distribution-system-xi.vercel.app/dashboard
```

---

##  Request Service Route

```txt
https://lead-distribution-system-xi.vercel.app/request-service
```

---

##  Test Tools Route

```txt
https://lead-distribution-system-xi.vercel.app/test-tools
```

---

# GitHub Repository


https://github.com/barsha20061001/lead-distribution-system

---

# Tech Stack

```txt
Frontend : Next.js + React + Tailwind CSS
Backend  : Next.js API Routes
Database : MongoDB Atlas
Deployment : Vercel
```

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

#  Features Implemented

##  Public Customer Lead Form
- Customer enquiry submission form
- Stores leads in MongoDB database
- Automatic provider assignment after submission
- Service selection dropdown
- Input validation

---

##  Duplicate Lead Prevention
- Same phone number cannot create duplicate lead for same service
- Database-level duplicate protection
- Allows same number for different services

---

##  Smart Lead Distribution System
- Exactly 3 providers assigned per lead
- Mandatory provider rules implemented
- Fair provider allocation
- Persistent allocation logic
- No duplicate provider assignment

---

##  Fair Round-Robin Allocation
- Non-random provider selection
- Round-robin distribution logic
- Allocation state stored in database
- Fair load balancing between providers
- Continues correctly after server restart

---

##  Provider Dashboard
- Real-time provider monitoring
- Displays:
  - Total quota
  - Used quota
  - Remaining quota
  - Assigned leads
- Live database data display

---

## Real-Time Dashboard Updates
- Dashboard updates automatically
- No manual page refresh needed
- Implemented using polling
- Detects newly assigned leads instantly

---

##  Monthly Provider Quota Management
- Every provider has monthly quota
- Quota automatically decreases on assignment
- Prevents exceeding quota limit
- Remaining quota tracking

---

##  Concurrency-Safe Lead Assignment
- Handles simultaneous lead creation safely
- MongoDB transaction support
- Mongoose session handling
- Prevents inconsistent assignments

---
 

#  Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/lead-distribution-system.git
```

```bash
cd lead-distribution-system
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Create Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
```

Example:

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/lead-distribution-system?retryWrites=true&w=majority
```

---

### 4. Start the Development Server

```bash
npm run dev
```

Frontend runs at:

```txt
http://localhost:3000
```

---

### 5. Seed Initial Data

Open this URL once in browser:

```txt
http://localhost:3000/api/seed
```

This automatically creates:

-  Services
-  Providers
-  Initial allocation states

---

### 6. Test Database Connection

```txt
http://localhost:3000/api/test-db
```

Expected response:

```json
{
  "success": true,
  "message": "MongoDB connected successfully"
}
```

---

## Application Routes

###  Customer Request Form

```txt
http://localhost:3000/request-service
```

###  Provider Dashboard

```txt
http://localhost:3000/dashboard
```

###  Test Tools

```txt
http://localhost:3000/test-tools
```

---

#  Vercel Deployment

### 1. Push Code to GitHub

```bash
git add .
git commit -m "Initial Commit"
git push
```

---

### 2. Import Repository into Vercel

- Open Vercel
- Click **Add New Project**
- Import GitHub repository
- Configure project

---

### 3. Add Environment Variable

Add this in Vercel Project Settings → Environment Variables:

```env
MONGODB_URI=your_mongodb_connection_string
```

---

### 4. Redeploy Project

After adding environment variables:

```txt
Deployments → Redeploy
```

---

### 5. Seed Production Database

Open once after deployment:

```txt
https://your-live-url.vercel.app/api/seed
```



---

 

#  Important Notes

- Add `0.0.0.0/0` in MongoDB Atlas Network Access.
- Do NOT upload `.env.local` to GitHub.
- Run `/api/seed` before testing dashboard.
- MongoDB Atlas cluster must remain active.
- Dashboard updates automatically after lead assignments.






