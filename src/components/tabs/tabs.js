const tabsContentItems = document.querySelectorAll('.tabs__content-item'),
tabsItems = document.querySelectorAll('.tabs__item'),
tabsLinks = document.querySelectorAll('.tabs__link'),
tabsNav = document.querySelector('.tabs__nav');

tabsNav.addEventListener('click', e => {
  const el = e.target;

  if(el.classList.contains('tabs__link')) {
    e.preventDefault();
    tabsItems.forEach(item => {
      item.classList.remove('tabs__item--active');
      el.parentNode.classList.add('tabs__item--active');
    })
    const anchor = document.querySelector(el.hash);
    tabsContentItems.forEach(item => {
      item.classList.remove('tabs__content-item--active');
    })
    anchor.classList.add('tabs__content-item--active');
  }
})

tabsLinks[0].click();