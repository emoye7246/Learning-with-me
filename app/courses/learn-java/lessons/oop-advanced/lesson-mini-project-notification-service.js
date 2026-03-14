export const lessonMiniProjectNotificationService = {
  id: "mini-project-notification-service",
  title: "Mini-Project: Notification Service",
  hasChallenge: false,
  article: `
## Overview

Build a notification service that can send notifications through multiple channels: email, SMS, and push notification.

This project uses composition and interfaces to build a flexible, extensible design.

---

## What You're Building

A \`NotificationChannel\` interface. Concrete implementations for Email, SMS, and Push. A \`NotificationService\` that holds multiple channels and broadcasts to all of them.

---

## Requirements Checklist (Core)

**NotificationChannel interface:**
- [ ] \`send(String recipient, String subject, String message)\`
- [ ] \`getChannelName()\`

**EmailChannel:**
- [ ] Simulates sending an email (print to console with formatted output)

**SmsChannel:**
- [ ] Simulates sending an SMS (message truncated to 160 characters)

**PushChannel:**
- [ ] Simulates a push notification (subject only, no long body)

**NotificationService:**
- [ ] Stores a list of NotificationChannels
- [ ] \`addChannel(NotificationChannel channel)\`
- [ ] \`notify(String recipient, String subject, String message)\` — sends via all channels
- [ ] \`notifyVia(String channelName, String recipient, String subject, String message)\` — sends via specific channel

**Main program:**
- [ ] Create a NotificationService with all three channels
- [ ] Send a notification to multiple recipients
- [ ] Send a targeted notification via one specific channel

---

## Rules

- NotificationService uses the NotificationChannel interface — not concrete types
- Adding a new channel type should require zero changes to NotificationService

---

## Suggested Build Plan

1. Define NotificationChannel interface
2. Implement EmailChannel, SmsChannel, PushChannel
3. Implement NotificationService with a List<NotificationChannel>
4. Test notify() (broadcasts to all)
5. Test notifyVia() (targets one channel)

---

## Testing Checklist

- [ ] notify() sends via all channels
- [ ] notifyVia() sends only via the named channel
- [ ] SMS truncates messages over 160 characters
- [ ] Adding a new channel requires no changes to NotificationService

---

## Extension Challenges

### Upgrade 1 — Priority
Add a \`priority\` parameter (LOW, MEDIUM, HIGH — use an enum). Only send HIGH priority via SMS.

### Upgrade 2 — Templates
Add a \`NotificationTemplate\` class with predefined message templates.

### Upgrade 3 — Throttling
Add rate limiting: an email channel that only allows 10 emails per "minute" (simulated).

---

## Submission Requirements

Files: All class files + Main.java

Run with:
\`\`\`bash
javac *.java && java Main
\`\`\`
`,
  support: {
    intro: `
Focus on getting the interface and one channel working, then add the others.
    `.trim(),

    level1Nudges: [
      "Why should NotificationService store List<NotificationChannel> instead of concrete types?",
      "How does notifyVia() find the right channel? (Hint: loop and compare getChannelName())",
    ],

    level2Hints: [
      "NotificationService: private List<NotificationChannel> channels = new ArrayList<>();",
      "notify(): loop through channels and call channel.send(recipient, subject, message).",
      "notifyVia(): loop, find channel where getChannelName().equals(channelName), call send.",
    ],

    blueprint: [
      "Define interface NotificationChannel with send() and getChannelName().",
      "EmailChannel: print formatted email to console.",
      "SmsChannel: truncate message if > 160 chars, print as SMS.",
      "PushChannel: print subject only as push notification.",
      "NotificationService: List<NotificationChannel> field.",
      "addChannel(): channels.add(channel).",
      "notify(): loop, call each channel's send().",
      "notifyVia(): find matching channel by name, call send().",
    ],

    debuggingGuide: [
      {
        problem: "notifyVia() never finds the channel.",
        hint: "Check that you're comparing strings with .equals() and that getChannelName() returns exactly the same string you're searching for.",
      },
    ],

    revealSolutionWarning: `
One implementation. The interesting design decision is how NotificationService stores and iterates channels.
    `.trim(),

    exampleSolution: `import java.util.ArrayList;
import java.util.List;

public class NotificationService {
    private List<NotificationChannel> channels = new ArrayList<>();

    public void addChannel(NotificationChannel channel) {
        channels.add(channel);
    }

    public void notify(String recipient, String subject, String message) {
        for (NotificationChannel channel : channels) {
            channel.send(recipient, subject, message);
        }
    }

    public void notifyVia(String channelName, String recipient, String subject, String message) {
        for (NotificationChannel channel : channels) {
            if (channel.getChannelName().equalsIgnoreCase(channelName)) {
                channel.send(recipient, subject, message);
                return;
            }
        }
        System.out.println("Channel not found: " + channelName);
    }
}`,
  },
};
