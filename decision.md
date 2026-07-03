# About Project:

### URL of admin panel:
##### Project URL:https://feedback-management-system-35hs.vercel.app/
##### Dashboard: https://feedback-management-system-35hs.vercel.app/admin/dashboard
##### Feedback: https://feedback-management-system-35hs.vercel.app/admin/feedback
##### Analytics: https://feedback-management-system35hs.vercel.app/admin/analytics
##### Category: https://feedback-management-system-35hs.vercel.app/admin/settings
##### Github: https://github.com/Gauravbvishal/feedback-management-system
##### Frontend: Vercel
##### Backend: Render
##### Database: supabase

# Engineering Decision Log


## 1. Why did you choose this technology stack?

I chose **Next.js** for the frontend because it provides an excellent developer experience with React, supports modern routing, and makes it easy to build scalable applications. It also offers optimized performance and a clean project structure.

For the backend, I chose **Express.js** because it is lightweight, flexible, and allows rapid API development. Since I am comfortable with JavaScript across both frontend and backend, using the same language throughout the stack reduced development complexity.

Overall, this stack allows faster development, easier debugging, and better maintainability.

---

## 2. Why did you choose this database?

I chose **MongoDB** because the application stores relatively flexible business data where a document-oriented structure fits naturally.

The advantages include:
- Flexible schema for evolving requirements.
- Fast development without complex migrations.
- Easy integration with Node.js using Mongoose.
- Good scalability for future growth.

For this assignment, MongoDB allowed me to focus more on business logic rather than database schema management.

---

## 3. Why did you structure your application this way?

I separated the application into **frontend** and **backend** to follow a clean client-server architecture.

Backend folders are organized by responsibility:

- **Routes** → API endpoints
- **Controllers** → Business logic
- **Models** → Database models
- **Middleware** → Authentication and validation
- **Config** → Database and environment configuration

The frontend is organized into reusable components, pages, hooks, and utility functions to improve readability and future maintainability.

This structure makes it easier to extend features without affecting unrelated parts of the application.

---

## 4. What trade-offs did you make due to time constraints?

Given the limited time, I prioritized delivering a complete, working application over implementing every production-level feature.

Some trade-offs included:

- Basic authentication instead of role-based permissions.
- Minimal automated testing.
- Basic error handling.
- Limited API validation.
- Simple UI instead of extensive polish.
- No caching or advanced performance optimizations.

These decisions helped ensure the core functionality was stable and complete.

---

## 5. What would you improve if you had one more week?

With an additional week, I would focus on production readiness.

Improvements would include:

- Comprehensive unit and integration tests.
- Better form validation.
- API documentation using Swagger/OpenAPI.
- Role-based authorization.
- Pagination, filtering, and searching.
- Better logging and monitoring.
- Docker support.
- CI/CD pipeline.
- Performance optimization.
- Better responsive UI and accessibility improvements.

---

## 6. What was the most difficult technical challenge you faced?

The biggest challenge was designing a clean communication flow between the frontend and backend while keeping the project modular.

Handling API integration, managing asynchronous requests, validating user input, and maintaining proper separation of concerns required careful planning.

Another challenge was ensuring consistent error handling across different layers of the application.

---

## 7. Which AI tools did you use?

I primarily used:

- ChatGPT
- GitHub Copilot

These tools helped with debugging, understanding documentation, generating boilerplate code, and reviewing implementation ideas.

---

## 8. Share one instance where AI helped you.

While implementing the backend API, I used ChatGPT to better understand Express middleware organization and project structure.

Rather than copying code directly, I used its explanations to improve my understanding and then implemented the solution according to the project's requirements.

This significantly reduced development time while helping me learn better architectural practices.

---

## 9. Share one instance where you disagreed with AI and why.

At one point, AI suggested combining multiple responsibilities inside a single controller to reduce the number of files.

I chose not to follow that approach because I preferred separating controllers, routes, and business logic into different modules.

Although it required writing more files, the resulting codebase became easier to maintain, test, and extend.

---

## 10. What would break first if this application suddenly had 100,000 users?

The backend would likely become the primary bottleneck.

Potential issues include:

- Database queries becoming slow without indexing.
- Server resources reaching their limits.
- Increased API response times.
- Lack of caching.
- Single-server deployment limitations.

To support that scale, I would introduce:

- Database indexing
- Redis caching
- Load balancing
- Horizontal scaling
- CDN for static assets
- Background job queues
- Database optimization
- Monitoring and auto-scaling

---

## 11. What is one thing in this assignment that you would improve, change, or challenge?

One improvement would be providing evaluation criteria with relative weightage.

For example:

- Architecture – 25%
- Code quality – 20%
- Functionality – 25%
- UI/UX – 15%
- Documentation – 15%

This would help candidates better prioritize their time and understand what aspects are most important during implementation.

Overall, I found the assignment well-designed because it evaluates both technical implementation and engineering decision-making rather than focusing only on feature completion.