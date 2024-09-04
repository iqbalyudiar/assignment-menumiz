const sidebarItems = [
  {
    title: "Dashboard",
    image: "./assets/img/Dashboard-Icon.svg",
    link: "index.html",
    active: false,
  },
  {
    title: "Calendar",
    image: "./assets/img/Calendar-Icon.svg",
    link: "#",
    active: false,
  },
  {
    title: "Recruitment",
    image: "./assets/img/Recruitment-Icon.svg",
    link: "#",
    active: false,
  },
  {
    title: "Employees",
    image: "./assets/img/Employees-Icon.svg",
    link: "#",
    active: false,
  },
  {
    title: "Leave",
    image: "./assets/img/Leave-Icon.svg",
    link: "index.html",
    active: true,
  },
  {
    title: "Organisation",
    image: "./assets/img/Organisation-Icon.svg",
    link: "#",
    active: false,
  },
  {
    title: "Billings",
    image: "./assets/img/Billings-Icon.svg",
    link: "#",
    active: false,
  },
  {
    title: "Engagement",
    image: "./assets/img/Engagement-Icon.svg",
    link: "#",
    active: false,
  },
  {
    title: "Development",
    image: "./assets/img/Development-Icon.svg",
    link: "#",
    active: false,
  },
  {
    title: "Performance",
    image: "./assets/img/Performance-Icon.svg",
    link: "#",
    active: false,
  },
  {
    title: "Reports",
    image: "./assets/img/Reports-Icon.svg",
    link: "#",
    active: false,
  },
];

const sidebar = document.getElementById("sidebar");

sidebarItems.forEach((item) => {
  const itemLink = document.createElement("a");
  itemLink.className = `list-sidebar-item ${item.active ? 'item-active' : ''}`;
  itemLink.href = item.link;

  const img = document.createElement("img");
  img.src = item.image;
  img.className = "list-sidebar-icon mr-16";
  img.alt = `${item.title} Icon`;

  const title = document.createElement("span");
  title.className = "list-sidebar-title";
  title.textContent = item.title;

  itemLink.appendChild(img);
  itemLink.appendChild(title);

  sidebar.appendChild(itemLink);
});

const notification = document.getElementById('notification')
const notificationBar = document.getElementById('notificationBar')
let isNotificationOpen = false


function handleClickNotification () {
  isNotificationOpen = !isNotificationOpen
  notification.src = `./assets/img/Notifications-${isNotificationOpen ? 'open' : 'close'}.svg`
  notificationBar.classList.toggle('show')
  
}

notification.addEventListener('click', handleClickNotification)
