
// $(document).ready(function(){                   //햄버거메뉴모션jQuery
//     $(".hamburger").click(function(){
//         $(this).toggleClass("is-active");
//     })
// });
//alert('main')



document.addEventListener('DOMContentLoaded',()=>{
   
    
    
    scrollEfect()
    mainMenuEfect()
    mainVisualEfect()
    productInfoEfect()
    noticeEfect()
    let visualSlide1=new VisualSlide('#covid_visual_slide',3000)
    let visualSlide2=new VisualSlide('#notice_popup_wrap',2000)
})





function mainMenuEfect(){//햄버거메뉴오픈효과
    const contents=document.querySelectorAll('.visual_wrap')
    const mainMenuWrap=document.querySelector('#main_menu_wrap')
    
    const mainMenuLi=document.querySelectorAll('#main_menu_list>li')
    const mainMenuList=document.querySelector('#main_menu_list')
    const mainMenuText=document.querySelectorAll('#main_menu_list>li>a')
    const subMenuText=document.querySelectorAll('#sub_menu_list li>a')
    const sub_subMenuText=document.querySelectorAll('#sub_sub_menu_list>li>a')

    const hamburgerMenu=document.querySelectorAll('.hamburger')
    const body=document.querySelector('body')

    let menuMenuWidth=mainMenuWrap.offsetWidth;
    
    let isOpen=false;
    let contentsWidth=contents[0].offsetWidth
    let contentsHeight=contents[0].offsetHeight
    let selectedMenu=null;
    
    init()
    initEvent()
    
        //hamburgerMenuEfect()
    function init(){
        gsap.set(mainMenuWrap,{width:contentsWidth})
        gsap.set(mainMenuWrap,{height:contentsHeight})
        gsap.set(mainMenuWrap,{left:-contentsWidth})

    }
    
    

    function initEvent(){
        hamburgerMenu[0].addEventListener('click',hamburgerMenuClick)
    }
    


    

    // function hamburgerMenuEfect(){ //햄버거메뉴효과
    //     const hamburgerMenu=document.querySelectorAll('.hamburger')
    
    //     hamburgerMenu[0].addEventListener('click',menuClick)
    
        // function menuClick(){
        //     if(selectedMenu!=null){
                
        //         this.classList.remove("is-active")
        //         selectedMenu=null
                
        //     }else if(selectedMenu==null){
        //         this.classList.add("is-active")
        //         selectedMenu=this;
        //     }
            
                //this.classList.toggle("is-active")
            
           
    //     }
    // }

    function hamburgerMenuClick(){
        if(isOpen==false){
            this.classList.add("is-active")
            
       
            
            isOpen=true;
            gsap.to(mainMenuWrap,{display:'block',left:0,opacity:0.95,duration:1,ease:'power4.out',onComplete:()=>{
                
            }})
        }else{
            
            this.classList.remove("is-active")
            gsap.to(mainMenuWrap,{display:'none',left:-contentsWidth,opacity:0.2,duration:0.5,ease:'power1.out',onComplete:()=>{
                
                isOpen=false;
            }})
        }
        
    }

      


}




function scrollEfect(){ //스크롤효과
    //alert('test')
    const mainMenuWrap=document.querySelector('#main_menu_wrap')
    const contents=document.querySelectorAll('.visual_wrap')

    const scrollMenu=document.querySelector('#right_scroll_menu')
    const scrollMenuList=document.querySelector('#right_scroll_menu_list')
    const scrollMenuLi=document.querySelectorAll('#right_scroll_menu_list>li')
    const scrollMenuA=document.querySelectorAll('#right_scroll_menu_list>li>a')
    // const scrollMenuASelected=document.querySelectorAll('#right_scroll_menu_list>li>a.selected')

    const scrollDown=document.querySelector('#main_bottom_scroll_down')
    const leftMenuBar=document.querySelector('#menu_bar')
    const hamburger=document.querySelectorAll('.hamburger>span')
    const leftMenuBarTextList=document.querySelector('#menu_bar_text_list')
    const leftMenuBarTextLi=document.querySelectorAll('#menu_bar_text_list>li')
    const leftMenuBarTextA=document.querySelectorAll('#menu_bar_text_list>li>a')

    const logo=document.querySelectorAll('#logo>a>img')
    

    let scrollHeight;
    let contentsHeight;
    let pageNum=0;
    let isWheel=false;
    let contentsLength=contents.length;

    let menuTop;
    let scrollY;
    let nextScrollMenu;
    let currentScrollMenu;
    let clickNum;
    let selectedIndex;
    let selectedMenu;

    //alert(contentsLength)

    contentsReset();
    scrollMenuWhite(0)
    initEvent();

    
    function initEvent(){
        window.addEventListener('resize',contentsReset)
        window.addEventListener('mousewheel',contentsWheel)
        window.addEventListener('scroll',menuScroll)
        scrollDown.addEventListener('click',scrollDownClick)
        for(const item of scrollMenuLi){
            item.addEventListener('click',scrollMenuClick)
        }
    }
    


    function scrollMenuClick(e){
        e.preventDefault()
        
        pageNum=getIndex(this)
      
    if(pageNum!=selectedMenu){
        selectedMenu=pageNum;
        
        contentsScroll(selectedMenu)
        menuColorChange(selectedMenu)

  
  
       
        console.log(selectedMenu)
    }
    if(pageNum==5){
        pageNum=0;
        contentsScroll(0)
        menuColorChange(0)
        
      }


      function getIndex(checkNum){
        selectedIndex=0;

        while((checkNum=checkNum.previousElementSibling)!=null){
            selectedIndex++;
        }
        return selectedIndex;
    }
     
    }


    function scrollDownClick(e){

        e.preventDefault()
        
        

        pageNum++;
        
        contentsScroll(pageNum)
      
        menuColorChange(pageNum)

    }

  
    
    function contentsReset(){
        scrollHeight=window.innerHeight;
        
        //alert(contentsHeight)

        gsap.set(contents,{height:scrollHeight})
    }

    function contentsScroll(num){
        scrollHeight=window.innerHeight;

        gsap.to('body,html',{scrollTop:scrollHeight*num,duration:0.7,ease:'power1.out',onComplete:()=>{
            isWheel=false;
        }})


    }

    function contentsWheel(e){
        if(e.wheelDelta<=-120 && isWheel==false && pageNum<contentsLength){
            isWheel=true;
            pageNum++;
            //console.log(pageNum)
            contentsScroll(pageNum)
            menuColorChange(pageNum)
        }else if(e.wheelDelta>-120 && isWheel==false && pageNum>0){
            isWheel=true;
            pageNum--;
            contentsScroll(pageNum)
            menuColorChange(pageNum)
        }
        


    }

    function menuColorChange(num){
        scrollHeight=window.innerHeight;
        scrollY=window.pageYOffset;
        if(num==1 || num==3 || num==4){
            
            gsap.to(scrollMenuA,{color:'black',delay:0.2,duration:0.1,ease:'power1.out'})
            gsap.set(scrollDown.children,{color:'black'})
            gsap.to(leftMenuBar,{borderRightColor:'gray',duration:0.2,ease:'power1.out'})
            gsap.to(hamburger,{backgroundColor:'gray',duration:0.2,ease:'power1.out'})
            gsap.to(leftMenuBarTextLi,{borderBottomColor:'gray',duration:0.2,ease:'power1.out'})
            gsap.to(leftMenuBarTextA,{color:'gray',duration:0.1,ease:'power1.out'})

            
            scrollMenuBlack(num)
            logoChangeBlue(num)


        }else{
            
            
            gsap.to(scrollMenuA,{color:'white',delay:0.2,duration:0.1,ease:'power1.out'})
            gsap.set(scrollDown.children,{color:'white'})
            gsap.to(leftMenuBar,{borderRightColor:'white',duration:0.2,ease:'power1.out'})
            gsap.to(hamburger,{backgroundColor:'white',duration:0.2,ease:'power1.out'})
            gsap.to(leftMenuBarTextLi,{borderBottomColor:'white',duration:0.2,ease:'power1.out'})
            gsap.to(leftMenuBarTextA,{color:'white',duration:0.2,ease:'power1.out'})


            scrollMenuWhite(num)
            logoChangeWhite(num)
           
            
        }
        if(num>=contentsLength){
            gsap.set(leftMenuBar,{display:'none'})
            gsap.set(scrollMenu,{display:'none'})
            gsap.set(logo,{display:'none'})
            gsap.set(mainMenuWrap,{display:'none'})
            gsap.set(scrollDown,{display:'none'})

        }else if(num<=contentsLength){
            gsap.set(leftMenuBar,{display:'block'})
            gsap.set(scrollMenu,{display:'block'})
            gsap.set(logo,{display:'block'})
            gsap.set(mainMenuWrap,{display:'block'})
            gsap.set(scrollDown,{display:'block'})
        }

        

        

    }


    function scrollMenuBlack(menuNum){
        
        for(const item of scrollMenuA){
            item.classList.remove('selected_white')
            item.classList.remove('selected_black')
        }
        
        scrollMenuLi[menuNum].children[0].classList.add('selected_black')
    }


    function scrollMenuWhite(menuNum){
        
        for(const item of scrollMenuA){
            item.classList.remove('selected_black')
            item.classList.remove('selected_white')
        }

        
        
        scrollMenuLi[menuNum].children[0].classList.add('selected_white')

    }

    function logoChangeBlue(num){
        
        gsap.to(logo,{top:-50,duration:0.5,ease:'power1.out'})

    }


    function logoChangeWhite(num){
        
        gsap.to(logo,{top:0,duration:0.5,ease:'power1.out',onComplete:()=>{
            isWheel=false;
        }})
        
    }


    function menuScroll(num){
        scrollHeight=window.innerHeight;
        menuTop=420;
        scrollY=window.pageYOffset;
        gsap.to(scrollMenu,{delay:0.2,top:scrollY+menuTop,duration:0.2,ease:'power1.out'})
        //gsap.set(mainMenuWrap,{top:scrollY})
       
       
        
    }

    
}

    









function mainVisualEfect(){//메인비주얼효과
    
    const btnList=document.querySelectorAll('#main_slide_control_wrap>.btn_wrap>li')
    const prevBtn=btnList[0]
    const stopBtn=btnList[1]
    const nextBtn=btnList[2]
    const playBtn=document.querySelectorAll('.play_btn')[0]
    //alert(playBtn.length)


    // const visualBgwrap=document.querySelector('#visual_bg_wrap')
    // const visualBg=document.querySelector('.visual_bg_slide')
    // const visualImgWrap=document.querySelector('#visual_img_wrap') 
    // const visualImg=document.querySelector('.visual_img_list')
    const visualBgWrap=document.querySelector('#visual_bg_wrap')
    const visualBgList=document.querySelector('#visual_bg_list')
    const visualBgLi=document.querySelectorAll('#visual_bg_list>li')


    const visualTextList=document.querySelector('#main_visual_text_list')
    const visualTextLi=document.querySelectorAll('#main_visual_text_list>li') 

    const visualImgWrap=document.querySelector('#visual_img_wrap')
    const visualImgList=document.querySelector('#main_visual_img_list')
    const visualImgLi=document.querySelectorAll('#main_visual_img_list>li')
    



    const slideNumber=document.querySelectorAll('.slide_number')[0].children;
    const slideBar=document.querySelector('#main_slide_bar>span')


    let visualBgWidth=visualBgLi.offsetWidth;
    let selectedSlideNum;
    let timer;
    let currentIndex=0;
    let nextIndex;
    let slideClickNum=0;
    let isSlide=false;
    
    let selectedSlide=visualTextLi[0]

    gsap.set(selectedSlide,{display:'block', opacity:1,top:0})



    
    let slideNumberLiWidth=slideNumber[0].offsetWidth;
    //alert(visualBgWidth)
    //alert(slideNumberLiWidth)

    let bgColorArray=['#6D1A00','#005C8F','#505050']

    let imgSlide_ani;
    let bgSlide_ani;
    let textSlide_ani;

    let depth=0;
    let isPlay=false;

    

   

    


    initEvent()
    slideNumActivate(0)
    autoPlay()
    
    function initEvent(){
        for(const item of slideNumber){
            item.addEventListener('click',slideNumClick)
        }
        
        prevBtn.addEventListener('click',slidePrev)
        nextBtn.addEventListener('click',slideNext)
        stopBtn.addEventListener('click',slideStop)
    }

    function slideStop(){
        if(isPlay==false){
            clearInterval(timer)
            gsap.set(stopBtn,{opacity:0})
            gsap.set(playBtn,{opacity:1,onComplete:()=>{
                isPlay=true;
            }})
        }else{
            autoPlay()
            gsap.set(stopBtn,{opacity:1})
            gsap.set(playBtn,{opacity:0,onComplete:()=>{
                isPlay=false;
            }})
            
        }
        

    }

    function slideNext(){
        if(isSlide==false){
            isSlide=true;
            clearInterval(timer)
            autoCount()
            autoPlay()
        }
    }

    function slidePrev(){
        slideClickNum--;
        clearInterval(timer)
        if(slideClickNum<0){
            slideClickNum=2;
        }

        if(isSlide==false){
            isSlide=true;
            slideNumActivate(slideClickNum)
            slideBarActivate(slideClickNum)            
            visualImgSlide(slideClickNum)
            visualBgSlide(slideClickNum)
            visualTextSlide(slideClickNum)
            autoPlay()
        }
        
    

    }

    
    function slideNumClick(){
        slideClickNum=getIndex(this)

       
            slideNumActivate(slideClickNum)
            slideBarActivate(slideClickNum)            
            visualImgSlide(slideClickNum)
            visualBgSlide(slideClickNum)
            visualTextSlide(slideClickNum)
       
        
    }

    function getIndex(checkNum){
        let selectedIndex=0;

        while((checkNum=checkNum.previousElementSibling)!=null){
            selectedIndex++;
        }
        return selectedIndex;
    }






    function visualBgSlide(num){ 

            
           if(bgSlide_ani!=null){

              bgSlide_ani.kill()
             
           }
           depth++;

                
           gsap.set(visualBgLi[num],{backgroundColor:bgColorArray[num],zIndex:depth, width:0})        

            bgSlide_ani=gsap.to(visualBgLi[num],{delay:0.25, backgroundColor:bgColorArray[num],width:100+'%', duration:1.5,ease:'power4.out', onComplete:()=>{
            // visualBgwrap.removeChild(visualBgwrap.children[0])
               bgSlide_ani=null
            }})




            //const newVisualBg=document.createElement('div')//새로운 bg생성       
           //newVisualBg.className="new_visual_bg_slide"
           //visualBgwrap.append(newVisualBg)
           //gsap.set(visualBgwrap.children[1],{backgroundColor:bgColorArray[num], width:0})
            // bgSlide_ani=gsap.to(visualBgwrap.children[1],{width:100+'%', duration:1.5,ease:'power4.out', onComplete:()=>{
            // visualBgwrap.removeChild(visualBgwrap.children[0])
            //    bgSlide_ani=null
            // }})

        
    }




    function visualImgSlide(num){

            

            if(imgSlide_ani!=null){
                imgSlide_ani.kill()    
    
            }

                //let newVisualImg=document.createElement('div')
                //newVisualImg.className="new_visual_img_list"
                //newVisualImg.innerHTML="<img src='/pf/images/mainvisual_0"+num+".jpg' alt='메인비주얼1'>"
                //visualImgWrap.append(newVisualImg)
    
            
                
                depth++;
    
                gsap.set(visualImgLi[num],{width:0, zIndex:depth})
    
                imgSlide_ani=gsap.to(visualImgLi[num],{width:820 ,duration:1.3,ease:'power4.out',onComplete:()=>{
                    
                    imgSlide_ani=null
                    //alert(depth)


                    //visualImgWrap.removeChild(visualImgWrap.children[0])
                }})

                

               

           
        
        
    }

    function visualTextSlide(num){

        
        if(textSlide_ani!=null){
            textSlide_ani.kill()
        }
        if(selectedSlide!=null){
            
            
            
            gsap.to(selectedSlide,{delay:0.2,opacity:0,top:60, duration:0.3,ease:'power1.out'})
          
        }

        selectedSlide=visualTextLi[num]
        gsap.set(selectedSlide,{delay:0.3,display:'block'})
        textSlide_ani=gsap.to(selectedSlide,{delay:0.3, opacity:1,top:0,duration:0.5,ease:'power1.out',onComplete:()=>{
            textSlide_ani=null
            isSlide=false;
        }})
            
    }


    
    function slideNumActivate(num){
        //alert(num)
        if(selectedSlideNum!=null){
            selectedSlideNum.classList.remove('selected')
        }
        selectedSlideNum=slideNumber[num]

        selectedSlideNum.classList.add('selected')

    }

    function slideBarActivate(num){
        gsap.to(slideBar,{left:num*slideNumberLiWidth,duration:0.2,ease:'power1.out'})
    }

    function autoPlay(){
        timer=setInterval(autoCount,3500)
    }


    function autoCount(){
        slideClickNum++;
        if(slideClickNum>=visualImgLi.length){
            slideClickNum=0;
        }
        slideNumActivate(slideClickNum)
        slideBarActivate(slideClickNum)            
        visualImgSlide(slideClickNum)
        visualBgSlide(slideClickNum)
        visualTextSlide(slideClickNum)
    }


    
}


// function covidContentsSlide(){
//     const covidContentsInner=document.querySelectorAll('.visual_inner')
//     const covidContentsList=document.querySelector('#contents_covid_slide')
//     const covidContentsLi=document.querySelectorAll('#contents_covid_slide>li')
//     const btnList=document.querySelectorAll('#contents_covid_control_wrap>.btn_wrap>li')
//     const prevBtn=btnList[0]
//     const stopBtn=btnList[1]
//     const nextBtn=btnList[2]
//     const playBtn=document.querySelectorAll('.play_btn')[1]
//     const slideNumber=document.querySelectorAll('.slide_number')[1].children;

//     let covidContentsWidth=covidContentsInner[0].offsetWidth;
//     let covidContentsLength=covidContentsLi.length;
//     let slideClickNum=0;
//     let selectedIndex;
//     let selectedSlideNum;
//     let isSlide=false;
//     let isPlay=false;

//     init();
//     initEvent();
//     slideNumActivate(0)
//     autoPlay()


//     function init(){
//         gsap.set(covidContentsList,{width:covidContentsWidth*covidContentsLength})

//     }


//     function initEvent(){
//         for(const item of slideNumber){
//             item.addEventListener('click',slideNumClick)
//         }
        
//         nextBtn.addEventListener('click',slideNext)
//         prevBtn.addEventListener('click',slidePrev)
//         stopBtn.addEventListener('click',slideStop)
//     }

//     function slideNext(){
//         if(isSlide==false){
//             isSlide=true;
//             autoCount()
//         }
        
//     }

//     function slidePrev(){
//         slideClickNum--;
//         if(slideClickNum<0){
//         slideClickNum=2;
//         }
//         if(isSlide==false){
//             isSlide=true;
//             slideNumActivate(slideClickNum)
//             visualSlide(slideClickNum)
//         }
        
//     }

//     function slideStop(){
//         if(isPlay==false){
//             clearInterval(timer)
//             gsap.set(stopBtn,{opacity:0})
//             gsap.set(playBtn,{opacity:1,onComplete:()=>{
//                 isPlay=true;
//             }})
//         }else{
//             autoPlay()
//             gsap.set(stopBtn,{opacity:1})
//             gsap.set(playBtn,{opacity:0,onComplete:()=>{
//                 isPlay=false;
//             }})
            
//         }
//     }

   
    
//     function slideNumClick(){
//         slideClickNum=getIndex(this)
//         slideNumActivate(slideClickNum)
//         visualSlide(slideClickNum)
        
//     }

    

//     function getIndex(checkNum){
//         selectedIndex=0;

//         while((checkNum=checkNum.previousElementSibling)!=null){
//             selectedIndex++;
//         }
//         //alert(selectedIndex)
//         return selectedIndex;
//     }

//     function slideNumActivate(num){
//         if(selectedSlideNum!=null){
//             selectedSlideNum.classList.remove('selected')
//         }
//         selectedSlideNum=slideNumber[num]

//         selectedSlideNum.classList.add('selected')
//     }

//     function visualSlide(num){
//         //alert(covidContentsWidth*num)
//         gsap.to(covidContentsList,{left:-covidContentsWidth*num,duration:1,ease:'power1.out',onComplete:()=>{
//             isSlide=false;
//         }})

//     }

//     function autoPlay(){
//         timer=setInterval(autoCount,3000)
//     }

//     function autoCount(){
//         slideClickNum++;
//         if(slideClickNum>=covidContentsLength){
//             slideClickNum=0;
//         }

        
//         //alert(slideClickNum)
//         slideNumActivate(slideClickNum)
//         visualSlide(slideClickNum)
//     }

    


// }



function productInfoEfect(){//4제품소개페이지
    const productInfoList=document.querySelector('#product_info_list')
    const productInfoLi=document.querySelectorAll('#product_info_list>li')
    const detailInfo=document.querySelectorAll('.product_detail_info')


    let overNum;
    let selectedIndex;

    for(const item of productInfoLi){
        item.addEventListener('mouseenter',detailInfoEnter)
        item.addEventListener('mouseleave',detailInfoLeave)
    }

    function detailInfoEnter(){
        overNum=getIndex(this)
        //alert('test')


        gsap.to(detailInfo[overNum],{top:0,duration:0.5,ease:'power1.out'})

        //alert(selectedIndex)
    }

    function detailInfoLeave(){

        gsap.to(detailInfo,{top:490,duration:0.5,ease:'power1.out'})
    }

    function getIndex(checkNum){
        selectedIndex=0;
        while((checkNum=checkNum.previousElementSibling)!=null){
            selectedIndex++;

        }
        return selectedIndex;
    }
}



function noticeEfect(){//5소식페이지효과

    
    const tabMenuLi=document.querySelectorAll('#tabmenu_list>li')
    
    const panelLi=document.querySelectorAll('#panel_list>li')

    const popUpVisualWrap=document.querySelector('#popup_visual_wrap')
    const popUpVisualList=document.querySelector('#popup_visual_list')
    const popUpVisualLi=document.querySelectorAll('#popup_visual_list>li')
    const dot=document.querySelectorAll('#popup_slide_gather>li')
    const btnList=document.querySelectorAll('#popup_btn_wrap>li')
    const prevBtn=btnList[0]
    const stopBtn=btnList[1]
    const nextBtn=btnList[2]
    const playBtn=document.querySelectorAll('#popup_play')
    

    let selectedPanel=panelLi[0]
    let selectedMenu=tabMenuLi[0]
    let selectedtabA=null;
    let clickNum;



    
    tabMenu()
    //popUpSlide()

    function tabMenu(){

        
        init()
        initEvent()
        tabMenuActivate(0)

        function init() {
            gsap.set(panelLi,{display:'none'})
            gsap.set(selectedPanel,{display:'block'})
            
        }
    
        function initEvent() {
            for(const item of tabMenuLi){
                item.addEventListener('click',tabMenuClick)
            }
            
        }
    
        function tabMenuClick(e){
            
            clickNum=getIndex(this)
            //alert(clickNum)
    
            e.preventDefault()
            tabMenuActivate(clickNum)
            panelActivate(clickNum)
        }
    
        function getIndex(checkNum){
            let selectedIndex=0;
            while((checkNum=checkNum.previousElementSibling)!=null){
                selectedIndex++
            }
            return selectedIndex;
        }
    
        function tabMenuActivate(num){
            
        
            if(selectedtabA!=null){
                
                selectedtabA.classList.remove('selected')
            }
            selectedtabA=tabMenuLi[num].children[0]
            
            selectedtabA.classList.add('selected')
        }
    
        function panelActivate(num){
            if(selectedPanel!=null){
                gsap.set(selectedPanel,{display:'none'})
            }
    
            selectedPanel=panelLi[num]
            gsap.set(selectedPanel,{display:'block'})
        }
    }








    // function popUpSlide(){//슬라이드

    //     let visualWidth=popUpVisualWrap.offsetWidth;
    //     let visualLength=popUpVisualLi.length;
    //     let clickNum;
    //     let selectedIndex;
    //     let selectedDot;
    //     let isPlay=false;
    //     let isSlide=false;
    //     let timer;


    //     init()
    //     initEvent()
    //     dotClick(0)
    //     autoPlay()

    //     function init(){
    //         gsap.set(popUpVisualList,{width:visualWidth*visualLength})
    //         //alert(visualWidth*visualLength)
    //     }

    //     function initEvent(){
    //         for(const item of dot){
    //             item.addEventListener('click',dotClick)
    //         }

    //         nextBtn.addEventListener('click',slideNext)
    //         prevBtn.addEventListener('click',slidePrev)
    //         stopBtn.addEventListener('click',slideStop)
    //     }


        
    // function slideNext(){
    //     if(isSlide==false){
    //         isSlide=true;
    //         autoCount()
    //     }
        
    // }

    // function slidePrev(){
    //     clickNum--;
    //     if(clickNum<0){
    //         clickNum=2;
    //     }
    //     if(isSlide==false){
    //         isSlide=true;
    //         dotActivate(clickNum)
    //         visualSlide(clickNum)
    //     }
        
    // }

    // function slideStop(){
    //     if(isPlay==false){
    //         clearInterval(timer)
    //         gsap.set(stopBtn,{opacity:0})
    //         gsap.set(playBtn,{opacity:1,onComplete:()=>{
    //             isPlay=true;
    //         }})
    //     }else{
    //         autoPlay()
    //         gsap.set(stopBtn,{opacity:1})
    //         gsap.set(playBtn,{opacity:0,onComplete:()=>{
    //             isPlay=false;
    //         }})
            
    //     }
    // }

    //     function dotClick(){
    //         clickNum=getIndex(this)

    //         dotActivate(clickNum)
    //         visualSlide(clickNum)
    //     }

    //     function getIndex(checkNum){
    //         selectedIndex=0
    //         while((checkNum=checkNum.previousElementSibling)!=null){
    //             selectedIndex++
    //         }

    //         return selectedIndex;
    //     }

    //     function dotActivate(num){
            
    //         if(selectedDot!=null){
    //             selectedDot.classList.remove('selected')
    //         }
    //         selectedDot=dot[num]
    //         selectedDot.classList.add('selected')
    //     }


    //     function visualSlide(num){
    //         gsap.to(popUpVisualList,{left:-visualWidth*num,duration:0.5,ease:'power1.out',onComplete:()=>{
    //             isSlide=false;
    //         }})
            
    //     }

    //     function autoCount(){
    //         clickNum++
    //         if(clickNum>=visualLength){
    //             clickNum=0;
    //         }
    //         dotActivate(clickNum)
    //         visualSlide(clickNum)
    //     }


    //     function autoPlay(){
    //         timer=setInterval(autoCount,2000)
    //     }



    // }

    
}
  
        
    






class VisualSlide{
    constructor(selectVisual,speed){
        this.visualSlideName=document.querySelector(selectVisual)
        this.visualWrap=this.visualSlideName
        this.speed=speed
        this.visualInner=this.visualSlideName.children[0]
        this.visualList=this.visualInner.children[1]
        this.visualLi=this.visualList.children
        this.btnWrap=this.visualInner.children[2].children[0]
        this.playBtn=this.visualInner.children[2].children[1]
        this.prevBtn=this.btnWrap.children[0]
        this.stopBtn=this.btnWrap.children[1]
        this.nextBtn=this.btnWrap.children[2]
        this.indexBtnWrap=this.visualInner.children[2].children[2]
        this.indexBtnList=this.indexBtnWrap.children

        this.slideWidth=this.visualInner.offsetWidth
        this.slideLength=this.visualLi.length
        this.isSlide=false;
        this.isPlay=false;
        this.timer;
        this.clickNum=0;
        this.selectedNum;
        this.selectedIndex=0;

        this.init()
        this.initEvent()
        this.slideNumActivate(0)
        
        this.autoPlay()
        
        
    }

    init(){
        gsap.set(this.visualList,{width:this.slideWidth*this.slideLength})
        //alert(this.slideWidth*this.slideLength)
    }

    initEvent(){
        for(const item of this.indexBtnList){
            item.addEventListener('click',(e)=>{
                this.clickNum=this.getIndex(e.currentTarget)
                //alert(this.clickNum)
                this.slideNumActivate(this.clickNum)
                this.visualSlide(this.clickNum)
            })
        }

        this.nextBtn.addEventListener('click',()=>{
                
            if(this.isSlide==false){
                this.isSlide=true;
                clearInterval(this.timer)
                this.clickNum++;
                if(this.clickNum>=this.slideLength){
                    this.clickNum=0;
                }
                this.slideNumActivate(this.clickNum)
                this.visualSlide(this.clickNum)
                this.autoPlay()
            }
        })

        this.prevBtn.addEventListener('click',()=>{
                
            if(this.isSlide==false){
                this.isSlide=true;
                clearInterval(this.timer)
                this.clickNum--;
                //alert(this.clickNum)
                if(this.clickNum<0){
                    this.clickNum=2;
                }
                
                this.slideNumActivate(this.clickNum)
                this.visualSlide(this.clickNum)
                this.autoPlay()
            }
        })

        this.stopBtn.addEventListener('click',()=>{

                if(this.isPlay==false){
                clearInterval(this.timer)
                gsap.set(this.stopBtn,{opacity:0})
                gsap.set(this.playBtn,{opacity:1,onComplete:()=>{
                    this.isPlay=true;
                }})
            }else{
                this.autoPlay()
                gsap.set(this.stopBtn,{opacity:1})
                gsap.set(this.playBtn,{opacity:0,onComplete:()=>{
                    this.isPlay=false;
                }})
                
            }
        })
    }

    getIndex(checkNum){
        this.selectedIndex=0;
        while((checkNum=checkNum.previousElementSibling)!=null){
            this.selectedIndex++;
        }
        return this.selectedIndex;
    }

    slideNumActivate(num){
        
        if(this.selectedNum!=null){
            this.selectedNum.classList.remove('selected')
        }
        this.selectedNum=this.indexBtnList[num]
        this.selectedNum.classList.add('selected')

    }

    visualSlide(num){
        gsap.to(this.visualList,{left:-this.slideWidth*num,duration:1,ease:'power1.out',onComplete:()=>{
            this.isSlide=false;
        }})
    }

    autoPlay(){
        
            this.timer=setInterval(()=>{
            
            
                this.clickNum++;
                //alert(this.clickNum)
                
                if(this.clickNum>=this.slideLength){
                    this.clickNum=0;
                }
                //alert(this.clickNum)
                this.slideNumActivate(this.clickNum)
                this.visualSlide(this.clickNum)
            },this.speed)
        
        
    }

    
}