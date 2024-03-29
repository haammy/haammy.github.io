
const HD=document.querySelector('#hd');

window.addEventListener('scroll', ()=>{
    let sct=window.scrollY;
    sct>0 ? HD.classList.add('on') : HD.classList.remove('on')
});

//scroll event
const SEC = document.querySelectorAll('.action');
const WT=window.innerHeight;

window.addEventListener("scroll", ()=>{
        let sct=window.scrollY;
        SEC.forEach(e=>{
            let secTop = e.offsetTop;
            let secH=e.clientHeight;
            sct > secTop -(WT-secH)/2 -200 ? e.classList.add('on') : e.classList.remove('on');
        });
});

const totopBtn=document.querySelector('#totop');

// totopBtn.addEventListener('click', ()=>{
//     window.scrollTo({top:0, behavior:'smooth'})
// })

const SLIDEBAR = document.querySelector('.slide_bottom .bar');
const mainSlier = new Swiper('.main_slider', {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 100,
    autoplay:{
        delay:2000,
    },
    pagination: {
        el: '.main_visual .page',
        type: "fraction",
    },
    navigation: {
        nextEl: '.main_visual .btn_next',
        prevEl: '.main_visual .btn_prev',
    },
    autoplayDisableOnInteraction:false,

});

SLIDEBAR.classList.add('on');
mainSlier.on('slideChangeTransitionEnd', ()=>{
    SLIDEBAR.classList.add('on')
});
mainSlier.on('slideChangeTransitionStart', ()=>{
    SLIDEBAR.classList.remove('on')
});


const productSlier = new Swiper('.pr_slider', {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 30,

    pagination: {
        el: '.pr_btn .page',
        //type: "fraction",
    },
    navigation: {
        nextEl: '.pr_btn .btn_next',
        prevEl: '.pr_btn .btn_prev',
    },
});


const productSlier02 = new Swiper('.pr2_slider', {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 120,
    pagination: {
        el: '.pr_btn .page',
        //type: "fraction",
    },
    navigation: {
        nextEl: '.pr_btn .btn_next',
        prevEl: '.pr_btn .btn_prev',
    },
});

const productSlier03 = new Swiper('.pr3_slider', {
    loop:true,
    navigation: {
        nextEl: '.pr_btn .btn_next',
        prevEl: '.pr_btn .btn_prev',
    },
});

//swiper addClass on
const sItm = document.querySelectorAll('.sc04 .swiper-slide');
// $('.swiper-slide');
const itm = document.querySelector('.sc04 .swiper-slide-active');
itm.classList.add('on');
productSlier02.on('slideChangeTransitionEnd',()=>{
    const itm = document.querySelector('.sc04 .swiper-slide-active');
    itm.classList.add('on');
});
productSlier02.on('slideChangeTransitionStart', ()=>{
    sItm.forEach(e=>e.classList.remove('on'));
});



