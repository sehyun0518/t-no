# 런북 (Runbook)

## 배포 절차 (Deployment Procedures)

이 애플리케이션은 Vercel 또는 Node.js/Docker를 지원하는 모든 플랫폼에 배포할 수 있는 Next.js 앱입니다.

### Vercel 배포 (권장)

1.  GitHub 저장소를 Vercel에 연결합니다.
2.  Vercel 프로젝트 설정에서 **환경 변수 (Environment Variables)**를 구성합니다:
    - `NEXT_PUBLIC_SUPABASE_URL`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3.  `frontend` 디렉토리를 프로젝트의 루트로 배포합니다 (또는 Vercel 설정에서 Root Directory를 `frontend`로 구성합니다).
4.  git push를 통해 배포를 트리거합니다.

### 수동 빌드 및 시작 (Manual Build & Start)

1.  **빌드 (Build):**
    ```bash
    cd frontend
    npm run build
    ```
2.  **시작 (Start):**
    ```bash
    npm run start
    ```

## 모니터링 및 알림 (Monitoring & Alerting)

- **Vercel Analytics/Speed Insights:** Vercel에 배포된 경우 실시간 성능 및 오류를 모니터링합니다.
- **Supabase Dashboard:** 데이터베이스 상태, 인증 로그 및 API 요청을 모니터링합니다.
- **Sentry (선택 사항):** 프론트엔드 런타임 오류 추적을 위한 통합을 권장합니다.

## 일반적인 문제 및 해결 방법 (Common Issues & Fixes)

### 빌드 실패 (Build Failures)

- **문제:** `npm install` 실패.
  - **해결:** Node.js 버전(LTS 권장) 및 `package-lock.json` 일관성을 확인합니다. `node_modules`를 삭제하고 `npm install`을 다시 실행합니다.
- **문제:** 빌드 중 타입 오류 발생.
  - **해결:** 로컬에서 `tsc --noEmit`을 실행하여 TypeScript 오류를 식별합니다. `frontend/src` 내의 모든 타입이 올바르게 정의되어 있는지 확인합니다.

### 런타임 오류 (Runtime Errors)

- **문제:** Supabase 연결 실패.
  - **해결:** 환경 변수에 `NEXT_PUBLIC_SUPABASE_URL` 및 `NEXT_PUBLIC_SUPABASE_ANON_KEY`가 올바르게 설정되어 있는지 확인합니다. Supabase 서비스 상태를 확인합니다.
- **문제:** API 라우트에서 404 오류 발생.
  - **해결:** `src/app/api` 내의 파일 경로가 올바르고 Next.js App Router 규칙을 따르는지 확인합니다.

## 롤백 절차 (Rollback Procedures)

### Vercel

1.  Vercel 프로젝트 대시보드로 이동합니다.
2.  "Deployments" 탭으로 이동합니다.
3.  이전의 성공적인 배포를 선택합니다.
4.  "Redeploy" 또는 "Promote to Production" (즉시 롤백)을 클릭합니다.

### 수동 (Manual)

1.  git 커밋을 되돌립니다:
    ```bash
    git revert <commit-hash>
    git push origin main
    ```
2.  새로운 빌드/배포 파이프라인을 트리거합니다.