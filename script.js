/* =========================================================
   LANDORA PROPERTIES
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= ELEMENTS ================= */

    const loader = document.getElementById("loader");

    const header = document.getElementById("header");

    const menuToggle = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const closeMenu = document.getElementById("closeMenu");

    const propertyModal = document.getElementById("propertyModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalClose = document.getElementById("modalClose");

    const modalImage = document.getElementById("modalImage");
    const modalTag = document.getElementById("modalTag");
    const modalTitle = document.getElementById("modalTitle");
    const modalLocation = document.getElementById("modalLocation");
    const modalSize = document.getElementById("modalSize");
    const modalPrice = document.getElementById("modalPrice");
    const modalRoad = document.getElementById("modalRoad");
    const modalDescription = document.getElementById("modalDescription");

    const contactForm = document.getElementById("contactForm");

    const toast = document.getElementById("toast");
    const toastTitle = document.getElementById("toastTitle");
    const toastMessage = document.getElementById("toastMessage");

    const scrollTop = document.getElementById("scrollTop");

    const currentYear = document.getElementById("currentYear");

    const searchButton = document.getElementById("searchButton");
    const locationFilter = document.getElementById("locationFilter");
    const typeFilter = document.getElementById("typeFilter");
    const budgetFilter = document.getElementById("budgetFilter");

    const propertyGrid = document.getElementById("propertyGrid");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");

    /* ================= LOADER ================= */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 900);

    });


    /* ================= HEADER SCROLL ================= */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* ================= SIDE MENU ================= */

    function openMenu() {

        if (!sideMenu || !menuOverlay) return;

        sideMenu.classList.add("open");
        menuOverlay.classList.add("show");

        document.body.classList.add("menu-open");

    }


    function closeSideMenu() {

        if (!sideMenu || !menuOverlay) return;

        sideMenu.classList.remove("open");
        menuOverlay.classList.remove("show");

        document.body.classList.remove("menu-open");

    }


    if (menuToggle) {
        menuToggle.addEventListener("click", openMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", closeSideMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeSideMenu);
    }


    /* ================= MENU LINKS ================= */

    const allNavLinks = document.querySelectorAll(
        '.desktop-nav a, .side-links a, .side-cta, .footer a[href^="#"], .hero a[href^="#"], .category-section a[href^="#"], .final-cta a[href^="#"]'
    );

    allNavLinks.forEach(link => {

        link.addEventListener("click", () => {

            closeSideMenu();

        });

    });


    /* ================= REVEAL ANIMATION ================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ================= COUNTERS ================= */

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target = Number(
                    counter.getAttribute("data-target")
                );

                let current = 0;

                const duration = 1800;

                const startTime = performance.now();


                function updateCounter(currentTime) {

                    const progress = Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                    const easeOut = 1 - Math.pow(1 - progress, 3);

                    current = Math.floor(target * easeOut);

                    counter.textContent = current.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent =
                            target.toLocaleString();
                    }

                }

                requestAnimationFrame(updateCounter);

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.6
        }
    );


    counters.forEach(counter => {
        counterObserver.observe(counter);
    });


    /* ================= TOAST ================= */

    let toastTimer;

    function showToast(title, message) {

        if (!toast) return;

        toastTitle.textContent = title;
        toastMessage.textContent = message;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {

            toast.classList.remove("show");

        }, 3500);

    }


    /* ================= PROPERTY DATA ================= */

    const properties = {

        "green-valley": {

            tag: "FEATURED PROPERTY",

            title: "Green Valley Residential Plot",

            location: "📍 Dindigul, Tamil Nadu",

            image:
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",

            size: "2400 sq.ft",

            price: "₹32 Lakhs",

            road: "30 ft Road",

            description:
                "A beautiful residential plot located in a peaceful and developing area of Dindigul. Suitable for building your dream home with convenient road access."
        },


        "nature-farm": {

            tag: "FARM LAND",

            title: "Nature's Green Farm Land",

            location: "📍 Madurai, Tamil Nadu",

            image:
                "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85",

            size: "1.5 Acres",

            price: "₹22 Lakhs",

            road: "Road Access",

            description:
                "Peaceful agricultural land surrounded by greenery. A suitable option for farming, gardening and enjoying a natural environment."
        },


        "golden-grove": {

            tag: "PREMIUM PROPERTY",

            title: "Golden Grove Premium Estate",

            location: "📍 Coimbatore, Tamil Nadu",

            image:
                "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",

            size: "4800 sq.ft",

            price: "₹68 Lakhs",

            road: "Premium Access",

            description:
                "An exclusive premium property in a desirable Coimbatore location. Designed for buyers looking for a spacious and distinctive property."
        },


        "sunrise-garden": {

            tag: "NEW PROPERTY",

            title: "Sunrise Garden Plots",

            location: "📍 Trichy, Tamil Nadu",

            image:
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",

            size: "1800 sq.ft",

            price: "₹19 Lakhs",

            road: "30 ft Road",

            description:
                "Affordable residential plots in a growing Trichy location. Suitable for families looking to plan and build a future home."
        }

    };


    /* ================= OPEN PROPERTY MODAL ================= */

    function openProperty(propertyId) {

        const property = properties[propertyId];

        if (!property || !propertyModal) return;


        modalImage.src = property.image;
        modalImage.alt = property.title;

        modalTag.textContent = property.tag;

        modalTitle.textContent = property.title;

        modalLocation.textContent = property.location;

        modalSize.textContent = property.size;

        modalPrice.textContent = property.price;

        modalRoad.textContent = property.road;

        modalDescription.textContent =
            property.description;


        propertyModal.classList.add("show");

        document.body.classList.add("modal-open");

    }


    function closePropertyModal() {

        if (!propertyModal) return;

        propertyModal.classList.remove("show");

        document.body.classList.remove("modal-open");

    }


    const propertyButtons =
        document.querySelectorAll(".view-property");


    propertyButtons.forEach(button => {

        button.addEventListener("click", () => {

            const propertyId =
                button.getAttribute("data-property");

            openProperty(propertyId);

        });

    });


    if (modalClose) {
        modalClose.addEventListener(
            "click",
            closePropertyModal
        );
    }

    if (modalOverlay) {
        modalOverlay.addEventListener(
            "click",
            closePropertyModal
        );
    }


    /* ================= MODAL ENQUIRY ================= */

    const modalEnquiry =
        document.querySelector(".modal-enquiry");


    if (modalEnquiry) {

        modalEnquiry.addEventListener("click", () => {

            closePropertyModal();

        });

    }


    /* ================= FAVORITE BUTTONS ================= */

    const heartButtons =
        document.querySelectorAll(".heart-btn");


    heartButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            button.classList.toggle("active");

            if (button.classList.contains("active")) {

                button.textContent = "♥";

                showToast(
                    "Added to Favourites",
                    "Property saved to your favourites."
                );

            } else {

                button.textContent = "♡";

                showToast(
                    "Removed",
                    "Property removed from favourites."
                );

            }

        });

    });


    /* ================= PROPERTY SEARCH ================= */

    function filterProperties() {

        if (!propertyGrid) return;

        const selectedLocation =
            locationFilter.value;

        const selectedType =
            typeFilter.value;

        const selectedBudget =
            budgetFilter.value;


        const cards =
            propertyGrid.querySelectorAll(".property-card");


        let visibleCount = 0;


        cards.forEach(card => {

            const cardLocation =
                card.getAttribute("data-location");

            const cardType =
                card.getAttribute("data-type");

            const cardBudget =
                card.getAttribute("data-budget");


            const locationMatch =
                selectedLocation === "all" ||
                selectedLocation === cardLocation;


            const typeMatch =
                selectedType === "all" ||
                selectedType === cardType;


            const budgetMatch =
                selectedBudget === "all" ||
                selectedBudget === cardBudget;


            if (
                locationMatch &&
                typeMatch &&
                budgetMatch
            ) {

                card.style.display = "";

                visibleCount++;

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";

                }, 50);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(15px)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 250);

            }

        });


        if (visibleCount === 0) {

            showToast(
                "No Properties Found",
                "Try changing your search filters."
            );

        } else {

            showToast(
                "Properties Updated",
                `${visibleCount} matching properties found.`
            );

        }

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            filterProperties
        );

    }


    /* ================= LOAD MORE ================= */

    const loadMore =
        document.getElementById("loadMore");


    if (loadMore) {

        loadMore.addEventListener("click", () => {

            showToast(
                "More Properties Coming",
                "New properties will be added soon."
            );

        });

    }


    /* ================= GALLERY ================= */

    const galleryImages =
        Array.from(
            document.querySelectorAll(".gallery-item img")
        );


    let currentGalleryIndex = 0;


    function openLightbox(index) {

        if (!galleryImages.length || !lightbox) return;

        currentGalleryIndex = index;

        lightboxImage.src =
            galleryImages[currentGalleryIndex].src;

        lightboxImage.alt =
            galleryImages[currentGalleryIndex].alt;

        lightbox.classList.add("show");

        document.body.classList.add("modal-open");

    }


    function closeLightbox() {

        if (!lightbox) return;

        lightbox.classList.remove("show");

        document.body.classList.remove("modal-open");

    }


    function showNextImage() {

        if (!galleryImages.length) return;

        currentGalleryIndex++;

        if (
            currentGalleryIndex >=
            galleryImages.length
        ) {
            currentGalleryIndex = 0;
        }

        lightboxImage.src =
            galleryImages[currentGalleryIndex].src;

        lightboxImage.alt =
            galleryImages[currentGalleryIndex].alt;

    }


    function showPreviousImage() {

        if (!galleryImages.length) return;

        currentGalleryIndex--;

        if (currentGalleryIndex < 0) {

            currentGalleryIndex =
                galleryImages.length - 1;

        }

        lightboxImage.src =
            galleryImages[currentGalleryIndex].src;

        lightboxImage.alt =
            galleryImages[currentGalleryIndex].alt;

    }


    galleryImages.forEach((image, index) => {

        image.parentElement.addEventListener(
            "click",
            () => openLightbox(index)
        );

    });


    if (lightboxClose) {
        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );
    }


    if (lightboxPrev) {
        lightboxPrev.addEventListener(
            "click",
            showPreviousImage
        );
    }


    if (lightboxNext) {
        lightboxNext.addEventListener(
            "click",
            showNextImage
        );
    }


    /* ================= CONTACT FORM ================= */

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();


            const phone =
                document.getElementById("phone").value.trim();


            const email =
                document.getElementById("email").value.trim();


            const propertyType =
                document.getElementById("propertyType").value;


            const preferredLocation =
                document.getElementById(
                    "preferredLocation"
                ).value;


            if (
                !name ||
                !phone ||
                !email ||
                !propertyType ||
                !preferredLocation
            ) {

                showToast(
                    "Missing Details",
                    "Please fill in all required fields."
                );

                return;

            }


            showToast(
                "Enquiry Sent Successfully!",
                `Thank you ${name}. We will contact you soon.`
            );


            contactForm.reset();

        });

    }


    /* ================= SCROLL TOP ================= */

    function updateScrollButton() {

        if (!scrollTop) return;

        if (window.scrollY > 600) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        updateScrollButton
    );


    if (scrollTop) {

        scrollTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================= ESC KEY ================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeSideMenu();

            closePropertyModal();

            closeLightbox();

        }


        if (
            event.key === "ArrowRight" &&
            lightbox &&
            lightbox.classList.contains("show")
        ) {

            showNextImage();

        }


        if (
            event.key === "ArrowLeft" &&
            lightbox &&
            lightbox.classList.contains("show")
        ) {

            showPreviousImage();

        }

    });


    /* ================= CURRENT YEAR ================= */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* ================= ANCHOR SMOOTH SCROLL ================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                closeSideMenu();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ================= INITIAL MESSAGE ================= */

    console.log(
        "🌿 LANDORA Properties website loaded successfully."
    );

});