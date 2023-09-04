const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const profile = document.getElementById('profile');
const repositories = document.getElementById('repositories');


searchInput.addEventListener('keydown', function(event) { //'Enter 버튼 '
  if (event.key === 'Enter') {
    const searchTerm = searchInput.value;  //입력된 검색어를 사용하여 검색 작업을 수행
    searchButton.click();   //얘가 있어야 Enter를 눌러야 결과가 실행됨./
  }
});

//async : api
searchButton.addEventListener('click', async () => {
    const username = searchInput.value;
    if (username) {
        // Clear previous results
        profile.innerHTML = '';
        repositories.innerHTML = '';

        try {
            // Fetch user data from GitHub API
            const userResponse = await fetch(`https://api.github.com/users/${username}`);
            const userData = await userResponse.json();

            // Fetch user's repositories data
            const repositoriesResponse = await fetch(userData.repos_url);
            const repositoriesData = await repositoriesResponse.json();

            // Update profile section
            profile.innerHTML = `
                <h2>${userData.login}</h2>
                <img src="${userData.avatar_url}" alt="${userData.login}" width="100">
                <p>Followers: ${userData.followers}</p>
                <p>Following: ${userData.following}</p>
            `;

            // Update repositories section
            repositories.innerHTML = '<h2>Repositories:</h2>';
            repositoriesData.forEach(repo => {
                repositories.innerHTML += `
                    <div>
                        <h3>${repo.name}</h3>
                        <p>${repo.description}</p>
                    </div>
                `;
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
});


//syntactic surgar: 기존의 코드 감싸서 조금 더 간편하게 쓸 수 있는
//syntactic sugar 적용되어서 가독성이 높은 코드  예) class <- prototype
//async: 오래 걸리는 일 (비동기 처리)

//await: 'async' 붙은 함수내에서만 사용.
//코드는 'fetch' 함수를 사용하여 특정 사용자에 대한 GitHub API 엔드포인트에 GET 요청을 보내는 것으로 시작됩니다. 실제 GitHub 사용자 이름을 대체하기 위해 URL의 ${username} 자리 표시자를 사용합니다.
//await 키워드는 다음 줄로 넘어가기 전에 응답이 수신될 때까지 기다리는 데 사용됩니다.
//API의 응답은 json() 메소드를 사용하여 JSON 형식으로 변환되고 결과 데이터는 userData 변수에 저장됩니다.



