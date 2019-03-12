/**
 * Function to unhide/display the modal provided the id
 * @param {String} id id of the modal to show
 */
function showModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "block";
}

/**
 * Closes/hides a modal
 * @param {HTMLElement} element The modal close button html element
 */
function closeModal(element) {
    const modal = element.parentElement.parentElement; // Get the modal container element
    modal.style.display = "none";
}

/**
 * Redirect to desired location
 * @param {String} location 
 */
function redirect(location) {
    window.location.href = location;
}