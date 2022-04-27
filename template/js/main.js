try {
    //hamburger menu 
    const hamburger = document.querySelector('.hamburger');
    const mobMenu = document.querySelector('.mobile-menu');
    const mobileNavMenu = document.querySelector('.mobile-nav__menu');
    const navLink = mobileNavMenu.querySelectorAll('a');

    hamburger.addEventListener('click', mobileMenu);

    navLink.forEach(item => item.addEventListener('click', closeMenu));

    function mobileMenu(e) {
        e.preventDefault();
        hamburger.classList.toggle('active');
        mobMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        mobMenu.classList.toggle('active');
        document.body.classList.remove('no-scroll');
    }
} catch(e) {}


try {
    // Swiper SLider

    let swiper = new Swiper(".our-tech__slider", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        navigation: {
            nextEl: ".our-tech__next",
            prevEl: ".our-tech__prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            480: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            },
            993: {
                slidesPerView: 3,
                slidesPerGroup: 20,
            },
            1024: {
            slidesPerView: 3,
            spaceBetween: 20
            },
        },
    });

    let swiper2 = new Swiper(".news__slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".news__slider-next",
            prevEl: ".news__slider-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            769: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
            993: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    let swiper3 = new Swiper(".partners__slider", {
        slidesPerView: 'auto',
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
            slidesPerView: 2,
            },
            768: {
            slidesPerView: 2,
            },
            1024: {
            slidesPerView: 5,
            spaceBetween: 20
            },
        },
    });

    swiper3.loopDestroy();
    swiper3.loopCreate();
} catch(e) {}


try {
    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]'),
        scroll = calcScroll();

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show-modal');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        });
    });

    // function dlya togo wtobi ne ispolzovat kod 2 raza
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show-modal');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }

    modalCloseBtn.addEventListener('click', closeModal);

    // zakrivaetsya pri klike na body
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // zakrivaetsya pri najatiy esc
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show-modal')) {
            closeModal();
        }
    });

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
} catch(e) {}


try {
    // Filter Modal

    const filterTrigger = document.querySelectorAll('[data-filter]'),
        filter = document.querySelector('.filter'),
        filterCloseBtn = document.querySelector('[data-closee]'),
        scroll = calcScroll();

    filterTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            filter.classList.add('show-modal');
            filter.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        });
    });

    // function dlya togo wtobi ne ispolzovat kod 2 raza
    function closeFilter() {
        filter.classList.add('hide');
        filter.classList.remove('show-modal');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }

    filterCloseBtn.addEventListener('click', closeFilter);

    // zakrivaetsya pri klike na body
    filter.addEventListener('click', (e) => {
        if (e.target === filter) {
            closeFilter();
        }
    });

    // zakrivaetsya pri najatiy esc
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && filter.classList.contains('show-modal')) {
            closeFilter();
        }
    });

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
} catch(e) {}


try {
    // Filter

    const rangeSlider = document.querySelector('.filter__loadcapacity-slider');
    const rangeSlider2 = document.querySelector('.filter__liftingheight-slider');

    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [1000, 48000],
            connect: true,
            tooltips: true,
            step: 1,
            range: {
                'min': 1000,
                'max': 48000
            },
            format: {
                to: function(value) {
                    return parseInt(value);
                },
                from: function(value) {
                    return parseInt(value);
                }
            },
        });

        const loadCapacityInput0 = document.querySelector('#loadcapacity-input-0');
        const loadCapacityInput1 = document.querySelector('#loadcapacity-input-1');
        const inputs = [loadCapacityInput0, loadCapacityInput1];

        rangeSlider.noUiSlider.on('update', function(values, handle){
            inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;

            rangeSlider.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }

    if (rangeSlider2) {
        noUiSlider.create(rangeSlider2, {
            start: [2, 15200],
            connect: true,
            tooltips: true,
            step: 1,
            range: {
                'min': 2,
                'max': 15200
            },
            format: {
                to: function(value) {
                    return parseInt(value);
                },
                from: function(value) {
                    return parseInt(value);
                }
            },
        });

        const liftingheightInput0 = document.querySelector('#liftingheight-input-0');
        const liftingheightInput1 = document.querySelector('#liftingheight-input-1');
        const inputs = [liftingheightInput0, liftingheightInput1];

        rangeSlider2.noUiSlider.on('update', function(values, handle){
            inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;

            rangeSlider2.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }
} catch(e) {}


try {
    ;(function() {
        var catalogSection = document.querySelector('.news-catalog');
    
        if (catalogSection === null) {
            return;
        }
    
        var removeChildren = function(item) {
            while (item.firstChild) {
                item.removeChild(item.firstChild);
            }
        };
    
        var updateChildren = function(item, children) {
            removeChildren(item);
            for (var i = 0; i < children.length; i += 1) {
                item.appendChild(children[i]);
            }
        };
    
        var closestItemByClass = function(item, className) {
            var node = item;
    
            while(node) {
                if(node.classList.contains(className)) {
                    return node;
                }
    
                node = node.parentElement;
            }
    
            return null;
        };
    
        var catalog = catalogSection.querySelector('.news-catalog__wrapper');
        var catalogNav = catalogSection.querySelector('.news-catalog__nav');
        var catalogItems = catalogSection.querySelectorAll('.news-catalog__item');
    
        catalogNav.addEventListener('click', function(e) {
            var target = e.target;
            var item = closestItemByClass(target, 'news-catalog__nav-btn');
    
            if(item === null || item.classList.contains('is-active')) {
                return;
            }
    
            e.preventDefault();
    
            var filterValue = item.getAttribute('data-news-filter');
            var previousBtnActive = catalogNav.querySelector('.news-catalog__nav-btn.is-active');
    
            previousBtnActive.classList.remove('is-active');
            item.classList.add('is-active');
    
            if(filterValue === 'all') {
                updateChildren(catalog, catalogItems);
                return;
            }
    
            var filterdfItems = [];
            for (var i = 0; i < catalogItems.length; i += 1) {
                var current = catalogItems[i];
                if(current.getAttribute('data-category') === filterValue) {
                    filterdfItems.push(current);
                }
            }
    
            updateChildren(catalog, filterdfItems);
        });
    })();
} catch(e) {}


try {
    var swiper4 = new Swiper(".news-page__slider", {
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: ".news-page__slider-next",
            prevEl: ".news-page__slider-prev",
        },
        thumbs: {
            swiper: {
                el: '.news-page__mini-slider',
                slidesPerView: 3,
            }
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: ".news-page__pagination",
                },
            },
            768: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
            992: {
                slidesPerView: 1,
            }
        },
    });

    var swiper5 = new Swiper(".news-page__mini-slider", {
        spaceBetween: 32,
        slidesPerView: 3,
        watchOverflow: true,
        clickable: true,
    });

    let swiper6 = new Swiper(".sertificats__slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".sertificats__slider-next",
            prevEl: ".sertificats__slider-prev",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: ".sertificats__pagination",
                },
            },
            769: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
            993: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
} catch(e) {}


try {
    var swiper7 = new Swiper(".product-card__slider", {
        spaceBetween: 10,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
} catch(e) {}

try {
    //Tabs

    const tabs = document.querySelectorAll('.product-card__tabs-item'),
    tabsContent = document.querySelectorAll('.product-card__tabs-catalog'),
    tabsParent = document.querySelector('.tabs');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('is-active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('is-active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('product-card__tabs-item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
} catch(e) {}


try {
    const characteristicWrapper = document.querySelector('.characteristic-wrapper'),
          characteristicShowMore = document.querySelector('.characteristic-show-more');
    
    characteristicShowMore.addEventListener('click', (e) => {
        characteristicWrapper.classList.toggle('is-active');
        if(characteristicShowMore.innerHTML == 'Показать еще') {
            characteristicShowMore.innerHTML = 'Свернуть'
        } else {
            characteristicShowMore.innerHTML = 'Показать еще'
        }
        e.preventDefault();
    })
} catch(e) {}


try {
    // CATEGORY Filter

    const catrangeSlider = document.querySelector('.cat-filter__loadcapacity-slider');
    const catrangeSlider2 = document.querySelector('.cat-filter__liftingheight-slider');

    if (catrangeSlider) {
        noUiSlider.create(catrangeSlider, {
            start: [1000, 48000],
            connect: true,
            tooltips: true,
            step: 1,
            range: {
                'min': 1000,
                'max': 48000
            },
            format: {
                to: function(value) {
                    return parseInt(value);
                },
                from: function(value) {
                    return parseInt(value);
                }
            },
        });

        const catloadCapacityInput0 = document.querySelector('#cat-loadcapacity-input-0');
        const catloadCapacityInput1 = document.querySelector('#cat-loadcapacity-input-1');
        const catinputs = [catloadCapacityInput0, catloadCapacityInput1];

        catrangeSlider.noUiSlider.on('update', function(values, handle){
            catinputs[handle].value = Math.round(values[handle]);
        });

        const setCatrangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;

            catrangeSlider.noUiSlider.set(arr);
        };

        catinputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setCatrangeSlider(index, e.currentTarget.value);
            });
        });
    }

    if (catrangeSlider2) {
        noUiSlider.create(catrangeSlider2, {
            start: [2, 15200],
            connect: true,
            tooltips: true,
            step: 1,
            range: {
                'min': 2,
                'max': 15200
            },
            format: {
                to: function(value) {
                    return parseInt(value);
                },
                from: function(value) {
                    return parseInt(value);
                }
            },
        });

        const catliftingheightInput0 = document.querySelector('#cat-liftingheight-input-0');
        const catliftingheightInput1 = document.querySelector('#cat-liftingheight-input-1');
        const catinputs = [catliftingheightInput0, catliftingheightInput1];

        catrangeSlider2.noUiSlider.on('update', function(values, handle){
            catinputs[handle].value = Math.round(values[handle]);
        });

        const setCatrangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;

            catrangeSlider2.noUiSlider.set(arr);
        };

        catinputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setCatrangeSlider(index, e.currentTarget.value);
            });
        });
    }
} catch(e) {}


try {
    const favoriteBtn = document.querySelectorAll('.catalog__item-favorite-btn');
    
    favoriteBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    })
} catch(e) {}