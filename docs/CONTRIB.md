# 기여 가이드 (Contribution Guide)

## 개발 워크플로우 (Development Workflow)

1.  **저장소 복제 (Clone the repository):**
    ```bash
    git clone <repository-url>
    cd t-no
    ```

2.  **의존성 설치 (Install dependencies):**
    `frontend` 디렉토리로 이동하여 의존성을 설치합니다.
    ```bash
    cd frontend
    npm install
    ```

3.  **환경 설정 (Environment Setup):**
    `frontend` 디렉토리에 다음 변수들을 포함한 `.env.local` 파일을 생성합니다:

    | 변수 (Variable) | 설명 (Description) |
    | :--- | :--- |
    | `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL입니다. |
    | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase 프로젝트의 익명(anonymous) 공개 키입니다. |

4.  **개발 서버 실행 (Run the development server):**
    ```bash
    npm run dev
    ```
    브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인합니다.

## 사용 가능한 스크립트 (Available Scripts)

`frontend/package.json`에서 다음 스크립트들을 사용할 수 있습니다:

| 스크립트 (Script) | 명령어 (Command) | 설명 (Description) |
| :--- | :--- | :--- |
| `dev` | `next dev` | 핫 리로딩(hot-reloading) 기능을 포함한 Next.js 개발 서버를 시작합니다. |
| `build` | `next build` | 프로덕션 배포를 위해 애플리케이션을 컴파일합니다. |
| `start` | `next start` | 프로덕션 서버를 시작합니다 (먼저 `npm run build`가 필요합니다). |
| `lint` | `eslint` | ESLint를 실행하여 ECMAScript/JavaScript 코드의 패턴을 식별하고 보고합니다. |

## 테스트 절차 (Testing Procedures)

현재 이 프로젝트는 수동 테스트와 ESLint를 통한 정적 분석을 활용합니다.

1.  **정적 분석 (Static Analysis):**
    변경 사항을 푸시하기 전에 린터(linter)를 실행합니다.
    ```bash
    npm run lint
    ```

2.  **수동 테스트 (Manual Testing):**
    - 애플리케이션이 성공적으로 빌드되는지 확인합니다: `npm run build`
    - 개발 환경에서 핵심 흐름(인증, 논문 관리, 대시보드)을 검증합니다.

## 디렉토리 구조 (Directory Structure)

- `frontend/`: Next.js 애플리케이션 소스 코드를 포함합니다.
- `docs/`: 프로젝트 문서를 포함합니다.