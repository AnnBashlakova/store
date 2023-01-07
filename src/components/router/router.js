const route = (event) => {
    event = event || window.event;
    const target = event.target;
    event.preventDefault();
    window.history.pushState({}, "", target.href);
    handlerLoc();
};

const routes = {
    404: '../view/pages/404/404.html',
    '/': '../../index.html',
    '/cart': '../view/pages/cart/cart.html',
};

const handlerLoc = async () => {
    const path = window.location.pathname;
    const routing = routes[path] || routes[404];
    const html = await fetch(routing).then((data) => data.text());
    document.querySelector('.large-section').innerHTML = html;
};

document.querySelector('.nav-item').addEventListener('click', route);

window.onload = handlerLoc;
window.onpopstate = handlerLoc;