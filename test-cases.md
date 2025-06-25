# Test cases for TODO app

## 1. Add a new TODO item

**Description**: Verify that user can add a new item to the TODO.

**Preconditions**: Application is loaded successfully.

**Steps**:

1. Type "Buy bike" into the input field.
2. Click the "Add" button.

**Expected result**:

- The new TODO item "Buy bike" appears in the list below.

---

## 2. Mark TODO as completed

**Description**: Check that a TODO item can be marked as completed.

**Preconditions**: At least one TODO item exists.

**Steps**:

1. Click the checkbox next to an existing TODO item.

**Expected result**:

- The item is visually styled as completed (strikethrough).

---

## 3. Delete a TODO item

**Description**: Confirm that a TODO item can be removed.

**Preconditions**: At least one TODO item exists.

**Steps**:

1. Click the delete button next to a TODO item.

**Expected result**:

- The item is removed from the list.

---

## 4. Input field validation

**Description**: Prevent the user from adding empty TODOs.

**Preconditions** Application is loaded.

**Steps**:
1. Click the "Add Tak" button on the homepage.
2. Click the "Add Tak" button without typing anything in the input.

**Expected result**:

- No item is added.
- An error message 'Please enter a title' appears

---

## 5. Persistent data

**Description**: Check if TODO items persist on page reload.

**Preconditions**: Add at least one TODO item.

**Steps**:

1. Add a TODO item.
2. Reload the page.

**Expected result**:

- Added TODO item is visible after reload.
