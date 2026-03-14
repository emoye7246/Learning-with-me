export const lessonCapstoneAndroidApp = {
  id: "capstone-android-app",
  title: "Capstone: Android Application",
  hasChallenge: false,
  article: `
## Capstone: Android Application

This is your capstone project for the Android Development track.

You will build a complete, functional Android application — one that runs on a real device (or emulator), has a working UI, persists data between sessions, and demonstrates the core skills of Android development.

This is the project you put in your portfolio. It should be something you're proud to show.

---

## Project Brief

Build an Android app that solves a real problem or provides genuine value to a user. The app should have multiple screens, accept user interaction, and remember data between sessions.

Good scope: a focused utility app with 2–4 screens. Don't try to build the next Instagram. Build something small that works completely.

---

## Requirements

Your project must meet every requirement below before it can be considered complete.

### Working UI
- [ ] The app has **at least 2 screens** with navigation between them
- [ ] At least one screen has a **list** that displays dynamic data (RecyclerView or Compose LazyColumn)
- [ ] The app responds to user input: button taps, text entry, list item clicks
- [ ] The UI renders correctly on both **portrait and landscape** orientation
- [ ] There are no visible crashes on the happy path

### Data Persistence
- [ ] Data is persisted to **Room** (SQLite) — the app remembers its data between sessions
- [ ] The Room schema includes at least **one entity** with at least 4 fields
- [ ] A DAO provides at least: insert, query all, and delete
- [ ] Data is accessed through a **ViewModel** — no direct database calls from Activities or Fragments

### Architecture
- [ ] The app uses the **ViewModel + LiveData** (or StateFlow) pattern
- [ ] Activities/Fragments only handle UI — no business logic or database code directly in them
- [ ] The app does not crash on screen rotation

### Testing
- [ ] There is at least **one instrumented test** that verifies a DAO operation (insert → query → verify)
- [ ] There is at least **one unit test** for ViewModel or business logic
- [ ] Tests pass when run with \`./gradlew test\` and \`./gradlew connectedAndroidTest\`

### GitHub History
- [ ] At least **10 meaningful commits**
- [ ] The repository includes a \`.gitignore\` that excludes build artifacts (\`/build\`, \`/.gradle\`, etc.)
- [ ] No large generated files are committed

---

## Getting Started: Android Studio Setup

1. Open Android Studio and select "New Project"
2. Choose "Empty Activity" or "Empty Compose Activity" (if using Jetpack Compose)
3. Set your minimum SDK to API 26 (Android 8.0) for broad compatibility
4. Add these dependencies to your \`build.gradle (Module)\`:

\`\`\`groovy
dependencies {
    // Room
    implementation "androidx.room:room-runtime:2.6.1"
    annotationProcessor "androidx.room:room-compiler:2.6.1"
    implementation "androidx.room:room-ktx:2.6.1"

    // ViewModel and LiveData
    implementation "androidx.lifecycle:lifecycle-viewmodel:2.7.0"
    implementation "androidx.lifecycle:lifecycle-livedata:2.7.0"

    // RecyclerView
    implementation "androidx.recyclerview:recyclerview:1.3.2"

    // Testing
    testImplementation "junit:junit:4.13.2"
    androidTestImplementation "androidx.room:room-testing:2.6.1"
    androidTestImplementation "androidx.test.ext:junit:1.1.5"
    androidTestImplementation "androidx.test.espresso:espresso-core:3.5.1"
}
\`\`\`

### Minimal Room Setup

\`\`\`java
// Entity
@Entity(tableName = "notes")
public class Note {
    @PrimaryKey(autoGenerate = true)
    public long id;

    @ColumnInfo(name = "title")
    public String title;

    @ColumnInfo(name = "body")
    public String body;

    @ColumnInfo(name = "created_at")
    public long createdAt;
}

// DAO
@Dao
public interface NoteDao {
    @Query("SELECT * FROM notes ORDER BY created_at DESC")
    LiveData<List<Note>> getAllNotes();

    @Insert
    void insert(Note note);

    @Delete
    void delete(Note note);
}

// Database
@Database(entities = {Note.class}, version = 1)
public abstract class AppDatabase extends RoomDatabase {
    public abstract NoteDao noteDao();

    private static AppDatabase instance;

    public static synchronized AppDatabase getInstance(Context context) {
        if (instance == null) {
            instance = Room.databaseBuilder(
                context.getApplicationContext(),
                AppDatabase.class,
                "app_database"
            ).build();
        }
        return instance;
    }
}
\`\`\`

### ViewModel

\`\`\`java
public class NoteViewModel extends AndroidViewModel {

    private final NoteDao noteDao;
    private final LiveData<List<Note>> allNotes;

    public NoteViewModel(Application application) {
        super(application);
        AppDatabase db = AppDatabase.getInstance(application);
        noteDao = db.noteDao();
        allNotes = noteDao.getAllNotes();
    }

    public LiveData<List<Note>> getAllNotes() {
        return allNotes;
    }

    public void insert(Note note) {
        AppDatabase.databaseWriteExecutor.execute(() -> noteDao.insert(note));
    }

    public void delete(Note note) {
        AppDatabase.databaseWriteExecutor.execute(() -> noteDao.delete(note));
    }
}
\`\`\`

### Observing in a Fragment

\`\`\`java
viewModel = new ViewModelProvider(this).get(NoteViewModel.class);

viewModel.getAllNotes().observe(getViewLifecycleOwner(), notes -> {
    adapter.submitList(notes);
    emptyStateView.setVisibility(notes.isEmpty() ? View.VISIBLE : View.GONE);
});
\`\`\`

---

## Example App Ideas

**Note-taking app** — create, edit, delete notes; search by title; sort by date.

**Habit tracker** — daily habits, streak counter, completion history.

**Budget tracker** — log expenses by category, monthly totals, simple chart.

**Workout log** — exercises, sets/reps, history by date.

**Reading list** — add books, track reading status, star favorites.

**Timer app** — multiple named timers, notification when complete, history of sessions.

---

## Completion Checklist

- [ ] App runs on an emulator or real device without crashing
- [ ] All screens navigate correctly
- [ ] Data persists when the app is closed and reopened
- [ ] Screen rotation doesn't lose data or crash the app
- [ ] Tests run and pass
- [ ] README explains: what the app does, how to build and run it, screenshots if possible
- [ ] Git history is clean and shows iterative progress

---

## Tips

**Use a repository class** to separate your ViewModel from the DAO. It makes testing easier and keeps your ViewModel clean.

**Test your DAO in isolation.** Room provides a test database that runs in-memory:

\`\`\`java
@RunWith(AndroidJUnit4.class)
public class NoteDaoTest {

    private AppDatabase db;
    private NoteDao dao;

    @Before
    public void setUp() {
        db = Room.inMemoryDatabaseBuilder(
            ApplicationProvider.getApplicationContext(),
            AppDatabase.class
        ).build();
        dao = db.noteDao();
    }

    @After
    public void tearDown() {
        db.close();
    }

    @Test
    public void insertAndRetrieveNote() throws InterruptedException {
        Note note = new Note();
        note.title = "Test note";
        note.body = "Test body";
        note.createdAt = System.currentTimeMillis();
        dao.insert(note);

        List<Note> notes = LiveDataTestUtil.getValue(dao.getAllNotes());
        assertEquals(1, notes.size());
        assertEquals("Test note", notes.get(0).title);
    }
}
\`\`\`

---

## What You Learned

Completing this project means you can:

- Build a multi-screen Android application
- Persist data locally with Room
- Implement the ViewModel + LiveData architecture pattern
- Write instrumented tests for Android components
- Navigate Android Studio and manage a Gradle-based project

These are the skills evaluated in every Android developer interview. An app on your phone — or in the Play Store — is the most convincing portfolio item you can have.
`,
};
