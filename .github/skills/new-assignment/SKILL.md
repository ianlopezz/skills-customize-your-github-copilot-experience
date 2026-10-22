---
name: new-assignment
description: 'Create or revise a student homework assignment or coding exercise for this project. Use when adding assignment content under assignments/, drafting its README.md, or aligning an assignment with the project template and educational standards.'
---

# Create a New Assignment

Use this skill to create clear, learning-focused assignments that fit the student portal.

## Procedure

1. Read `templates/assignment-template.md`, `.github/instructions/assignments.instructions.md`, and a nearby assignment README to confirm the current structure and conventions.
2. Identify the topic, intended learning outcomes, and expected difficulty from the request. If a missing detail would materially change the assignment, ask a concise clarifying question; otherwise make a reasonable, age-appropriate assumption.
3. Choose a short, descriptive, lowercase kebab-case folder name under `assignments/`. Check that it does not already exist before creating files.
4. Create `assignments/<slug>/README.md` from the template. Keep its required sections, headings, and icons, replacing all placeholders:
   - Use a concise assignment title.
   - Write a 1-2 sentence objective describing what students will learn or build.
   - Include the two task sections from the template. Give each an action-oriented title, a clear description, and specific, measurable requirements.
5. Write in clear, encouraging, student-friendly language. Match the requirements to the stated difficulty and make success criteria concrete. Include example input/output only when it makes a requirement clearer.
6. Add starter code, data files, or other assignment assets only when requested or necessary for the exercise. Keep starter code incomplete enough for students to do the intended work; do not include a full solution unless requested.
7. Do not add sections beyond the template unless the user explicitly requests them. Do not modify unrelated assignments or site styling.
8. Inspect `config.json` and the site's assignment-loading code only if needed to determine whether new assignments require registration or metadata. Update them only when the existing format requires it.
9. Review the final files for template compliance, clear requirements, correct paths, and any accidental solution leakage. Run relevant checks if available.

---
name: new-assignment
description: Create a new programming homework assignment for Mergington High School students. Use this skill whenever the user wants to create, add, scaffold, or generate a new assignment, exercise, or homework — even if they don't use the word "assignment" explicitly.
---

# Create New Programming Assignment

Assignments live in `assignments/<id>/`, and the website reads `config.json` to display them. Follow these steps to create both.

## Step 1: Gather Requirements

If the user hasn't specified, ask what programming concept the assignment should cover.

> 📖 Read [references/assignment-guide.md](references/assignment-guide.md) for guidance on difficulty, scope, and when to include starter code.

## Step 2: Create the Assignment

1. Create `assignments/<kebab-case-id>/README.md` following the [assignment template](../../../templates/assignment-template.md)
2. (Optional) Add starter code or data files to the same directory

## Step 3: Register with the Website

Use the bundled scripts — do NOT edit `config.json` manually.

**Register the assignment:**

    node .github/skills/new-assignment/scripts/update-config.js <id> "<title>" "<description>"

**Register each file as an attachment** (starter code, data files, etc.):

    node .github/skills/new-assignment/scripts/add-attachment.js <id> "<display-name>" <filename> <type>

Common types: `python`, `csv`, `json`, `txt`, `html`

## Step 4: Verify

Confirm the assignment was registered correctly: check that `config.json` contains the new entry and that all created files exist on disk.