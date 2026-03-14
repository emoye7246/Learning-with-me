export const lessonTrackAndroidDevelopment = {
  id: "track-android-development",
  title: "Track: Android Development",
  hasChallenge: false,
  article: `
## Track: Android Development

Android powers over three billion active devices. When you build an Android app, you're building something that real people can download, use, and share — today, with the skills you already have.

This track takes your Java knowledge into mobile development. You'll learn to build apps with real UIs, real data, and real interactions.

---

## What You Will Build

A sample capstone project for this track: **a habit tracking app** with:
- A list of habits the user wants to build
- Daily check-in for each habit
- A streak counter (consecutive days completed)
- Local data persistence (the app remembers between sessions)
- A clean, simple UI

This app demonstrates everything an Android interviewer wants to see: UI components, state management, local storage, and a real user-facing feature.

---

## Key Concepts You Will Learn

### Android Studio
Android Studio is the official IDE for Android development. It includes:
- A layout editor for building UIs visually or in XML
- An emulator to run your app without a physical device
- Logcat for viewing runtime logs
- A profiler for CPU and memory analysis

You'll spend a lot of time in Android Studio. Learning its keyboard shortcuts and features early pays dividends for months.

### Activities and the Activity Lifecycle
An **Activity** is a single screen in your app. Every Android app starts with at least one Activity.

\`\`\`java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button addHabitButton = findViewById(R.id.btn_add_habit);
        addHabitButton.setOnClickListener(v -> {
            // Navigate to add habit screen
            Intent intent = new Intent(this, AddHabitActivity.class);
            startActivity(intent);
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
        // Refresh data when returning to this screen
        loadHabits();
    }
}
\`\`\`

Understanding the lifecycle — \`onCreate\`, \`onStart\`, \`onResume\`, \`onPause\`, \`onStop\`, \`onDestroy\` — is essential. Bugs caused by mishandling the lifecycle are among the most common in Android development.

### Fragments
A **Fragment** is a reusable piece of UI that lives inside an Activity. Modern Android apps use a single Activity with multiple Fragments for navigation:

\`\`\`java
public class HabitListFragment extends Fragment {

    private HabitAdapter adapter;
    private HabitViewModel viewModel;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_habit_list, container, false);
    }

    @Override
    public void onViewCreated(View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        RecyclerView recyclerView = view.findViewById(R.id.recycler_habits);
        adapter = new HabitAdapter(habit -> viewModel.toggleCompletion(habit));
        recyclerView.setAdapter(adapter);

        viewModel = new ViewModelProvider(this).get(HabitViewModel.class);
        viewModel.getHabits().observe(getViewLifecycleOwner(), habits -> {
            adapter.submitList(habits);
        });
    }
}
\`\`\`

### Jetpack Compose (Modern UI)
Jetpack Compose is Android's modern toolkit for building UI in code rather than XML. It's the direction Android development is heading, and it's worth learning:

\`\`\`kotlin
@Composable
fun HabitItem(habit: Habit, onToggle: (Habit) -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Checkbox(
            checked = habit.completedToday,
            onCheckedChange = { onToggle(habit) }
        )
        Spacer(modifier = Modifier.width(12.dp))
        Column {
            Text(habit.name, style = MaterialTheme.typography.titleMedium)
            Text(\`$\{habit.streak} day streak\`, style = MaterialTheme.typography.bodySmall)
        }
    }
}
\`\`\`

Note: Compose uses Kotlin. If you want to go deep into Android, learning Kotlin is the natural next step — it's Java-compatible and you'll find the transition straightforward.

### Data Persistence with Room
Room is Android's recommended database library. It wraps SQLite with a clean API:

\`\`\`java
@Entity(tableName = "habits")
public class Habit {
    @PrimaryKey(autoGenerate = true)
    public long id;

    @ColumnInfo(name = "name")
    public String name;

    @ColumnInfo(name = "streak")
    public int streak;

    @ColumnInfo(name = "last_completed")
    public String lastCompleted; // ISO date string
}

@Dao
public interface HabitDao {
    @Query("SELECT * FROM habits ORDER BY name ASC")
    LiveData<List<Habit>> getAllHabits();

    @Insert
    void insert(Habit habit);

    @Update
    void update(Habit habit);

    @Delete
    void delete(Habit habit);
}
\`\`\`

### ViewModel and LiveData
ViewModel and LiveData separate your UI logic from your data logic and survive screen rotations:

\`\`\`java
public class HabitViewModel extends AndroidViewModel {

    private final HabitRepository repository;
    private final LiveData<List<Habit>> habits;

    public HabitViewModel(Application application) {
        super(application);
        repository = new HabitRepository(application);
        habits = repository.getAllHabits();
    }

    public LiveData<List<Habit>> getHabits() {
        return habits;
    }

    public void toggleCompletion(Habit habit) {
        // Update streak logic here
        repository.update(habit);
    }
}
\`\`\`

---

## Sample App Ideas

- **Water intake tracker** — log glasses of water, daily goal, reminders
- **Mood journal** — daily mood entry, notes, weekly chart
- **Workout log** — exercises, sets/reps, history
- **Budget tracker** — income, expenses, categories, monthly balance
- **Recipe book** — add, search, and save favorite recipes

---

## Tools and Libraries You Will Use

| Tool / Library | Purpose |
|---------------|---------|
| Android Studio | IDE + emulator |
| Jetpack (Room, ViewModel, Navigation) | Android architecture components |
| RecyclerView | Efficient scrolling lists |
| Retrofit | HTTP client for API calls |
| Glide / Coil | Image loading |
| Material Design Components | UI components |

---

## Where to Continue Learning

- **developer.android.com** — the official Android developer documentation is excellent
- **Android Basics with Compose** — Google's free Kotlin + Compose course
- **"Android Programming: The Big Nerd Ranch Guide"** — best printed book for Android
- **YouTube: Philip Lackner** — practical, modern Android tutorials

---

## What Comes Next

Once your habit tracker is on your device (or published to the Play Store), try:
- Adding notifications with WorkManager
- Syncing data to a backend API (pair this with the Spring Boot track)
- Publishing to the Google Play Store

Android development rewards consistency. Build one app. Finish it. Ship it. Then build the next one.
`,
};
