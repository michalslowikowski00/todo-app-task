# Test Cases for TODO App

## 1. Add a New TODO Item
**Description**: Verify that a user can add a new item to the TODO list.

**Prerequisites**: Application is loaded successfully.

**Steps**:
1. Type "Buy bike" into the input field.
2. Click the "Add" button.

**Validation**:
- The new TODO item "Buy bike" appears in the list below.

---

## 2. Mark TODO as Completed
**Description**: Check that a TODO item can be marked as completed.

**Prerequisites**: At least one TODO item exists.

**Steps**:
1. Click the checkbox next to an existing TODO item.

**Validation**:
- The item is visually styled as completed (strikethrough).

---

## 3. Delete a TODO Item
**Description**: Confirm that a TODO item can be removed.

**Prerequisites**: At least one TODO item exists.

**Steps**:
1. Click the delete button next to a TODO item.

**Validation**:
- The item is removed from the list.

---

## 4. Input Field Validation
**Description**: Prevent the user from adding empty TODOs.

**Prerequisites**: Application is loaded.

**Steps**:
1. Click the "Add" button without typing anything in the input.

**Validation**:
- No item is added.
- Optional: an error message appears or the input is highlighted.

---

## 5. Persistent Data
**Description**: Check if TODO items persist on page reload.

**Prerequisites**: Add at least one TODO item.

**Steps**:
1. Add a TODO item.
2. Reload the page.

**Validation**:
- Added TODO item is visible after reload.
