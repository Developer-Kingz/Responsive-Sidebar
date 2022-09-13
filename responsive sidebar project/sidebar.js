const arrow = document.querySelector('.arrow')
// const none = document.querySelectorAll('.none')
const body = document.querySelector('.full-body')
const admin = document.querySelector('.jackson')
const dashboard = document.querySelector('.dash')
const backFront = document.querySelector('.back')
const task = document.querySelector('.tas')
const taskBox = document.querySelector('.task')
const thirtytwo = document.querySelector('.thirtytwo')
const plus = document.querySelector('.plus')
const notification = document.querySelector('.not')
const four = document.querySelector('.four')
const message = document.querySelector('.messages')
const inbox = document.querySelector('.inb')
const nine = document.querySelector('.nine')
const viewAll = document.querySelector('.eye')
const peter = document.querySelector('.cam')
const luvleen = document.querySelector('.video')
const suaHua = document.querySelector('.chat')
const drag = document.querySelector('.drag')
const dragInner = document.querySelector('.drag-inner')
const upload = document.querySelector('.upload')
const light = document.querySelector('.light')
const lite = document.querySelector('.lite')
const searchBox = document.querySelector('.searchbox')
const searchDiv = document.querySelector('.search-div')
const lit = document.querySelector('.lit')
const up = document.querySelector('.up')
const dak = document.querySelector('.dak')
const dark = document.querySelector('.dark')
const manager = document.querySelector('.manager-pic')
const manager2 = document.querySelector('.manager')
const ad = document.querySelector('.ad')
const secondClick = document.querySelector('.grenn')



let fullTheme = true

arrow.addEventListener('click', function(){
     console.log(fullTheme);

     if(fullTheme == true){

      
        body.style.width = "100px"
        admin.style.display ="none"
        dashboard.style.display = "none"
        backFront.style.display = "none"
        task.style.display = "none"
        thirtytwo.style.display = "none"
        plus.style.display = "none"
        notification.style.display = "none"
        four.style.display = "none"
        message.style.display = "none"
        inbox.style.display = "none"
        nine.style.display = "none"
        viewAll.style.display = "none"
        peter.style.display = "none"
        luvleen.style.display = "none"
        suaHua.style.display = "none"
        drag.style.width = "60px"
        drag.style.height = "60px"
      // dragInner.style.position = "relative"
      dragInner.style.position = "absolute"
      dragInner.style.top = "756px"
      dragInner.style.right = "1130px"
        upload.style.display = "none"
        taskBox.style.width = "55px"
        taskBox.style.height = "55px"
        searchDiv.style.width = "55px"
        searchDiv.style.height = "55px"
        searchBox.style.display = "none"
      light.style.flexDirection = "column"
      light.style.height = "100px"
      light.style.width = "50px"
      light.style.position ="absolute"
      light.style.right = "1200px"
        lite.style.width = "55px"
        lite.style.height = "55px"
        dark.style.width = "55px"
        dark.style.height = "55px"
        lit.style.display = "none"
        dak.style.display = "none"
        manager2.style.flexDirection = "column"
        arrow.style.justifyContent = "start"
        // arrow.style.marginTop = "10px"
        // arrow.style.marginBottom = "20px"

        
      
        
        
        fullTheme = false 
      
     } else {

      // location.reload();

      
      body.style.width = "320px"
      admin.style.display = null;
      dashboard.style.display = null;
      backFront.style.display = null;
      task.style.display = null;
      thirtytwo.style.display = null;
      plus.style.display = null;
      notification.style.display = null;
      four.style.display = null;
      message.style.display = null;
      inbox.style.display = null;
      nine.style.display = null;
      viewAll.style.display = null;
      peter.style.display = null;
      luvleen.style.display = null;
      suaHua.style.display = null;
      drag.style.width = null
      drag.style.height = null
      dragInner.style.position = null
      dragInner.style.position = null
      dragInner.style.top = null
      dragInner.style.left = null
        upload.style.display = null
        taskBox.style.width = null
        taskBox.style.height = null
        searchDiv.style.width = null
        searchDiv.style.height = null
        searchBox.style.display = null
        light.style.flexDirection = null
      light.style.height = null
      light.style.width = null
      light.style.position = null
      light.style.right = null
        lite.style.width = null
        lite.style.height = null
        dark.style.width = null
        dark.style.height = null
        lit.style.display = null
        dak.style.display = null
        manager2.style.flexDirection = null
        arrow.style.justifyContent = null

        

        fullTheme = true
     }
})



