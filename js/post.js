/**
 * Utility function to return textarea given its text content and id
 * @param {String} text text to be added to the text area 
 * @param {String} id id to be set of text area 
 */
function getTextArea(text, id) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("id", id);
    return textArea;
}

/**
 * Utility function to style a textarea element
 * @param {HTMLElement} textArea textarea element to be styled 
 */
function setTextAreaStyle(textArea) {
    textArea.style.resize = "none";
    textArea.style.width = "100%";
    textArea.style.height = (textArea.scrollHeight)+"px";
}

/**
 * Function called when content of text boxes must be saved
 * @param {HTMLElement} button the save button - changed to edit by the end of this function 
 * @param {HTMLElement} post the post element that must hold the modified text
 * @param {HTMLElement} title the title element that must hold the modified title
 */
function savePost(button, post, title) {
    const postTextArea = document.getElementById(post.id+"-edit");
    const titleTextArea = document.getElementById(title.id+"-edit");
    post.innerText = postTextArea.value;
    title.innerText = titleTextArea.value;
    post.style.display = "block";
    title.style.display = "block";
    button.innerHTML = 'Edit <i class="fa fa-pencil-square-o" aria-hidden="true">';
    postTextArea.parentElement.removeChild(postTextArea);
    titleTextArea.parentElement.removeChild(titleTextArea);
}

/**
 * Function called when the content of the page must be editted
 * @param {HTMLElement} button the edit button - changed to save by the end of this function 
 * @param {String} postId the id of the post paragraph to be modified
 * @param {String} titleId the id of the title heading to be modified
 */
function editPost(button, postId, titleId) {
    const post = document.getElementById(postId);
    const title = document.getElementById(titleId);
    if (post.style.display === "none" && post.style.display === "none") {
        savePost(button, post, title);
        return;
    }
    const postTextArea = getTextArea(post.innerText, postId+"-edit");
    const titleTextArea = getTextArea(title.innerText, titleId+"-edit");
    title.parentElement.appendChild(titleTextArea);
    post.parentElement.appendChild(postTextArea);
    setTextAreaStyle(titleTextArea);
    setTextAreaStyle(postTextArea);
    titleTextArea.style.textAlign = "center";
    titleTextArea.style.height = (titleTextArea.scrollHeight)+"px";
    titleTextArea.style.width = "30%";
    titleTextArea.style.borderColor = "#ffbfce";
    title.style.display = "none";
    post.style.display = "none";
    button.innerHTML = 'Save <i class="fa fa-floppy-o" aria-hidden="true"></i>';
}

/**
 * Function to add likes to a post
 * @param {HTMLElement} button the like button - changed to liked by the end of this function 
 * @param {String} counterId id of the like counter
 */
function likePost(button, counterId) {
    const counter = document.getElementById(counterId);
    let text = counter.innerText;
    if (isNaN(text[0]))
        text = "1 person likes this!";
    else
        text = ++text.split(" ")[0] + " person likes this!";
    counter.innerText = text;
    button.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>Liked!';
}

/**
 * Function to add comments in the comment section of the page
 * @param {String} commentContainerId Id of the parent element to add comments in
 * @param {String} comment id of the textarea to get comments from
 */
function addComment(commentContainerId, comment) {
    const commentContainer = document.getElementById(commentContainerId);
    const commentTextArea = document.getElementById(comment);
    const commentDiv = document.createElement("div");
    const textNode = document.createTextNode(commentTextArea.value);
    commentDiv.appendChild(textNode);
    commentDiv.style.background = "white";
    commentDiv.style.marginTop = "1rem";
    commentDiv.style.marginBottom = "1rem";
    commentDiv.style.marginLeft = "1rem";
    commentDiv.style.marginRight = "1rem";
    commentDiv.style.padding = "1rem";
    commentContainer.appendChild(commentDiv);
    return false;
}