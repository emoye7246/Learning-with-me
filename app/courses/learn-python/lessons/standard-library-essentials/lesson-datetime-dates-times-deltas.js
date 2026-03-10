export const lessonDatetimeDatesTimesDeltas = {
  id: "datetime-dates-times-deltas",
  title: "datetime: Dates, Times, and Deltas",

  article: `
## datetime

Programs often need timestamps, deadlines, durations, and scheduling.

Python ships with tools for all of that.

---

## Core Types

- \`date\` for calendar dates
- \`time\` for times of day
- \`datetime\` for both together
- \`timedelta\` for differences and offsets

---

## Example

\`\`\`python
from datetime import datetime, timedelta

now = datetime.now()
deadline = now + timedelta(days=7)

print(now)
print(deadline)
\`\`\`

---

## Common Uses

- Timestamp log entries
- Calculate expiry dates
- Measure how long work took
- Compare dates safely

---

## Practical Advice

Date and time bugs are usually logic bugs, not syntax bugs.

Be explicit about what a value means:

- creation time
- due date
- elapsed time
- local time versus UTC

Clarity matters more than cleverness here.
`,
};
