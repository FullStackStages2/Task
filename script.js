 const searchButton = document . getElementById ( 'searchButton' ) ; 
 const searchInput = document . getElementById ( 'searchInput' ) ; 
 const profile = document . getElementById ( 'profile' ) ; 
 const repositories = document . getElementById ( 'repositories' ) ; 
 
 
 searchInput. addEventListener ( 'keydown' , function ( event ) { //'Enter keydown' 
 if ( event . key === 'Enter ' ) { 
 const searchTerm = searchInput . value ; //Look at the snow-covered woods 
 searchButton . click ( ) ; //Enter the woodpipes./ 
 } } 
 } ) ; 
 
 / / async : bee 
 searchButton . addEventListener ( 'click' , async ( ) => { 
 const username = searchInput . value ; 
 if ( username ) { 
 // Clear previous results 
 profile. innerHTML = '' ; 
 repositories. innerHTML = '' ; 
 
 try { 
 // Fetch user data from GitHub API 
 const userResponse = await fetch ( ` https://api.github.com/users/ ${ username } ` ) ; 
 const userData = await userResponse . json ( ) ; 
 
 // Fetch user's repositories data 
 const repositoriesResponse = await fetch ( userData . repos_url ) ; 
 const repositoriesData = await repositoriesResponse . json ( ) ; 
 
 // Update profile section 
 profile. innerHTML = ` 
 < h2 > $ { userData . login }  
 ${ userData . avatar_url } " alt=" ${ userData . login } " width="100"> 
 
Followers: ${ userData. followers } 

 
 
Following : ${ userData . following } 

 
 ` ; 
 
 // Update repositories section 
 repositories. innerHTML = '
Repositories:
' ; 
 repositoriesData. forEach ( repo => { 
 repositories. innerHTML += ` 
 
 
 
 ${ repo. name } 
 
 
 ${ repo. description } 

 
 
 
 ` ; 
 } ) ; 
 
 } catch ( error ) { 
 console. error ( 'Error fetching data:' , error ) ; 
 } } 
 } } 
 } ) ; 
 
 
 //syntactic surgar: 기존의 코드 감싸서 조금 더 간편하게 쓸 수 있는 
 //syntactic sugar active sugar construct) class <- prototype 
 //async: asynchronous (sync) 
 


 //await 키워드는 다워 줄로 넘어가기 전에 응답이 수신될. 

 
 
 
