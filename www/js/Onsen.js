var Navigator = document.querySelector('#onsNavigator');

document.addEventListener('init', function (event) {
    var page = event.target;

    //Home
    if (page.id === PAGES.home.id) {
        page.querySelector('#push-button').addEventListener('click', function() {
            Navigator.pushPage(PAGES.page2.path, {data: {title: 'Page 2'}});
        });
    }
    else if (page.id === PAGES.page2.id) {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        console.log(page.data.title);
    }
});

