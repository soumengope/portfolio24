
const hPage_svgImg = document.querySelector('.hPage_svgImg');

hPage_svgImg.onclick = ()=>{
    hPage_svgImg.style.width='120px';
    hPage_svgImg.style.height = '60px';
    window.location.href = 'http://127.0.0.1:5500/Homepage/homeIndex.html';
}

// ALphabates control using javascript

const alpha = document.querySelectorAll('.alpha')
const alpha_con = document.querySelector('.alpha_con')
const hamburg = document.querySelector('.hamburg')
const contents = document.querySelector('.contents p')

const alpha_show = (eventVal, myText)=>{
    alpha_con.style.display = 'block'
    alpha_con.style.top = `${eventVal.pageY}px`
    alpha_con.style.left = `${eventVal.pageX}px`
    contents.innerText = `${myText}`
}

hamburg.addEventListener('click',()=>{
    alpha_con.style.display='none'
})

alpha.forEach((elem)=>{
    elem.addEventListener('click',(event)=>{
        if(alpha_con.style.display !== 'block'){
            let res = event.target.innerText;
            switch(res){
                case 'A':
                    alpha_show(event,`Astrology & Adventure`);
                    break;
                case 'B':
                    alpha_show(event,`Books`);
                    break;
                case 'C':
                    alpha_show(event,`Coding`);
                    break;
                case 'D':
                    alpha_show(event,`Decorative & Demotive`);
                    break;
                case 'E':
                    alpha_show(event,`Emphasize`);
                    break;
                case 'F':
                    alpha_show(event,`Freedom & Future`);
                    break;
                case 'G':
                    alpha_show(event,`Gain Wishdom`);
                    break;
                case 'H':
                    alpha_show(event,`Holmes`);
                    break;
                case 'I':
                    alpha_show(event,`Internet`);
                    break;
                case 'J':
                    alpha_show(event,`Judge`);
                    break;
                case 'K':
                    alpha_show(event,`Krishna & Knowledge`);
                    break;
                case 'L':
                    alpha_show(event,`Love and Learning`);
                    break;
                case 'M':
                    alpha_show(event,`M`);
                    break;
                case 'N':
                    alpha_show(event,`Natural & Nature`);
                    break;
                case 'O':
                    alpha_show(event,`Optimistic`);
                    break;
                case 'P':
                    alpha_show(event,`Perfection`);
                    break;
                case 'Q':
                    alpha_show(event,`Quality`);
                    break;
                case 'R':
                    alpha_show(event,`Revision`);
                    break;
                case 'S':
                    alpha_show(event,`Science & silent`);
                    break;
                case 'T':
                    alpha_show(event,`Truth,Trust,Travel`);
                    break;
                case 'U':
                    alpha_show(event,`Use`);
                    break;
                case 'V':
                    alpha_show(event,`Value`);
                    break;
                case 'W':
                    alpha_show(event,`Waste & wrong`);
                    break;
                case 'X':
                    alpha_show(event,`Xtreme`);
                    break;
                case 'Y':
                    alpha_show(event,`Yes`);
                    break;
                case 'Z':
                    alpha_show(event,`Z`);
                    break;
                case '?':
                    alpha_show(event,`Purpose of life`);
                    break;
                case '*':
                    alpha_show(event,`*`);
                    break;
                
            }
        }
    })
})