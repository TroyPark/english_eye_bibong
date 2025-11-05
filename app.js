// MBTI 질문 데이터 (E/I, S/N, T/F, J/P 각 3문항씩) - 초등학생용
const questions = [
    // E vs I (외향 vs 내향)
    {
        question: "영어 시험 보기 전에 나는?",
        options: [
            { text: "친구들이랑 같이 공부하면서 재미있게! 📢", type: "E" },
            { text: "집에서 혼자 조용히 집중하는 게 좋아! 🏠", type: "I" }
        ]
    },
    {
        question: "모르는 영어 단어가 나왔을 때 나는?",
        options: [
            { text: "친구들이나 선생님한테 바로 물어보기! 💬", type: "E" },
            { text: "혼자 사전 찾아보거나 생각해보기 🔍", type: "I" }
        ]
    },
    {
        question: "영어 공부하다가 쉬는 시간이 생기면?",
        options: [
            { text: "친구랑 놀면서 수다 떨기! 📱", type: "E" },
            { text: "혼자서 책 읽거나 쉬기 🎧", type: "I" }
        ]
    },
    
    // S vs N (감각 vs 직관)
    {
        question: "새로운 영어 단어나 문법을 배울 때 나는?",
        options: [
            { text: "예문을 읽고 따라해보면서 배우기 📝", type: "S" },
            { text: "큰 그림을 먼저 생각하고 이해하기 🌐", type: "N" }
        ]
    },
    {
        question: "영어 공책 정리할 때 나는?",
        options: [
            { text: "교과서 순서대로 깔끔하게 정리하기 📚", type: "S" },
            { text: "내 마음대로 그림 그리면서 정리하기 ✨", type: "N" }
        ]
    },
    {
        question: "영어 공부 계획을 세울 때 나는?",
        options: [
            { text: "오늘 할 페이지를 정확히 정해놓고 시작 ✅", type: "S" },
            { text: "대충 큰 틀만 정하고 그때그때 조절하기 🎯", type: "N" }
        ]
    },
    
    // T vs F (사고 vs 감정)
    {
        question: "영어 시험 점수가 안 좋게 나왔을 때 나는?",
        options: [
            { text: "어디서 틀렸는지 확인하고 다시 공부하기 📊", type: "T" },
            { text: "일단 속상해서 멍때리기... 😢", type: "F" }
        ]
    },
    {
        question: "영어 공부를 열심히 하게 되는 이유는?",
        options: [
            { text: "좋은 점수 받고 싶어서! 🎓", type: "T" },
            { text: "선생님이나 엄마가 칭찬해줘서! 💕", type: "F" }
        ]
    },
    {
        question: "친구들이랑 영어 공부를 같이 할 때 나는?",
        options: [
            { text: "각자 역할 나눠서 빠르게 하기 🔧", type: "T" },
            { text: "다 같이 재미있게 하면서 분위기 좋게 하기 🤝", type: "F" }
        ]
    },
    
    // J vs P (판단 vs 인식)
    {
        question: "영어 시험 보기 며칠 전부터 나는?",
        options: [
            { text: "벌써 공부 계획 세우고 시작하기! 📅", type: "J" },
            { text: "아직 시간 많은데? 나중에 몰아서 하기~ ⏰", type: "P" }
        ]
    },
    {
        question: "영어 공부 시간을 정할 때 나는?",
        options: [
            { text: "매일 같은 시간에 공부하기 ⏱️", type: "J" },
            { text: "그날 기분에 따라 달라지기 🎪", type: "P" }
        ]
    },
    {
        question: "영어 공부하다가 궁금한 게 생기면?",
        options: [
            { text: "일단 메모해두고 나중에 물어보기 📋", type: "J" },
            { text: "바로 찾아보고 새로운 걸 더 알아보기 🐰", type: "P" }
        ]
    }
];

// 공부 스타일 결과 데이터
const results = {
    INTJ: {
        emoji: "🎯",
        title: "전략적 플래너 신",
        description: "너는 공부도 전쟁이다! 완벽한 계획과 로드맵으로 무장한 공부의 달인. 혼자서 목표를 세우고 달성하는 걸 즐기며, 효율성을 극대화하는 데 집착함. 근데 가끔 너무 완벽주의라 스트레스 받기도...",
        methods: [
            "장기 목표부터 역산해서 공부 계획 세우기",
            "개념을 깊게 파고들어 완벽히 이해하기",
            "자기만의 체계적인 노트 정리 시스템 만들기",
            "혼자 집중할 수 있는 조용한 공간 확보하기",
            "가끔은 계획에서 벗어나도 괜찮다는 마인드셋 가지기",
            "<strong>책임형 맞춤 관리</strong>로 맞춤형 목표 설정 및 전략 코칭 받기"
        ]
    },
    INTP: {
        emoji: "🤔",
        title: "영혼없는 천재",
        description: "이해는 1초 만에 되는데 정작 손은 안 움직이는 타입. 개념의 원리를 파고드는 건 좋은데, 문제집은 먼지만 쌓여감... 호기심은 많지만 실천력은 글쎄? 근데 한 번 꽂히면 밤샘 각오!",
        methods: [
            "이론과 개념 위주로 깊이 있게 파고들기",
            "마인드맵으로 지식을 연결하며 정리하기",
            "궁금증 생기면 바로바로 해결하기 (토끼굴 환영)",
            "실전 문제풀이 시간 따로 정해서 강제로 연습하기",
            "친구와 토론하며 이해도 점검하기",
            "<strong>책임형 맞춤 관리</strong>로 실천력 향상 및 문제 풀이 습관 만들기"
        ]
    },
    ENTJ: {
        emoji: "👑",
        title: "공부 마피아 보스",
        description: "스터디 그룹의 리더는 언제나 너! 목표 지향적이고 효율적인 공부법으로 무장. 다른 사람들도 끌고 가는 카리스마 甲. 근데 가끔 너무 빡세서 친구들이 도망갈 수도...",
        methods: [
            "목표를 명확히 하고 데드라인 설정하기",
            "스터디 그룹 만들어서 리드하기",
            "실전 모의고사로 실력 점검 자주 하기",
            "타임어택으로 문제 풀이 속도 높이기",
            "가끔은 여유 부리며 쉬는 시간도 필요함",
            "<strong>책임형 맞춤 관리</strong>로 효율적인 시간 관리 및 전략 최적화하기"
        ]
    },
    ENTP: {
        emoji: "🎪",
        title: "산만한 아이디어 뱅크",
        description: "토론하고 논쟁하는 거 좋아하는 공부 예능캐. 창의적이고 다양한 방법으로 접근하지만... 집중력은 금붕어 수준. 10분마다 다른 생각하고 계획은 맨날 수정됨 ㅋㅋ",
        methods: [
            "여러 교재와 강의를 비교하며 공부하기",
            "토론식 학습이나 디베이트 수업 참여하기",
            "타이머로 집중 시간 강제하기 (뽀모도로 기법)",
            "다양한 각도에서 문제 접근해보기",
            "한 가지 교재라도 끝까지 보는 습관 들이기",
            "<strong>책임형 맞춤 관리</strong>로 집중력 관리 및 체계적인 학습 진행하기"
        ]
    },
    INFJ: {
        emoji: "🌙",
        title: "몰입형 은둔 고수",
        description: "혼자 깊게 파고드는 공부 스타일. 한 번 집중하면 시간 가는 줄 모르고, 이해한 걸 자기만의 방식으로 정리하는 걸 좋아함. 근데 너무 완벽주의라 스트레스 받기 쉬움...",
        methods: [
            "개념을 깊이 이해하고 내면화하기",
            "정리노트를 만들어 반복해서 복습하기",
            "이미지나 스토리로 연상하며 암기하기",
            "혼자 조용한 곳에서 장시간 집중하기",
            "완벽주의 내려놓고 70%만 해도 ok!",
            "<strong>책임형 맞춤 관리</strong>로 스트레스 관리 및 학습 페이스 조절하기"
        ]
    },
    INFP: {
        emoji: "🌸",
        title: "감성 충만 공부러",
        description: "감정이입하면서 공부하는 특이한 타입. 역사는 드라마처럼, 과학은 판타지처럼 느껴짐. 좋아하는 과목은 끝도 없이 파지만 싫은 과목은... 존재 자체를 부정함.",
        methods: [
            "스토리텔링 방식으로 개념 이해하기",
            "좋아하는 색깔 펜으로 예쁘게 노트 꾸미기",
            "감정과 연결지어 암기하기",
            "좋아하는 음악 들으면서 공부하기",
            "싫은 과목도 조금씩 친해지기 (작은 목표부터)",
            "<strong>책임형 맞춤 관리</strong>로 동기부여 및 흥미 유발 맞춤 학습하기"
        ]
    },
    ENFJ: {
        emoji: "✨",
        title: "스터디 엄마",
        description: "친구들 공부 챙겨주다 정작 본인 공부 못하는 타입 ㅋㅋ 가르쳐주면서 본인도 복습되고, 다같이 성장하는 걸 좋아함. 분위기 메이커이자 동기부여 담당!",
        methods: [
            "스터디 그룹 만들어서 함께 공부하기",
            "친구에게 가르쳐주며 복습하기",
            "온라인 강의 보면서 필기 공유하기",
            "목표를 친구들과 공유하고 응원하기",
            "본인 페이스 지키기 (남 챙기다 본인 망하지 말기)",
            "<strong>책임형 맞춤 관리</strong>로 자신만의 학습 시간 확보 및 집중하기"
        ]
    },
    ENFP: {
        emoji: "🎨",
        title: "공부계의 자유영혼",
        description: "재미있으면 밤새도 공부하는데 재미없으면 1분도 못 앉아있음 ㅋㅋ 창의적이고 다양한 시도를 좋아하지만 계획은 그림의 떡. 분위기 전환 마스터!",
        methods: [
            "주제를 자주 바꿔가며 공부하기 (지루함 방지)",
            "게임처럼 퀴즈 만들어서 풀기",
            "장소를 옮겨가며 공부하기 (카페, 도서관 등)",
            "친구와 함께 재미있게 공부하기",
            "한 가지 과목이라도 끝까지 완주해보기",
            "<strong>책임형 맞춤 관리</strong>로 재미있는 학습 방법 찾고 끈기 키우기"
        ]
    },
    ISTJ: {
        emoji: "📚",
        title: "계획 실천의 신",
        description: "교과서 1페이지부터 끝까지 성실하게 보는 모범생 타입. 루틴과 계획을 철저히 지키며, 복습을 생활화함. 근데 가끔 너무 고지식해서 융통성이 부족할 수도...",
        methods: [
            "매일 똑같은 시간에 공부 루틴 만들기",
            "교재를 처음부터 끝까지 순서대로 보기",
            "복습 스케줄 짜서 철저히 지키기",
            "체크리스트 만들어 하나씩 완료하기",
            "가끔은 새로운 방법도 시도해보기",
            "<strong>책임형 맞춤 관리</strong>로 체계적인 커리큘럼 구성 및 진도 관리하기"
        ]
    },
    ISFJ: {
        emoji: "📖",
        title: "꼼꼼 정리왕",
        description: "노트 정리가 예술 작품 수준. 꼼꼼하고 성실하게 한 문제 한 문제 다 풀어봄. 선생님 말씀 다 받아적고, 친구들 노트 빌려주기 1순위. 근데 너무 완벽하게 하려다 시간 부족...",
        methods: [
            "개념 노트와 문제풀이 노트 분리하기",
            "색깔별로 형광펜 활용해 정리하기",
            "오답노트 꼼꼼히 작성하기",
            "선생님 말씀 다 받아적기",
            "완벽보다는 완료가 목표라는 마인드 갖기",
            "<strong>책임형 맞춤 관리</strong>로 효율적인 정리법 및 시간 배분 연습하기"
        ]
    },
    ESTJ: {
        emoji: "⏰",
        title: "타임 어택 마스터",
        description: "시간 관리의 달인. 분 단위로 스케줄 짜고 실천하는 철두철미한 스타일. 효율과 결과를 중시하며, 계획대로 진행 안 되면 스트레스 폭발!",
        methods: [
            "시간표 만들어 철저히 지키기",
            "타이머 놓고 문제 풀이 연습하기",
            "체크리스트로 진행 상황 확인하기",
            "목표를 구체적이고 측정 가능하게 세우기",
            "가끔은 여유를 가지고 쉬는 것도 필요함",
            "<strong>책임형 맞춤 관리</strong>로 정확한 목표 설정 및 실전 훈련하기"
        ]
    },
    ESFJ: {
        emoji: "🤗",
        title: "함께가치 공부러",
        description: "혼자 하는 공부는 재미없어! 친구들이랑 같이 공부하면 동기부여 최고. 스터디 카페 단골이며, 다같이 목표 달성하는 걸 좋아함. 분위기 좋아야 능률 up!",
        methods: [
            "스터디 그룹 참여해서 함께 공부하기",
            "친구와 진도 맞춰가며 경쟁하기",
            "온라인 커뮤니티에서 정보 공유하기",
            "선생님께 자주 질문하고 피드백 받기",
            "혼자서도 공부할 수 있는 습관 들이기",
            "<strong>책임형 맞춤 관리</strong>로 나만의 학습 환경 만들고 실력 키우기"
        ]
    },
    ISTP: {
        emoji: "🔧",
        title: "문제풀이 장인",
        description: "이론은 별로고 문제만 주구장창 풀고 싶은 타입. 실전 감각이 뛰어나고, 오답노트 보면서 패턴 파악하는 걸 즐김. 근데 개념 이해는 대충 넘어가서 응용에 약함...",
        methods: [
            "문제집 위주로 실전 연습하기",
            "오답노트 만들어 반복 학습하기",
            "문제 유형별로 풀이 패턴 정리하기",
            "손으로 직접 풀면서 감 익히기",
            "개념도 한 번씩은 짚고 넘어가기",
            "<strong>책임형 맞춤 관리</strong>로 개념 이해 강화 및 응용력 키우기"
        ]
    },
    ISFP: {
        emoji: "🎵",
        title: "감각적 암기러",
        description: "오감을 활용해서 공부하는 타입. 노래로 외우고, 그림으로 이해하고, 색깔로 구분함. 시각 자료 좋아하고, 암기는 이미지로! 근데 논리적 사고는 좀...",
        methods: [
            "시각 자료(그림, 그래프) 활용하기",
            "컬러풀한 노트 정리로 기억력 높이기",
            "노래나 리듬으로 암기하기",
            "움직이면서 공부하기 (산책하며 암송)",
            "논리적 구조도 함께 이해하기",
            "<strong>책임형 맞춤 관리</strong>로 창의적 학습법 개발 및 논리력 보완하기"
        ]
    },
    ESTP: {
        emoji: "⚡",
        title: "스피드 러너",
        description: "일단 부딪혀보는 스타일. 빠르게 훑어보고 문제부터 풀면서 배움. 지루한 건 못 참고, 액션이 필요함! 공부도 게임처럼 재미있어야 함. 벼락치기의 신!",
        methods: [
            "짧은 시간에 집중해서 빠르게 훑기",
            "문제 풀면서 개념 익히기",
            "경쟁 상황 만들어서 동기부여하기",
            "움직이면서 공부하기 (서서 하기 등)",
            "계획적인 복습으로 장기 기억 만들기",
            "<strong>책임형 맞춤 관리</strong>로 체계적인 복습 습관 및 기초 다지기"
        ]
    },
    ESFP: {
        emoji: "🎉",
        title: "공부도 놀이처럼",
        description: "공부를 재미로 승화시키는 타입 ㅋㅋ 친구들이랑 게임하듯 퀴즈 내고, 보상 시스템 만들어서 동기부여. 분위기 메이커라 혼자 공부는 고문. 3분 집중이 한계...",
        methods: [
            "짧은 시간 고강도 집중 (15분 단위)",
            "게임이나 퀴즈 형식으로 공부하기",
            "친구와 함께 즐겁게 공부하기",
            "보상 시스템 만들기 (공부 후 간식 등)",
            "조금씩이라도 매일 하는 습관 들이기",
            "<strong>책임형 맞춤 관리</strong>로 흥미 유지 및 꾸준한 학습 습관 만들기"
        ]
    }
};

let currentQuestion = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

function startQuiz() {
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `${currentQuestion + 1} / ${questions.length}`;
    document.getElementById('question').textContent = question.question;
    
    const optionsHtml = question.options.map((option, index) => 
        `<button class="option-btn" onclick="selectOption('${option.type}')">${option.text}</button>`
    ).join('');
    
    document.getElementById('options').innerHTML = optionsHtml;
}

function selectOption(type) {
    scores[type]++;
    currentQuestion++;
    
    // 모바일에서 버튼 포커스 제거
    if (document.activeElement) {
        document.activeElement.blur();
    }
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const styleType = 
        (scores.E > scores.I ? 'E' : 'I') +
        (scores.S > scores.N ? 'S' : 'N') +
        (scores.T > scores.F ? 'T' : 'F') +
        (scores.J > scores.P ? 'J' : 'P');
    
    const result = results[styleType];
    
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
    
    document.getElementById('resultEmoji').textContent = result.emoji;
    document.getElementById('resultType').textContent = styleType;
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultDescription').textContent = result.description;
    
    const methodsHtml = result.methods.map(method => `<li>${method}</li>`).join('');
    document.getElementById('studyMethods').innerHTML = methodsHtml;
}

// 공유하기 함수 (Web Share API 사용)
function shareResult() {
    const type = document.getElementById('resultType').textContent;
    const title = document.getElementById('resultTitle').textContent;
    const description = document.getElementById('resultDescription').textContent;
    const url = window.location.href.split('?')[0];
    
    // 공유 텍스트 작성 (URL 포함)
    const shareText = `🧠 공부 스타일 테스트 결과\n\n` +
        `나의 유형: ${type}\n` +
        `"${title}"\n\n` +
        `${description}\n\n` +
        `너의 공부 스타일도 확인해봐! 👇\n` +
        url;
    
    const shareData = {
        title: '공부 스타일 테스트 결과',
        text: shareText
    };
    
    // Web Share API 지원 여부 확인
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => {
                console.log('공유 성공!');
                // 네이버 애널리틱스 이벤트 전송
                if (window.wcs && typeof wcs.event === 'function') {
                    wcs.event("공유하기", "공유횟수");
                }
            })
            .catch((error) => {
                if (error.name !== 'AbortError') {
                    console.log('공유 실패:', error);
                    fallbackShare(shareText);
                }
            });
    } else {
        // Web Share API를 지원하지 않는 경우 텍스트 복사
        fallbackShare(shareText);
    }
}

// Web Share API를 지원하지 않는 경우 텍스트 복사
function fallbackShare(shareText) {
    navigator.clipboard.writeText(shareText).then(() => {
        alert('✅ 결과가 복사되었습니다!\n카카오톡이나 메시지에 붙여넣기해서 친구들에게 공유해보세요 😊');
        // 네이버 애널리틱스 이벤트 전송
        if (window.wcs && typeof wcs.event === 'function') {
            wcs.event("공유하기", "공유횟수");
        }
    }).catch(() => {
        // 클립보드 API도 지원하지 않는 경우
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert('✅ 결과가 복사되었습니다!\n카카오톡이나 메시지에 붙여넣기해서 친구들에게 공유해보세요 😊');
            // 네이버 애널리틱스 이벤트 전송
            if (window.wcs && typeof wcs.event === 'function') {
                wcs.event("공유하기", "공유횟수");
            }
        } catch (err) {
            alert('공유 기능을 사용할 수 없습니다.');
        }
        document.body.removeChild(textArea);
    });
}

function restartQuiz() {
    currentQuestion = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('startSection').style.display = 'block';
}

// 홈페이지 버튼 클릭 추적
function trackHomepageClick() {
    // 네이버 애널리틱스 이벤트 전송
    if (window.wcs && typeof wcs.event === 'function') {
        wcs.event("띠배너클릭", "블로그이동");
    }
}

