// const notifications = document.querySelector(".notifications"),
// buttons = document.querySelectorAll(".buttons .btn");

// const toastDetails = {
//     timer: 3000,
//     success: {
//         icon: 'fa-circle-check',
//         text: 'Success: This is a success toast.',
//     },
//     error: {
//         icon: 'fa-circle-xmark',
//         text: 'Error: This is an error toast.',
//     },
//     warning: {
//         icon: 'fa-triangle-exclamation',
//         text: 'Warning: This is a warning toast.',
//     },
//     info: {
//         icon: 'fa-circle-info',
//         text: 'Info: This is an information toast.',
//     }
// }

// const removeToast = (toast) => {
//     toast.classList.add("hide");
//     if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
//     setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
// }

// const createToast = (id, msg) => {
//     // Getting the icon and text for the toast based on the id passed
//     const { icon, text } = toastDetails[id];
//     if(!msg) msg = text;
//     const toast = document.createElement("li"); // Creating a new 'li' element for the toast
//     toast.className = `toast ${id}`; // Setting the classes for the toast
//     // Setting the inner HTML for the toast
//     toast.innerHTML = `<div class="column">
//                          <i class="fa-solid ${icon}"></i>
//                          <span>${msg}</span>
//                       </div>
//                       <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
//     notifications.appendChild(toast); // Append the toast to the notification ul
//     // Setting a timeout to remove the toast after the specified duration
//     toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
// }

// // Adding a click event listener to each button to create a toast when clicked
// // buttons.forEach(btn => {
// //     btn.addEventListener("click", () => createToast(btn.id));
// // });

// // Adding a click event listener to each button when redirect to a different html page and display a toast in the redirected page
// const createToastInRedirectedPage = (id, msg, redirectedPage) => {
//     localStorage.setItem('toastId', {id, msg});
//     window.location.href = redirectedPage;
// }

// // Adding a display toast function to display the toast in the redirected page
// const displayToast = () => {
//     console.log('success');
//     const toastId = localStorage.getItem('toastId');
//     if(toastId.id) createToast(toastId.id, toastId.msg);
//     localStorage.removeItem('toastId');
// }

// // Displaying the toast in the redirected page
// // displayToast();


// ----------------------------------------------
// Toast Management Class
export default class ToastManager {
    constructor() {
        this.notifications = document.querySelector(".notifications");
        this.toastDetails = {
            timer: 3000,
            success: {
                icon: 'fa-circle-check',
                text: 'Success: This is a success toast.',
            },
            error: {
                icon: 'fa-circle-xmark',
                text: 'Error: This is an error toast.',
            },
            warning: {
                icon: 'fa-triangle-exclamation',
                text: 'Warning: This is a warning toast.',
            },
            info: {
                icon: 'fa-circle-info',
                text: 'Info: This is an information toast.',
            }
        };
    }

    removeToast(toast) {
        toast.classList.add("hide");
        if (toast.timeoutId) clearTimeout(toast.timeoutId);
        setTimeout(() => toast.remove(), 500);
    }

    createToast(id, msg) {
        const { icon, text } = this.toastDetails[id];
        if (!msg) msg = text;
        const toast = document.createElement("li");
        toast.className = `toast ${id}`;
        toast.innerHTML = `<div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${msg}</span>
                          </div>
                          <i class="fa-solid fa-xmark" onclick="toastManager.removeToast(this.parentElement)"></i>`;
        this.notifications.appendChild(toast);
        toast.timeoutId = setTimeout(() => this.removeToast(toast), this.toastDetails.timer);
    }

    createToastInRedirectedPage(id, msg, redirectedPage) {
        localStorage.setItem('toastId', JSON.stringify({id: id, msg:msg}));
        window.location.href = redirectedPage;
    }

    displayToast() {
        const data = localStorage.getItem('toastId');
        if (!data) return;
        const toastId = JSON.parse(data);
        if(toastId.id) this.createToast(toastId.id, toastId.msg);
        localStorage.removeItem('toastId');
    }
}
