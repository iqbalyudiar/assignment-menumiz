const sidebarItems = [
    { title: 'Dashboard', image: './assets/img/Dashboard-Icon.svg', link: 'index.html' },
    { title: 'Calendar', image: './assets/img/Calendar-Icon.svg', link: '#' },
    { title: 'Recruitment', image: './assets/img/Recruitment-Icon.svg', link: '#' },
    { title: 'Employees', image: './assets/img/Employees-Icon.svg', link: '#' },
    { title: 'Leave', image: './assets/img/Leave-Icon.svg', link: '#' },
    { title: 'Organisation', image: './assets/img/Organisation-Icon.svg', link: '#' },
    { title: 'Billings', image: './assets/img/Billings-Icon.svg', link: '#' },
    { title: 'Engagement', image: './assets/img/Engagement-Icon.svg', link: '#' },
    { title: 'Development', image: './assets/img/Development-Icon.svg', link: '#' },
    { title: 'Performance', image: './assets/img/Performance-Icon.svg', link: '#' },
    { title: 'Reports', image: './assets/img/Reports-Icon.svg', link: '#' },
];

const sidebar = document.getElementById('sidebar');

sidebarItems.forEach(item => {
    const itemLink = document.createElement('a');
    itemLink.className = 'list-sidebar-item'; 
    itemLink.href = item.link; 

    const img = document.createElement('img');
    img.src = item.image;
    img.className = 'list-sidebar-icon mr-16'; 
    img.alt = `${item.title} Icon`;

    const title = document.createElement('span');
    title.className = 'list-sidebar-title';
    title.textContent = item.title;

    itemLink.appendChild(img);
    itemLink.appendChild(title);

    sidebar.appendChild(itemLink);
});