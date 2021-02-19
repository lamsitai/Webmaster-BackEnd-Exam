function thirdBody(){
    var a = document.getElementById('first-line');
    var b = document.getElementById('second-line');
    var c = document.getElementById('third-line');
    var one = document.getElementById('image-one');
    var two = document.getElementById('image-two');
    if(a.innerHTML === 'Thought for maximum results without irritation'){
        a.innerHTML = 'Innovative treatments for face skincare';
        b.innerHTML = 'Lorem ipsum dolor sit amNam porta vehicula purus, ac porttitor dolor consectetur ' +
            'eget. Vestibulum convallis dignissim ligula, at euismod tortor tempus id.';
        c.innerHTML = 'Lorem ipsum dolor sit amNam porta vehicula purus, ac porttitor dolor consectetur ' +
            'eget. Vestibulum convallis dignissim ligula, at euismod tortor tempus id.';
        one.src = 'image/home/body-3rd-image-reserve.jpg';
        two.src = 'image/home/body-4th-image-reserve.jpg';
    }else{
        a.innerHTML = 'Thought for maximum results without irritation';
        b.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim ' +
            'in eros elementum tristique.';
        c.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim ' +
            'in eros elementum tristique.';
        one.src = 'image/home/body-3rd-image.jpg';
        two.src = 'image/home/body-4th-image.jpg';
    }
}

function blogHover1() {
    var a = document.getElementById('blog-hidden-1');
    var x = document.getElementById('blog-text-1');
    a.style.opacity = '1';
    x.style.marginTop = '20%';
}
function blogNormal1() {
    var a = document.getElementById('blog-hidden-1');
    var x = document.getElementById('blog-text-1');
    a.style.opacity = '0';
    x.style.marginTop = '0';
}
function blogHover2() {
    var b = document.getElementById('blog-hidden-2');
    var y = document.getElementById('blog-text-2');
    b.style.opacity = '1';
    y.style.marginTop = '20%';
}
function blogNormal2() {
    var b = document.getElementById('blog-hidden-2');
    var y = document.getElementById('blog-text-2');
    b.style.opacity = '0';
    y.style.marginTop = '0';
}
function blogHover3() {
    var c = document.getElementById('blog-hidden-3');
    var z = document.getElementById('blog-text-3');
    c.style.opacity = '1';
    z.style.marginTop = '20%';
}
function blogNormal3() {
    var c = document.getElementById('blog-hidden-3');
    var z = document.getElementById('blog-text-3');
    c.style.opacity = '0';
    z.style.marginTop = '0';
}