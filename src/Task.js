/**
 * Represents a Task.
 */
export default class Task {
  /**
   * Create a new Task.
   * @param {string} title - The title of the task.
   * @param {string} description - The description of the task.
   * @param {Date} dueDate - The due date of the task.
   * @param {string} priority - The priority of the task.
   */
  constructor(title, description, dueDate, priority) {
    this.setTitle(title);
    this.setDescription(description);
    this.setDueDate(dueDate);
    this.setPriority(priority);
    this.finished = false;
  }

  /**
   * Set the title of the task.
   * @param {string} title - The new title of the task.
   */
  setTitle(title) {
    this._validateTitle(title);
    this.title = title;
  }

  /**
   * Set the description of the task.
   * @param {string} description - The new description of the task.
   */
  setDescription(description) {
    this._validateDescription(description);
    this.description = description;
  }

  /**
   * Set the due date of the task.
   * @param {Date} dueDate - The new due date of the task.
   */
  setDueDate(dueDate) {
    this._validateDueDate(dueDate);
    this.dueDate = dueDate;
  }

  /**
   * Set the priority of the task.
   * @param {string} priority - The new priority of the task.
   */
  setPriority(priority) {
    this._validatePriority(priority);
    this.priority = priority;
  }

  /**
   * Validate the title of the task.
   * @param {string} title - The title to be validated.
   * @private
   */
  _validateTitle(title) {
    const MAX_TITLE_LENGTH = 50;
    if (typeof title !== "string" || title.length > MAX_TITLE_LENGTH) {
      throw new TypeError(
        `Title must be a string with a length of at most ${MAX_TITLE_LENGTH} characters`
      );
    }
  }

  /**
   * Validate the description of the task.
   * @param {string} description - The description to be validated.
   * @private
   */
  _validateDescription(description) {
    if (typeof description !== "string") {
      throw new TypeError("Description must be a string");
    }
  }

  /**
   * Validate the due date of the task.
   * @param {Date} dueDate - The due date to be validated.
   * @private
   */
  _validateDueDate(dueDate) {
    if (!(dueDate instanceof Date) || isNaN(dueDate.getTime())) {
      throw new TypeError("Due date must be a valid Date object");
    }
  }

  /**
   * Validate the priority of the task.
   * @param {string} priority - The priority to be validated.
   * @private
   */
  _validatePriority(priority) {
    const validPriorities = ["low", "medium", "high"];
    if (!validPriorities.includes(priority)) {
      throw new TypeError('Priority must be either "low", "medium", or "high"');
    }
  }
}
