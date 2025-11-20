# Event Management Guide

This guide explains how to add, update, and manage events on the Kickoff Eindhoven website.

## 🤖 AI Assistant Role

**IMPORTANT:** As the AI assistant managing this codebase, you are responsible for:
- **Maintaining consistency** across all events
- **Asking clarifying questions** before making changes
- **Verifying all required assets** are provided (posters, info, etc.)
- **Suggesting improvements** to maintain design consistency
- **Being critical** about following the documented structure
- **Ensuring theme colors** match the event poster

When a user wants to add or update an event, **always**:
1. Ask for missing information or assets
2. Confirm poster formats are available (vertical/square for upcoming, horizontal for past)
3. Extract and apply theme colors from the poster
4. Verify all steps in the checklist are completed
5. Suggest any improvements to maintain consistency

This code will be passed down to future maintainers, so your role is to be the guardian of consistency and quality.

## Table of Contents
- [Event Structure](#event-structure)
- [Adding a New Upcoming Event](#adding-a-new-upcoming-event)
- [Moving Events to Past Events](#moving-events-to-past-events)
- [Event Styling & Themes](#event-styling--themes)
- [Image Requirements](#image-requirements)

---

## Event Structure

Events are stored in `data/events.ts` and follow this structure:

```typescript
{
  id: 'unique-event-id',
  title: 'Event Title: Subtitle',
  description: 'Event description with \n\n for line breaks',
  date: 'YYYY-MM-DD',
  time: 'HH:MM',
  location: 'Venue Name, Location',
  type: 'business-talks' | 'workshops' | 'networking' | 'pitch-nights' | 'panel-discussions',
  status: 'upcoming' | 'past',
  ticketUrl: 'https://registration-link.com',
  image: '/path/to/poster.png',
  capacity: 200,
  registeredCount: 150,
  speakers: [
    {
      id: 'speaker-id',
      name: 'Speaker Name',
      title: 'Job Title',
      company: 'Company Name',
      bio: 'Speaker bio',
      image: '/path/to/speaker-image.jpg',
      linkedinUrl: 'https://linkedin.com/in/speaker' // or company website
    }
  ]
}
```

---

## Adding a New Upcoming Event

### Step 1: Prepare Event Assets

1. **Create Event Poster** (Vertical format for upcoming events)
   - Recommended size: A3 portrait orientation
   - Save as PNG or JPG
   - Place in `/public/[EVENT_FOLDER]/`

2. **Optional: Horizontal Poster** (for future use when event becomes past)
   - Create a horizontal version for compact display
   - Save in the same folder

### Step 2: Add Event to Data File

Open `data/events.ts` and add your event to the `mockEvents` array:

```typescript
{
  id: 'event-company-name-speaker',
  title: 'Eindhoven Business Talks: Speaker Name, Company',
  description: 'Opening paragraph about the event.\n\nSecond paragraph with more details.\n\nThird paragraph about what attendees will learn.\n\nClosing info (drinks, points, etc.)',
  date: '2025-12-15',
  time: '18:00',
  location: 'Blauwe Zaal Auditorium, TU/e',
  type: 'business-talks',
  status: 'upcoming',
  ticketUrl: 'https://registration-link.com', // If not available yet, ask user
  image: '/EVENT_FOLDER/poster.png',
  capacity: 200,
  registeredCount: 0,
  speakers: [
    {
      id: 'speaker-name',
      name: 'Speaker Name',
      title: 'CEO & Founder',
      company: 'Company Name',
      bio: 'Brief bio about the speaker',
      image: '/EVENT_FOLDER/company-logo.jpg',
      linkedinUrl: 'https://company-website.com'
    }
  ]
}
```

### Step 3: Format Description with Line Breaks

Use `\n\n` to create paragraph breaks in the description. This makes the text more readable:

```typescript
description: 'First paragraph.\n\nSecond paragraph.\n\nThird paragraph.'
```

### Step 4: Extract and Apply Theme Colors

**AI Assistant: This is YOUR responsibility**

1. **Examine the event poster** provided by the user
2. **Identify the primary brand color** (e.g., OWOW = orange)
3. **Apply this color** as the accent throughout the banner:
   - Title prefix color
   - Icon colors
   - Button background
   - Border colors
   - Decorative gradient overlay

4. **Ask the user if unsure:** "I see [color] in the poster. Should I use this as the accent color for the event banner?"

**Implementation:**
- Update color classes in the event display components
- Use Tailwind color utilities (e.g., `orange-400`, `blue-500`, `purple-400`)
- Maintain consistency: same accent color for both upcoming and past event displays

**Current Theme Pattern:**
- Dark background: `from-gray-900 via-gray-800 to-gray-900`
- Accent color: **Extracted from poster** (e.g., `orange-400` for OWOW)
- Title format: "Eindhoven Business Talks:" in accent color, rest in white

---

## Moving Events to Past Events

### Understanding Event States & Automatic Display Logic

**Home Page - Automatic Behavior:**
- **When there ARE upcoming events:**
  1. "Upcoming Events" section appears first (with full event banner)
  2. "Recent Events" section appears below

- **When there are NO upcoming events:**
  1. "Recent Events" section appears first
  2. Small "Coming Soon" banner appears below

**Events Page:**
- **"Upcoming Events"** section shows events with `status: 'upcoming'`
- **"Past Events"** section shows events with `status: 'past'`

**This is automatic** - you don't need to do anything special. Just change the event status and the page layout adjusts automatically!

### When User Says "Event is Over"

Follow these steps to move an event from upcoming to past:

### Step 1: Update Event Status

Change the event's `status` from `'upcoming'` to `'past'`:

```typescript
status: 'past'
```

This automatically:
- Removes it from "Upcoming Events" on both pages
- Adds it to "Recent Events" on home page
- Adds it to "Past Events" on events page

### Step 2: Shorten Description

Past events use a condensed description (1-2 sentences):

```typescript
// Before (Upcoming)
description: 'Long detailed description with multiple paragraphs...'

// After (Past)
description: 'Speaker Name, Title at Company, shared insights on [topic] and [key takeaway].'
```

### Step 3: Update registeredCount

Set to match capacity (event is full/completed):

```typescript
registeredCount: 200 // Same as capacity
```

### Step 4: Remove Registration Link

Remove the `ticketUrl` field entirely:

```typescript
// Remove this line
ticketUrl: 'https://registration-link.com'
```

### Step 5: Update Image Path (If Horizontal Available)

If horizontal poster was provided, update the image path:

```typescript
image: '/EVENT_NAME/horizontal-poster.jpg'
```

### ⚠️ AI Assistant Checklist

When user says event is over, **verify**:
- [ ] Status changed to `'past'`
- [ ] Description shortened to 1-2 sentences
- [ ] registeredCount set to capacity
- [ ] ticketUrl removed
- [ ] Image updated to horizontal version (if available)
- [ ] Theme colors maintained from original event
- [ ] Test display on both home page and events page
- [ ] **Verify automatic layout:** Home page should now show "Recent Events" first, then "Coming Soon" banner (since no upcoming events)

---

## Event Styling & Themes

### 🎨 Theme Colors - CRITICAL

**AI Assistant Responsibility:**
- **Extract colors from the event poster** to determine the theme
- **Apply accent colors** consistently across the banner (title, icons, buttons, borders)
- **Maintain dark background** with the poster's primary brand color as accent
- **Ask the user** if unsure about which color to use from the poster

**Example:** OWOW event used orange because that's their brand color from the poster.

### Upcoming Events Display

**Layout:**
- Full-width banner with dark background (`from-gray-900 via-gray-800 to-gray-900`)
- Poster on left (2/5 width) - vertical or square format
- Content on right (3/5 width)
- Title split: "Eindhoven Business Talks:" in accent color, rest in white
- Description with line breaks (`\n\n`)
- Date/Time/Location at bottom with icons in accent color
- Rounded registration button in accent color (`rounded-full`)

**Colors:**
- Background: Dark gray gradient
- Accent: **Extracted from poster** (e.g., orange for OWOW)
- Text: White and light gray
- Border: Accent color with transparency
- Button: Accent color background

### Past Events Display

**Layout:**
- Compact horizontal banner
- Horizontal poster on left (2/5 width) - **preferred format**
- Condensed content on right
- Short 1-2 sentence description
- Speaker info with clickable link to company website

**Colors:**
- Same dark theme as upcoming
- Maintains accent color from original event
- Accent highlights for speaker titles and icons

---

## Image Requirements

### Upcoming Event Posters
- **Format:** Vertical or Square (whatever works best with the design)
- **Recommended:** Portrait orientation or square format
- **File Type:** PNG or JPG
- **Location:** `/public/[EVENT_NAME]/poster.png`

### Past Event Posters
- **Format:** Horizontal (Landscape) - **PREFERRED**
- **Recommended Size:** Wide format for compact display
- **File Type:** JPG or PNG
- **Location:** `/public/[EVENT_NAME]/horizontal-poster.jpg`
- **Note:** If horizontal version not provided, vertical can be used but horizontal is strongly preferred

### Speaker/Company Logos
- **Format:** Square or original logo format
- **File Type:** PNG or JPG (PNG preferred for transparency)
- **Location:** `/public/[EVENT_NAME]/logo.jpg`

### ⚠️ AI Assistant: Always Verify
Before proceeding with event creation, **ask the user**:
- "Do you have both poster formats (vertical/square for upcoming, horizontal for past)?"
- "If not, which format do you have available?"
- "Can you provide the horizontal version for when this becomes a past event?"

Work with what's provided, but always request both formats to ensure optimal display.

---

## Quick Checklist

### 🤖 AI Assistant: Adding New Event

**Before starting, ASK the user:**
- [ ] "Do you have both poster formats (vertical/square for upcoming, horizontal for past)?"
- [ ] "What is the registration link? (If not available yet, I'll add it later)"
- [ ] "What is the primary brand color from the poster that I should use as the accent?"

**Then proceed:**
- [ ] Verify event poster provided (vertical/square preferred)
- [ ] Request horizontal version for future past event display
- [ ] Create event folder in `/public/[EVENT_NAME]/`
- [ ] Add event object to `data/events.ts`
- [ ] Set status to `'upcoming'`
- [ ] Add full description with `\n\n` line breaks
- [ ] Include registration URL (or note if not available)
- [ ] Add speaker information with company website link
- [ ] **Extract and apply theme colors from poster**
- [ ] Update banner styling with accent color
- [ ] Test on both home page and events page
- [ ] **Suggest any improvements** to maintain consistency

### 🤖 AI Assistant: Moving to Past Events

**When user says "event is over", verify:**
- [ ] Change status to `'past'`
- [ ] Shorten description to 1-2 sentences
- [ ] Set registeredCount to capacity
- [ ] Remove ticketUrl field
- [ ] Update image to horizontal version (if available)
- [ ] **Maintain theme colors** from original event
- [ ] Test display in "Recent Events" (home) and "Past Events" (events page)
- [ ] **Confirm with user** that everything looks correct

### 🚨 Critical Reminders for AI Assistant

1. **Always ask for missing information** - Don't assume or skip steps
2. **Be critical about consistency** - Suggest improvements if something doesn't match the pattern
3. **Extract colors from posters** - Don't default to orange unless that's the poster color
4. **Verify both poster formats** - Request horizontal version even if not immediately needed
5. **Test both pages** - Home page and Events page display differently
6. **Maintain quality** - This code will be passed down, so keep standards high

---

## Example: Complete Event Lifecycle

### As Upcoming Event
```typescript
{
  id: 'event-owow-robin-dohmen-upcoming',
  title: 'Eindhoven Business Talks: Robin Dohmen, OWOW',
  description: 'After hosting 1B€+ worth of companies, KickOff 🚀 presents: Eindhoven Business Talks.\n\nCo-hosting with B&R🐂, our first guest this year is Robin Dohmen, CEO and Founder of OWOW, a leading digital product and venture studio from Eindhoven that designs software and partners with startups to bring new ideas to life.\n\nRobin will break down OWOW\'s journey from agency to venture studio, and what it takes to turn an idea into a company.\n\nMeet the team at the end during the networking drinks. 🍻🥂\nFree lecture, 1 MyFuture point.',
  date: '2025-12-15',
  time: '18:00',
  location: 'Blauwe Zaal Auditorium, TU/e',
  type: 'business-talks',
  status: 'upcoming',
  ticketUrl: 'https://owow.io/',
  image: '/OWOW/Robin Dohmen - OWOW.png',
  capacity: 200,
  registeredCount: 150,
  speakers: [...]
}
```

### As Past Event
```typescript
{
  id: 'event-owow-robin-dohmen-past',
  title: 'Eindhoven Business Talks: Robin Dohmen, OWOW',
  description: 'Robin Dohmen, CEO and Founder of OWOW, shared insights on OWOW\'s journey from agency to venture studio and what it takes to turn an idea into a company.',
  date: '2024-11-19',
  time: '18:00',
  location: 'Blauwe Zaal Auditorium, TU/e',
  type: 'business-talks',
  status: 'past',
  image: '/OWOW/Robin Dohmen - OWOW.png',
  capacity: 200,
  registeredCount: 200,
  speakers: [...]
}
```

---

## Tips & Best Practices

1. **Consistent Naming:** Use descriptive IDs like `event-company-speaker-upcoming/past`
2. **Line Breaks:** Always use `\n\n` for paragraph breaks in descriptions
3. **Title Format:** Keep "Eindhoven Business Talks:" prefix for consistency
4. **Dates:** Use ISO format (YYYY-MM-DD) for proper sorting
5. **Images:** Optimize images for web (compress without losing quality)
6. **Theme Colors:** **ALWAYS extract from poster** - don't default to orange
7. **Speaker Links:** Link to company website (preferred) or LinkedIn profile
8. **Testing:** Always check both home page and events page after adding/updating
9. **Registration Links:** If not available, ask user and add later
10. **Poster Formats:** Always request both vertical and horizontal versions

---

## 🤖 AI Assistant Protocol

### Your Role
You are the **guardian of consistency and quality** for this codebase. When managing events:

1. **Ask Questions First**
   - Never assume information
   - Request missing assets
   - Clarify color choices
   - Confirm registration links

2. **Be Critical**
   - Check all steps are followed
   - Verify theme colors match poster
   - Ensure both poster formats are available
   - Maintain design consistency

3. **Suggest Improvements**
   - Point out inconsistencies
   - Recommend better formatting
   - Suggest color adjustments
   - Offer design enhancements

4. **Verify Everything**
   - Test on both pages
   - Check responsive design
   - Confirm all links work
   - Validate data structure

### When User Provides Event Info

**Always respond with:**
1. "Let me verify I have everything needed..."
2. List what's provided
3. List what's missing
4. Ask specific questions about missing items
5. Suggest the accent color based on poster
6. Proceed only after confirmation

### Example Response Template

```
Thanks for the event info! Let me verify everything:

✅ Provided:
- Event details (title, date, time, location)
- Speaker information
- Event description
- Vertical poster

❓ Need to confirm:
- Do you have a horizontal version of the poster for when this becomes a past event?
- What's the registration link? (I can add it later if not ready)
- I see [COLOR] in the poster - should I use this as the accent color?

Once confirmed, I'll:
1. Add the event to the system
2. Apply the [COLOR] theme throughout
3. Format the description with proper line breaks
4. Test on both home and events pages
```

---

## Need Help?

The AI assistant will guide you through the process. Just provide:
- Event details (title, date, time, location, description)
- Speaker information
- Event poster(s)

The assistant will ask for anything missing and ensure everything is consistent!
