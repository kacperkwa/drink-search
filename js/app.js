const itemsList = document.querySelectorAll('.drink-list__item');
const searchInput = document.querySelector('.header__search-input');
const checkOnTheList = e => {
	const searchInputValue = e.target.value.toLowerCase();
	itemsList.forEach(item => {
		const itemListValue = item.textContent;
		if (itemListValue.toLocaleLowerCase().indexOf(searchInputValue) !== -1) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
};

addEventListener('keyup', checkOnTheList);
