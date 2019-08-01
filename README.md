# Dev_Helper_Project



> 시작에 앞서, `삼성 청년 소프트웨어 아카데미` 에서 배운 내용을 토대로 작성하는 것을 알린다.
>
> 
>
> `Dev_Helper_Project` 는 사용자의 개발을 돕는 웹 페이지로서,
>
> `Node.js`, `Vue`, `MongoDB` 를 기반으로 개발할 예정이다.



-------



### Node.js 설치

1. Node.js 의 공식 홈페이지 (<https://nodejs.org>) 에 접속하여 사양에 맞는 node를 설치한다.
   — 최신 버전보다는 안정화된 버전을 사용하는 것이 좀 더 안정적이므로, `10.16.1 LTS`를 설치했다.

2. 설치를 완료한 후, 터미널에서 

   ```
   node -v
   ```

   를 입력한 후, 

   ```
   v10.16.1 (사용자가 받은 버젼)
   ```

   이 나온다면, 정상적으로 설치되었다.



### Node.js 프로젝트 구축

1. node를 정상적으로 설치한 후, 구축하기를 원하는 디렉토리로 이동한다.

2. 다음과 같이 입력하여, node.js의 패키지 관리를 위한 `package.json` 을 생성한다.

   ```
   npm init
   ```

   `package.json` 생성에 필요한 몇 가지 사항을 적고 나면 성공적으로 생성된다.
   해당 json 파일에 `npm install` 하는 `dependencies` 들이 들어가게 되고, 
   환경이 변하더라도 이상없이 `npm install` 을 사용하여 의존성들을 다운받을 수 있게 된다.

3. `dependencies` 생성을 위하여 `package.json` 내부에 다음을 추가한다.

   ```json
   "dependencies" : {
       "connect" : "*"
   }
   ```

4. 다음과 같이 입력하여, `node_modules` 파일을 생성한다.

   ```
   npm install
   ```

   `node_modules` 에는 `dependencies` 에 선언된 모듈들이 다운받아져 들어간다.

   

   

----



### Vue.js 설치

1. Node.js가 정상적으로 설치되었다면 `npm` 을 사용할 수 있고, 위의 절차에 따라 `npm init` 과 `node_modules` , `package.json` 이 만들어 졌다면 Vue 를 내려받을 수 있다.

2. 다음과 같이 입력하여, vue를 설치한다.

   ```
   npm install vue
   ```

3. vue.js를 사용하기 위해서는 cli가 필요하므로, cli역시 설치를 진행한다.

   ```
   npm install --global vue-cli
   ```

   > 만약 설치과정에서, permission-deny 가 뜨는 경우, 다음과 같이 `sudo` 를 사용하자
   >
   > ```
   > sudo npm install --global vue-cli
   > ```



### Vue 프로젝트 구축

> 사실, 하면서 알게 된건데... 
> 컴퓨터에 vue, vue-cli가 설치되어 있다면 굳이 위의 과정을 거치지 않고 바로 프로젝트를 구축할 수 있다.

```
vue init webpack [my-project]
```

위의 과정을 거치면, 원하는 프로젝트 명으로 vue 프로젝트가 생성된다.















