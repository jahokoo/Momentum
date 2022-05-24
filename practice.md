# Front

- **JS**
    
    ## Variable
    
    **var** : 변수선언과 동시에 초기화
    
    ```jsx
    var name = "jaho";
    var name = "hoja";
    var name = "koo";
    // 무한 생성과 동시에 초기화
    
    console.log(name);
    	// 'koo'
    // 가장 마지막에 선언한 변수의 값으로 변경
    ```
    
    **let :** 중복불가 업데이트 가능 (지역변수)
    
    ```jsx
    let name = “jaho”;
    console.log(name)
    	// jaho
    
    name = “koo”;
    	//koo  /  jaho -> koo로 업데이트
    
    let name ="jaho";
    	// Cannot redeclare block-scoped variable
    ```
    
    **const :** 중복불가 업데이트 불가능 (상수)
    
    ```jsx
    const name = "jaho";
    name = "koo";
    console.log(name)
    	// Uncaught TypeError: Assignment to constant variable
    ```
    
    ## Types
    
    **true & false**
    
    ```jsx
    var naruto = true
    console.log(naruto)
    	// true
    console.log(naruto == sasuke)
    	// false
    
    //반대로 naruto = false 라면
    var naruto = false
    console.log(naruto == naruto)
    	//true  / false = false 가 진실 이기에 true
    ```
    
    **null**
    
    ```jsx
    let sasuke = null
    console.log(sasuke)
    	// null   / 말 그대로 비어있음 (null 값 하나 뿐)
    
    console.log(sasuke + 2)
    	 // 2
    
    ```
    
    **undefined**
    
    ```jsx
    // sonething 이라는 변수는 있지만 값은 정의 되지않음
    let something;
    console.log(something)
    	// undefined / 정의되지 않음
    
    console.log(something + 2)
    	// NaN
    	// Not-A-Number(숫자가 아님)
    
    ```
    
    ## Object
    
    ```jsx
    
    const player = {
        name : "jaho",
        points : 10,
        fat : true,
    };
    
    console.log(player);
    	// {name: 'jaho', points: 10, fat: true}
    
    //업데이트
    player.fat = false; 
    console.log(player); 
    	// {name: 'jaho', points: 10, fat: false}  //true -> false
    
    //원하는 정보만 가져오자
    //이름만 가져오고 싶다면 player.name
    console.log(player.name)
    	// 'jaho'
    
    ```
    
    ## Function
    
    - 뻥션
        
        ```jsx
        
        // 코드의 반복을 최소한으로 줄이기 위해 사용해 보자.
        function sayHello(name){
            console.log("hi my name is " + name);
        }
        
        sayHello("jaho");
        sayHello("totoro");
        sayHello("dodo");
        
        	/* "hi my name is jaho "
        	"hi my name is totoro "
        	"hi my name is dodo " */
        	
        
        // alert를 넣어보자
        function sayHello(name){
            alert("hi my name is " + name);
        }
        sayHello("jaho");
        
        // 나이를 추가해보자.
        function sayHello(name,age){
            console.log("hi my name is " + name + "and i am " + age);
        }
        
        sayHello("jaho",12);
        ```
        
    - 연산함수 만들기
        
        더하기
        
        ```jsx
        function plus(firstNumber,secondNumber) {
            console.log(firstNumber + secondNumber);
        }
        
        plus(8,60);
        	//68
        ```
        
        나누기
        
        ```jsx
        function divide(a,b){
            console.log(a / b);
        }
        divide(123,33)
        	//3.727272727272727
        ```
        
    - object 안에 function만들기
        
        ```jsx
        const player = {
            name : "jaho",
            sayHello : function(){
                console.log("hello!");
            }
        };
        
        console.log(player.name);
        player.sayHello();
        	// jaho
        	// hello!
        ```
        
    - 계산기 만들기
        
        ```jsx
        const calculator = {
            plus : function(a,b){
                console.log(a + b)
            },
            minus : function(a,b){
                console.log(a - b)
            },
            div : function(a,b){
                console.log(a / b)
            },
            mul : function(a,b){
                console.log(a * b)
            },
        		power :function(a,b){
        				console.log(a ** b)
        };
        
        calculator.plus(2,5)
        calculator.minus(2,5)
        calculator.div(2,5)
        calculator.mul(2,5)
        calculator.power(2,5)
        ```
        
    
    ## Return
    
    - return을 이해해 보자
        
        ```jsx
        const age = 28;
        //나이에 2살을 더하는 function
        function calAge(age){ 
           return age + 2; 
        //function에 return을 넣지 않을경우 => undefined  -> 반환되는 값이 정의되지 않음
        }
        
        const krAge = calAge(age);
        console.log(krAge)
        	// 30
        ```
        
        ```jsx
        const age = 28;
        //나이에 2살을 더하는 펑션
        function calAge(age){ 
          age + 2;   
        	return "string something"
        	//function에 return을 넣지 않을경우 => undefined -> 반환되는 값이 정의되지 않음
        }
        
        const krAge = calAge(age);
        console.log(krAge)
        	// 'string something'
        
        // krAge 라는 코드가 calAge라는 function을 호출함으로써
        // calAge function은 응답(return)값을 줌으로 'string something' 이 나오게 된다.
        /*return과 함께 function은 끝이난다.
        	 ex ) 
        	return "string something"
        	age + 2;
        	
        	위 처럼 return이 먼저 오게된다면 age + 2는 진행하지 않고 function이 끝나버린다.*/
        ```
        
    - 계산기 console.log를 return으로 바꿔보자
        
        ```jsx
        const calculator = {
            plus : function(a,b){
                return(a + b)
            },
            minus : function(a,b){
                return(a - b)
            },
            div : function(a,b){
                return(a / b)
            },
            mul : function(a,b){
                return(a * b)
            },
            power : function(a,b){
                return(a ** b)
            }
        };
        
        // function을 호출하는 변수(plusResult)에게 return 값으로 반환
        const plusResult = calculator.plus(2,5);
        // return값이 담겨있는 plusResult를 console창에 보여준다
        console.log(plusResult); 
        	// 7
        ```
        
    
    ## Conditionals
    
         **prompt**(입력창을 띄워줌)
    
    ```jsx
    const age = prompt("how old are you");
    
    console.log(age);
    ```
    
    **typeof(타입 알아보기)**
    
    ```jsx
    console.log(typeof age);
    ```
    
    **parsInt(Number로 변경)**
    
    ```jsx
    console.log(parseInt(age));
    
    // 나이를 물어보는 창이 나오고 입력하면 parsInt로 인하여 string값이 number로 형변환 되어 출력된다.
    const age = parseInt(prompt("당신의 나이는?"));
    console.log(age); // 숫자가 아닌 나머지 값을 입력하면 NaN(Not a Number)을 출력
    ```
    
    **isNaN**
    
    ```jsx
    const age = parseInt(prompt("당신의 나이는?"));
    
    console.log(isNaN(age)); // age가 NaN이라는 뜻 즉 숫자 = false string = true
    
    // 만약 age가 숫자가 아니라면 console.log 실행
    if(isNaN(age)){
        console.log("Please write a number")
    }
    ```
    
    ```jsx
    /* 만약 age 값이 15라면
    false값이 되어 else if로 넘어감
    12 < 18 = true 이므로 console창에 값을 띄운다. */
    
    if(isNaN(age) || age < 0){ // 숫자가 아니거나 0 미만
        console.log("Please write a real positive number");
    }else if(age < 18){ # 18세 미만
        console.log("you are too young")
    }else if(age >=18 && age <= 50){
     // 18세 이상 50세 이하 &&(AND연산자)는 두 값이 true여야만 성립
    		console.log("you can drink.");
    }else if(age > 50 && age <= 80){
     // 51 이상 80이하
    		console.log("you should exercise");
    }else{
        console.log("you can do whatever you want.");
    };
    
    // 10 === 20  : false
    // 10 !== 20 : true
    // 10 === 10 : true
    
    ```
    
     
    
    ## Document Object
    
    JS와 HTML은 연결되어 있다.
    
    즉 JS는 HTML에 관여할수 있다.
    
    ```jsx
    document  // HTML의 코드를 보여준다.
    document.title // HTML의 타이틀만 보여준다.
    // 기존 document의 타이틀을 변경해 보자
    document.title = "비밀의 방"
    
    ```
    
    ## HTML in Javascript
    
    HTML 에서 h1 태그에게 id값을 줘보자
    h1 = 제목1
    
    h2 = 제목2
    
    ```jsx
    
    <h1 id="title">Grab me</h1>
    ```
    
    document.getElementById()태그를 사용하여 html의 “title”이라는 Id를 가져온다.
    
    ```jsx
    //document (html)에서 Id인 Element를 가져온다.
    const title = document.getElementById("title")
    console.log(title)
    ```
    
    innerText를 사용하여 h1의 text를 변경해 보자.
    
    ```jsx
    const title = document.getElementById('title')
    title.innerText="What is this?"
    //Grab me -> What is this
    
    //그 외에 id or className 불러오기
    console.log(title.id)
    console.log(title.className)
    ```
    
    ## Searching for Elements
    
    **getElementBy… / getElementsBy…**
    
    ```jsx
    // class 찾기
    document.getElementsByClassName()
    // tag 찾기
    document.getElementsByTagName()
    // name찾기
    document.getElementsByName()
    
    // id 찾기는 getElement 이다. id는 중복불가
    document.getElementById()
    ```
    
    **QuerySelector**
    
    ```jsx
    document.querySelector()
    
    // id = #    /    class = .
    
    // id가 title인것을 찾고 싶다면
    document.querySelector("#title")
    // class가 some인것을 찾고 싶다면
    document.querySelector(".some")
    
    // tag와 관련된 모든것을 찾고 싶을 때는 querySelectorAll()
    document.querySelectorAll(".some") // class가 some인 모든것들을 documnet에서 검색
    
    ```
    
    ## Events
    
    - **Enter , click , scroll 등..**
        
        ```jsx
        
        const title = document.querySelector("h1");
        
        //title 클릭시 Event 발생하는 function
        function handleTitleClick(){
        console.log("title was clicked!")
        // 색상 변경
        title.style.color = "green";
        };
        
        // Listener로 Event를 볼수있다.
        title.addEventListener("click",handleTitleClick);
        
        // "click" 이외에도 copy, mousemove, wheel 등 많은 Event가 있다.
        
        ```
        
    - **Mouse Events**
        
        ```jsx
        //마우스를 갖다대면 Text와 색상이 변경된다.
        function handleMouseEnter(){
        title.innerText = "Mouse is here!"
        title.style.color = "green";
        }
        
        //마우스가 떠나면 Text와 색상이 변경된다.
        function handleMouseLeave(){
        title.innerText = "Mouse is gone.."
        title.style.color = "red";
        }
        
        title.addEventListener("mouseenter",handleMouseEnter);
        // 보다 직접적인 listener
        title.onmouseleave = handleMouseLeave;
        ```
        
    - **Window**
        
        ```jsx
        //( window  >  document   # window는 최상위 객체 그 안에 document 포함)
        //resize 하면 배경색이 바뀌는 function
        function handleWindowResize(){
            document.body.style.backgroundColor = "tomato";
        }
        
        window.addEventListener('resize',handleWindowResize);
        
        // copy Event
        function hadleWindowCoffee(){
            alert('copy it');
        }
        window.addEventListener('copy',hadleWindowCoffee);
        
        // offline & online 시 alert로 알려주기
        function handleWindowOffline(){
            alert("No WIFI")
        }
        
        function handleWindowOnline(){
            alert("it's online")
        }
        
        window.addEventListener('offline',handleWindowOffline)
        window.addEventListener('online',handleWindowOnline)
        
        ```
        
    
    ## CSS in Javascript
    
    - **h1 을 클릭하여 색상변경하기**
        
        ```jsx
        // css를 변경해보자.
        const title = document.querySelector("h1");
        
        function handleTitleClick(){
        	// 중복되는 코드(title.style.color)를 변수로 만듬
            const currentColor = title.style.color;
        	// upadate 되야 함으로 let으로 변수 생성
            let newColor;
            if (currentColor === 'blue') {
                newColor = 'tomato';
            }else{
                newColor = 'blue';
            }
        	// 정의되지 않은(undefined) newColor를 정의
            title.style.color = newColor;
        };
        
        title.addEventListener("click",handleTitleClick)
        ```
        
    - **classList**
        
        ```jsx
        // classList는 className을 목록으로 작업할 수 있다.
        const title = document.querySelector("h1");
        
        function handleTitleClick(){
            const clickedClass = 'clicked';
           if(title.classList.contains(clickedClass)){  //만약 포함하고있다면
               title.classList.remove(clickedClass) //삭제
            }else{
               title.classList.add(clickedClass) //추가
           }
        };  
        
        title.addEventListener("click",handleTitleClick)
        
        // toggle을 사용하면 가독성이 훨씬 좋아지고 기능은 같다(미친기능;).
        function handleTitleClick(){
        	title.classList.toggle("clicked")
        }
        
        ```
        
        **CSS코드**
        
        ```css
        body {
            background-color: beige;
        }
        
        h1 {
            color : blue;
        }
        .clicked {
            color : tomato;
            transition: color 0.5s ease-in-out
        }
        
        .just-font{
            font-family: 'Courier New', Courier, monospace;
            transition: color 0.5s ease-in-out
        }
        ```
        
        HTML코드
        
        ```html
        <!DOCTYPE html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Momentum</title>
            <link rel="stylesheet" href="style.css">
            
        </head>
        <body>
            <h1 class="just-font">Grab me</h1>
            <script src="app.js"></script>
        </body>
        </html>
        ```
        
    
    ## Input Values
    
    HTML
    
    ```html
    
        <div id="login-form">
            <input type="text" placeholder="이름이 뭔가요?">
            <button>LogIn</button>
        </div>
        <script src="app.js"></script>
    ```
    
    JS
    
    ```jsx
    const loginInput = document.querySelector("input");
    const loginButton = document.querySelector("button");
    
    function LoginBtnClick(){
    	// input의 value값을 보여준다.
        console.log("hello "+loginInput.value)
    }
    loginButton.addEventListener("click",LoginBtnClick)
    ```
    
    ## Form Submission
    
    ```jsx
    const loginInput = document.querySelector("input");
    const loginButton = document.querySelector("button");
    
    function LoginBtnClick(){
        const username = loginInput.value;
        if(username === ""){ // 공백 이라면
            alert("이름을 작성해 주세요")
        }else if(username.length > 15){ // 15 초과일시
            alert("이름이 너무 깁니다.")
        }else{
            console.log(username) 
        }
    }
    loginButton.addEventListener("click",LoginBtnClick)
    ```
    
    ## Events2
    
    - **submit**
        
        ```jsx
        const loginForm = document.querySelector("#login-form");
        const loginInput = document.querySelector("#login-form input");
        
        function LoginSubmit(){
            const username = loginInput.value;
            console.log(username)
        }
        
        //submit = enter or 클릭 하면 이벤트발생
        loginForm.addEventListener("submit",LoginSubmit); 
        ```
        
        ```jsx
        
        function LoginSubmit(event){
            event.preventDefault(); // browser의 기본동작을 막아준다.
            console.log(loginInput.value) // input의 value 가져옴
        }
        ```
        
        ```jsx
        const link = document.querySelector("a"); // a태그 찾기
        
        function handleLinkClick(){
            alert('가잣!'); // 알림 창 뜨고 넘어가게됨
        }
        
        //handleLinkClick() 로 넣는다면 최초 실행하고 그 뒤에는 실행하지 않는다.
        link.addEventListener("click",handleLinkClick)
        
        ```
        
    
    ## Getting Username
    
    ```jsx
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");
    
    const HIDDEN_CLASSNAME = "hidden"; // string만 들어있다면 알기쉽게 대문자로 만들어주자
    
    function LoginSubmit(event){
        event.preventDefault(); // browser의 기본동작을 막아준다.
    //막아주는 이유 : js를 수월하게 사용하기 위해..
        loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm을 hidden으로 만듬
        const username = loginInput.value;
        // greeting.innerText = "안녕하세요 " + username +"님";
    		greeting.innerText = `안녕하세요 ${username}님`; // Text생성
        greeting.classList.remove(HIDDEN_CLASSNAME); // hidden을 지워준다.
    }
    
    loginForm.addEventListener("submit",LoginSubmit);
    ```
    
    - CSS
        
        ```css
        .hidden {
        display : none;
        }
        ```
        
    
    ## Saving Username
    
    - Local storage
    
    ```jsx
    //localStorage를 이용하여 저장
    // 검사 -> Application -> LocalStorage(key,value)
    localStorage.setItem("username",username) // 키, 밸류 형태
    ```
    
    ## Loading Username
    
    ```jsx
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");
    
    const HIDDEN_CLASSNAME = "hidden"; // string만 들어있다면 알기쉽게 대문자로 만들어주자
    const USERNAME_KEY = "username" 
    
    function LoginSubmit(event){
        event.preventDefault(); // browser의 기본동작을 막아준다.
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY,username)
        paintGreeting(username)
    }
    
    loginForm.addEventListener("submit",LoginSubmit);
    
    // function을 만들어 가독성과 코드를 줄일수 있음
    function paintGreeting(username){
        greeting.innerText = `안녕하세요 ${username}님`
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
    
    // localStorage에 있는 정보를 가져온다.
    const saveUsername = localStorage.getItem(USERNAME_KEY)
    
    // 만약 정보가 없다면
    if(saveUsername === null){
        // 창을 띄운다. = hidden제거
        loginForm.classList.remove(HIDDEN_CLASSNAME) 
    		// 이벤트 리스너 생성
        loginForm.addEventListener("submit",LoginSubmit)
    }else{
        paintGreeting(saveUsername)
    
    }
    ```
    
    ```jsx
    // removeItem 버튼 만들어보자
    const removeBtn = document.querySelector("#remover");
    
    function remover(){
        localStorage.removeItem(USERNAME_KEY)
        window.location.reload(); // 새로고침
    }
    
    removeBtn.addEventListener("click",remover)
    ```
    
    ```html
    <!DOCTYPE html>
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Momentum</title>
        <link rel="stylesheet" href="style.css">
    
    </head>
     
    <body>
        <form id="login-form" class="hidden">
            <input required maxlength="10" type="text" placeholder="이름이 뭔가요?"/>
            <button>LogIn</button>
        </form>
        <h1 id="greeting" class="hidden"></h1>
        <script src="app.js"></script>
    </body>
    
    </html>
    ```
    
    ## Intervals
    
    **setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number)**
    
    ```jsx
    const clock = document.querySelector("#clock");
    
    function sayHello(){
        console.log("hello");
    }
    // 5초마다 sayHello를 반복 실행
    setInterval(sayHello, 5000); // 5000 = 5000ms 
    ```
    
    ## Timeouts & Dates
    
    **setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number**
    
    ```jsx
    // setInterval과 같은 형식이지만 **1번**만 실행한다.
    setTimeout(sayHello,1000);
    ```
    
    **시계 만들기**
    
    ```jsx
    const clock = document.querySelector("#clock");
    
    function getClock(){
        const date = new Date(); // date라는 변수에 Date 오브젝트를 생성
    	// 텍스트에 넣기
        clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    getClock() // 시간을 바로 띄움 ( 기존 text는 보이지 않는다.)
    setInterval(getClock,1000); // 1초마다 갱신
    ```
    
    ## PadStart
    
    **java의 lpad  rpad와 같은 형식**
    
    ```jsx
    // String타입만 사용할 수 있다.
    "hello".padStart(10,"x")
    // 'xxxxxhello'  -> 10글자가 아닐경우 나머지를 왼쪽에 "x"로 채움
    
    // padEnd는 오른쪽에 나머지를 채운다.
    "hello".padEnd(10,"x")
    // 'helloxxxxx'
    ```
    
    **응용하여 시간 “0”을 ”00”으로 바꿔보자**
    
    ```jsx
    const clock = document.querySelector("#clock");
    
    function getClock(){
        const date = new Date();
    				// String으로 형변환 하면 padStart를 사용할 수 있게된다.
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    
    }
    getClock()
    setInterval(getClock,1000);
    ```
    
    ## Quotes
    
    ```jsx
    const quotes = [
        {
        quote: 'I never dreamed about success, I worked for it',
        author: 'Estee Lauder'
        },
        {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand'
        },
        {
        quote: 'Do not be afraid to give up the good to go for the great',
        author: 'John D. Rockefeller'
        },
        {
        quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
        author: 'Martin Luther King Jr.'
        },
        {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: 'Thomas Edison'
        },
        {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
        author: 'REid Hoffman'
        },
        {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
        author: 'Tim O Reilly'
        },
        {
        quote: 'Some people dream of success, while other people get up every morning and make it happen',
        author: 'Wayne Huizenga'
        },
        {
        quote: 'The only thing worse than starting something and falling.. is not starting something',
        author: 'SEth Godin'
        },
        {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
        author: 'Jim Rohn'
        },
        ];
    		
        const quote = document.querySelector("#quote span:first-child");
        const author = document.querySelector("#quote span:last-child");
    		// Math의 floor메소드와 random메소드를 사용하여 랜덤하게 조정
        const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
        quote.innerText = todaysQuote.quote;
        author.innerText = todaysQuote.author;
    ```
    
    ## Background
    
    ```jsx
    const images = [
        "1.jpeg","2.jpeg","3.jpeg"
    ];
    
    // random 설정
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    
    // html Element를 생성하는 메소드
    const bgImage = document.createElement("img");
    
    // 내용을 추가
    bgImage.src = `img/${chosenImage}`
    
    // body에 추가하여 html에 나타나게 해준다.
    document.body.appendChild(bgImage)
    // document.body.append(bgImage) = child와 같았음
    // document.body.prepend(bgImage) = 최상단에 추가
    ```