export const lessonCapstoneRestApi = {
  id: "capstone-rest-api",
  title: "Capstone: REST API Backend",
  hasChallenge: false,
  article: `
## Capstone: REST API Backend

This is your capstone project for the Backend APIs track.

You will build a production-quality REST API from scratch — one that handles real HTTP requests, validates input, manages a database, and returns proper responses. By the end, you will have an API that a real frontend or mobile app could talk to.

This is the type of project that hiring managers look for. It demonstrates the skills that matter on the job.

---

## Project Brief

Build a REST API for a domain of your choosing. The API should manage real data, expose multiple resources, and be robust enough that it handles bad input gracefully.

Good scope: a system with 2–3 related resources that have relationships between them (e.g., users have tasks; events have attendees; movies have reviews).

---

## Requirements

Your project must meet every requirement below before it can be considered complete.

### Endpoints
- [ ] The API has **at least 3 endpoints** (not counting health checks)
- [ ] At least one resource supports full **CRUD**: Create, Read (one + all), Update, Delete
- [ ] At least one endpoint involves a **relationship** between two resources (e.g., get all tasks for a user)
- [ ] All endpoints return correct **HTTP status codes** (200, 201, 204, 400, 404, as appropriate)

### Validation and Error Handling
- [ ] All \`POST\` and \`PUT\` request bodies are **validated** using Bean Validation (\`@NotBlank\`, \`@Size\`, \`@NotNull\`, etc.)
- [ ] Validation errors return a \`400 Bad Request\` with a clear message listing what's wrong
- [ ] Requests for resources that don't exist return a **\`404 Not Found\`** with a descriptive message
- [ ] There is a **global exception handler** — no stack traces are returned to the client

### Data Persistence
- [ ] Data is persisted to a real database (H2 for development is fine; schema must survive restarts)
- [ ] The database schema is created by **JPA/Hibernate** from entity annotations
- [ ] Repositories use **Spring Data JPA**

### Code Structure
- [ ] The project follows the **Controller → Service → Repository** layering pattern
- [ ] Business logic lives in the service layer, not in controllers
- [ ] Entities are not returned directly from controllers — use **response DTOs** (records or classes)

### Testing
- [ ] There are **integration tests** for at least 3 API endpoints using \`MockMvc\` or \`@SpringBootTest\`
- [ ] Tests cover both happy paths and error cases (e.g., creating with invalid data, fetching non-existent ID)
- [ ] All tests pass with \`mvn test\`

### GitHub History
- [ ] At least **10 meaningful commits**
- [ ] Commit history shows incremental progress (not one large commit)

---

## Getting Started: Spring Boot Starter

Go to **start.spring.io** and generate a project with these dependencies:

- Spring Web
- Spring Data JPA
- H2 Database (for development)
- Validation
- Spring Boot DevTools (optional but helpful)

This gives you a working Spring Boot project in seconds.

### Minimal Working Endpoint

\`\`\`java
// Entity
@Entity
@Table(name = "tasks")
public class Task {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Enumerated(EnumType.STRING)
    private TaskStatus status = TaskStatus.PENDING;

    // getters and setters (or use Lombok @Data)
}

// Repository
public interface TaskRepository extends JpaRepository<Task, Long> {}

// Response DTO
public record TaskResponse(Long id, String title, String status) {
    public static TaskResponse from(Task task) {
        return new TaskResponse(task.getId(), task.getTitle(), task.getStatus().name());
    }
}

// Request DTO
public record CreateTaskRequest(
    @NotBlank(message = "Title is required") String title
) {}

// Service
@Service
public class TaskService {
    private final TaskRepository repo;
    public TaskService(TaskRepository repo) { this.repo = repo; }

    public List<TaskResponse> findAll() {
        return repo.findAll().stream().map(TaskResponse::from).toList();
    }

    public TaskResponse create(CreateTaskRequest req) {
        Task task = new Task();
        task.setTitle(req.title());
        return TaskResponse.from(repo.save(task));
    }

    public TaskResponse findById(Long id) {
        return repo.findById(id)
            .map(TaskResponse::from)
            .orElseThrow(() -> new ResourceNotFoundException("Task not found: " + id));
    }
}

// Controller
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService service;
    public TaskController(TaskService service) { this.service = service; }

    @GetMapping
    public List<TaskResponse> getAll() { return service.findAll(); }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TaskResponse create(@RequestBody @Valid CreateTaskRequest req) {
        return service.create(req);
    }

    @GetMapping("/{id}")
    public TaskResponse getById(@PathVariable Long id) { return service.findById(id); }
}

// Global exception handler
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String, String> handleNotFound(ResourceNotFoundException ex) {
        return Map.of("error", ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, Object> handleValidation(MethodArgumentNotValidException ex) {
        List<String> errors = ex.getBindingResult().getFieldErrors().stream()
            .map(e -> e.getField() + ": " + e.getDefaultMessage())
            .toList();
        return Map.of("errors", errors);
    }
}
\`\`\`

---

## Example Project Ideas

**Task management API** — users, tasks, categories; tasks belong to users; filter by status/due date.

**Recipe book API** — recipes, ingredients, tags; search by ingredient; favorite recipes.

**Event booking API** — events, attendees, capacity; register for events; check capacity limits.

**Movie watchlist API** — movies, user lists, reviews; mark as watched; filter by genre/rating.

**Expense tracker API** — expenses, categories, budgets; monthly summaries; overspending alerts.

---

## Testing Your Endpoints

Write integration tests using \`MockMvc\`:

\`\`\`java
@SpringBootTest
@AutoConfigureMockMvc
class TaskControllerTest {

    @Autowired MockMvc mockMvc;
    @Autowired ObjectMapper objectMapper;

    @Test
    void createTask_withValidRequest_returns201() throws Exception {
        var request = new CreateTaskRequest("Buy groceries");

        mockMvc.perform(post("/api/tasks")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.title").value("Buy groceries"))
            .andExpect(jsonPath("$.status").value("PENDING"));
    }

    @Test
    void createTask_withBlankTitle_returns400() throws Exception {
        var request = new CreateTaskRequest("");

        mockMvc.perform(post("/api/tasks")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
            .andExpect(status().isBadRequest())
            .andExpect(jsonPath("$.errors").isArray());
    }

    @Test
    void getTask_withNonexistentId_returns404() throws Exception {
        mockMvc.perform(get("/api/tasks/99999"))
            .andExpect(status().isNotFound());
    }
}
\`\`\`

---

## Completion Checklist

- [ ] All required endpoints are implemented and return correct status codes
- [ ] Validation rejects bad input with clear error messages
- [ ] Fetching a non-existent resource returns 404, not a stack trace
- [ ] Tests cover happy paths and error cases
- [ ] \`mvn test\` passes
- [ ] README explains: what the API does, how to run it, and lists the available endpoints
- [ ] Git history shows incremental development

---

## What You Learned

Completing this project means you can:

- Design and implement a RESTful API with real structure
- Separate concerns between controllers, services, and repositories
- Validate input and handle errors professionally
- Test API endpoints with automated integration tests
- Work with Spring Boot, Spring Data JPA, and Bean Validation

These are the exact skills evaluated in backend developer interviews and in backend code reviews at real companies.
`,
};
