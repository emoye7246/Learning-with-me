export const lessonTrackBackendApis = {
  id: "track-backend-apis",
  title: "Track: Backend APIs with Spring Boot",
  hasChallenge: false,
  article: `
## Track: Backend APIs with Spring Boot

Spring Boot is the most widely-used Java framework in the world. If you work as a Java developer at a product company, a startup, or an enterprise, there is a very high probability that Spring Boot will be part of your stack.

This track teaches you to build the backend services that power web applications, mobile apps, and third-party integrations.

---

## What You Will Build

By the end of this track, you will have built a fully functional REST API — the kind that a real frontend or mobile app could talk to.

A sample project: **a personal task management API** with:
- User registration and login
- CRUD operations for tasks (create, read, update, delete)
- Task filtering by status, due date, and priority
- Proper HTTP status codes and error responses
- Persistence to a real database (PostgreSQL or H2 for development)

This is the type of project that belongs in your portfolio. It demonstrates every skill an employer looks for in a backend developer.

---

## Key Concepts You Will Learn

### REST Architecture
REST (Representational State Transfer) is the standard design pattern for web APIs. You'll learn:
- What makes an API "RESTful"
- URL design (resources, not actions)
- HTTP verbs: GET, POST, PUT, PATCH, DELETE
- Status codes: 200, 201, 400, 404, 409, 500

### Spring Boot Controllers
Controllers receive HTTP requests and return responses:

\`\`\`java
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<TaskResponse> getAllTasks() {
        return taskService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TaskResponse createTask(@RequestBody @Valid CreateTaskRequest request) {
        return taskService.create(request);
    }

    @GetMapping("/{id}")
    public TaskResponse getTaskById(@PathVariable Long id) {
        return taskService.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable Long id) {
        taskService.delete(id);
    }
}
\`\`\`

### Services and Business Logic
The service layer contains your application's logic, separate from HTTP concerns:

\`\`\`java
@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public TaskResponse create(CreateTaskRequest request) {
        Task task = new Task();
        task.setTitle(request.title());
        task.setDueDate(request.dueDate());
        task.setStatus(TaskStatus.PENDING);
        Task saved = taskRepository.save(task);
        return TaskResponse.from(saved);
    }

    public TaskResponse findById(Long id) {
        return taskRepository.findById(id)
            .map(TaskResponse::from)
            .orElseThrow(() -> new TaskNotFoundException(id));
    }
}
\`\`\`

### Spring Data JPA and Repositories
Spring Data JPA eliminates most of the database boilerplate:

\`\`\`java
@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByStatus(TaskStatus status);

    List<Task> findByDueDateBefore(LocalDate date);

    @Query("SELECT t FROM Task t WHERE t.status = :status AND t.priority = :priority")
    List<Task> findByStatusAndPriority(TaskStatus status, Priority priority);
}
\`\`\`

### Validation and Error Handling
A real API must reject bad input and return useful error messages:

\`\`\`java
public record CreateTaskRequest(
    @NotBlank(message = "Title is required")
    @Size(max = 200, message = "Title must be 200 characters or fewer")
    String title,

    @Future(message = "Due date must be in the future")
    LocalDate dueDate,

    @NotNull(message = "Priority is required")
    Priority priority
) {}
\`\`\`

\`\`\`java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(TaskNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse handleNotFound(TaskNotFoundException ex) {
        return new ErrorResponse("NOT_FOUND", ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        String message = ex.getBindingResult().getFieldErrors().stream()
            .map(e -> e.getField() + ": " + e.getDefaultMessage())
            .collect(Collectors.joining(", "));
        return new ErrorResponse("VALIDATION_ERROR", message);
    }
}
\`\`\`

---

## Sample Project Ideas

Once you've built the task management API, try:

- **Recipe API** — ingredients, instructions, categories, search by ingredient
- **Expense tracker API** — categories, monthly summaries, budget alerts
- **Movie watchlist API** — status (watched/want-to-watch), ratings, recommendations
- **Inventory management API** — products, stock levels, reorder notifications
- **Event booking API** — events, attendees, capacity, waitlists

---

## Tools You Will Use

| Tool | Purpose |
|------|---------|
| Spring Initializr (start.spring.io) | Generate a new Spring Boot project |
| Spring Web | HTTP and REST support |
| Spring Data JPA | Database access |
| H2 / PostgreSQL | Databases (H2 for dev, Postgres for production) |
| Spring Validation | Input validation |
| Postman or curl | Manual API testing |
| Spring Boot Test + MockMvc | Automated testing |

---

## Where to Continue Learning

- **Spring's official docs:** docs.spring.io/spring-boot
- **Baeldung.com** — the best Spring tutorial site on the internet
- **"Spring in Action" by Craig Walls** — the definitive book
- **Spring Boot Reference Documentation** — verbose but complete

---

## What Comes Next

After this track, you'll be ready for:
- Building full-stack applications by pairing your API with a React or Vue frontend
- Adding authentication with Spring Security and JWT
- Deploying to cloud platforms (AWS, Railway, Render, Fly.io)
- The Enterprise Microservices track, which takes these skills further

Start with the task management API. Ship it. Put it on GitHub. Then move to the next project.
`,
};
