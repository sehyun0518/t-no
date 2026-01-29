# 구현 계획: 논문 관리 및 페르소나 기반 번역 서비스

## 개요 (Overview)
본 프로젝트는 사용자가 학술 논문을 저장, 관리하고 '페르소나'를 지정하여 맞춤형 번역 서비스를 받을 수 있는 웹 애플리케이션을 구축하는 것을 목표로 합니다. 사용자는 PDF 또는 텍스트 형식의 논문을 업로드하고, 시스템은 자동으로 메타데이터를 추출합니다. 사용자는 정의된 또는 자신만의 페르소나(예: '해당 분야 전문가', '초심자')를 선택하여 논문의 일부 또는 전체를 번역하고, 원문과 번역문을 나란히 비교하며 볼 수 있습니다.

## 요구 사항 (Requirements)
- **사용자 인증:**
    - 사용자는 이메일과 비밀번호 또는 소셜 로그인을 통해 가입하고 로그인할 수 있습니다.
    - 인증된 사용자만 자신의 논문과 페르소나를 관리할 수 있습니다.
- **논문 관리:**
    - 사용자는 PDF 또는 텍스트 파일을 업로드하여 논문을 시스템에 추가할 수 있습니다.
    - 시스템은 업로드된 논문에서 제목, 저자, 초록 등 주요 메타데이터를 자동으로 추출해야 합니다.
    - 사용자는 논문을 폴더로 구성하거나 태그를 지정하여 관리할 수 있습니다.
    - 사용자는 웹 기반 뷰어를 통해 업로드한 PDF를 볼 수 있어야 합니다.
- **페르소나 기반 번역:**
    - 시스템은 '대학원생', 'ELI5(5살 아이도 이해하게 설명)', '한국인 연구자' 등 기본 페르소나를 제공합니다.
    - 사용자는 자신만의 커스텀 페르소나를 생성하고 관리할 수 있습니다. (예: 특정 어조, 번역 스타일 정의)
    - 사용자는 논문의 특정 텍스트를 선택하거나 전체 텍스트를 지정하여 번역을 요청할 수 있습니다.
    - 번역 요청 시, 원하는 페르소나를 선택하여 해당 페르소나의 관점과 스타일로 번역된 결과를 받아야 합니다.
- **UI/UX:**
    - 원문과 번역문을 나란히 보여주는 Side-by-side 뷰를 제공해야 합니다.
    - 전체적인 디자인은 학술적이고 깔끔한 느낌을 주어야 합니다 (Shadcn/UI 활용).

## 데이터베이스 스키마 (Database Schema)

```sql
-- 사용자 정보 (Supabase Auth 연동)
-- users 테이블은 Supabase Auth에 의해 자동으로 관리됩니다.

-- 논문 정보
CREATE TABLE thesis (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT,
    authors TEXT[],
    abstract TEXT,
    publication_year INT,
    keywords TEXT[],
    file_path TEXT NOT NULL, -- Supabase Storage 내 파일 경로
    file_status VARCHAR(20) DEFAULT 'UPLOADING', -- UPLOADING, PROCESSING, READY, ERROR
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ
);

-- 페르소나 정보
CREATE TABLE personas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE, -- NULL이면 시스템 기본 페르소나
    name VARCHAR(100) NOT NULL,
    description TEXT,
    prompt TEXT NOT NULL, -- LLM에 전달될 실제 프롬프트
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 폴더 정보
CREATE TABLE folders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    name VARCHAR(100) NOT NULL,
    parent_folder_id UUID REFERENCES folders(id) ON DELETE CASCADE, -- 하위 폴더 지원
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 논문-폴더 관계 (논문을 폴더에 할당)
CREATE TABLE paper_folders (
    paper_id UUID REFERENCES papers(id) ON DELETE CASCADE,
    folder_id UUID REFERENCES folders(id) ON DELETE CASCADE,
    PRIMARY KEY (paper_id, folder_id)
);


-- 태그 정보
CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- 논문-태그 관계 (M:N)
CREATE TABLE paper_tags (
    paper_id UUID REFERENCES papers(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (paper_id, tag_id)
);
```

## 아키텍처 변경 (Architecture)
본 프로젝트는 신규 개발이므로, Next.js App Router 기반의 모던 웹 아키텍처를 채택합니다.

- **Frontend:** `app/` 디렉토리 내에 라우트 기반으로 컴포넌트를 구성. Shadcn/UI 컴포넌트를 `components/ui`에 배치하고, 비즈니스 로직이 포함된 컴포넌트는 `components/`에 위치.
    - `app/(auth)/login/page.tsx`: 로그인 페이지
    - `app/(dashboard)/layout.tsx`: 인증 후 공통 대시보드 레이아웃 (사이드바 포함)
    - `app/(dashboard)/papers/page.tsx`: 논문 목록 페이지
    - `app/(dashboard)/papers/[id]/page.tsx`: 논문 상세 뷰어 및 번역 페이지
- **Backend (Server Actions):** `lib/actions/` 디렉토리에 서버 로직을 중앙화.
    - `lib/actions/auth.actions.ts`: 회원가입, 로그인 등 인증 관련 액션
    - `lib/actions/paper.actions.ts`: 논문 업로드, 메타데이터 추출, 정리 관련 액션
    - `lib/actions/translation.actions.ts`: LLM API를 호출하여 번역을 수행하는 액션
- **Database/Storage:** `lib/supabase/client.ts` (클라이언트 컴포넌트용)와 `lib/supabase/server.ts` (서버 컴포넌트/액션용)로 Supabase 클라이언트를 분리하여 관리.
- **LLM Service:** `lib/llm/` 디렉토리에서 OpenAI 또는 Anthropic API 클라이언트 및 관련 유틸리티를 관리.

## 구현 단계 (Implementation Steps)

### 1단계: 프로젝트 초기 설정 및 인증 (Phase 1: Project Setup & Authentication)
- **복잡도**: 낮음
1.  **Next.js 프로젝트 생성**
2.  **의존성 설치**
3.  **Supabase 프로젝트 설정**
4.  **인증 UI 및 로직 구현**

### 2단계: 논문 업로드 및 뷰어 기능 (Phase 2: Paper Upload & Viewer)
- **복잡도**: 중간
1.  **대시보드 레이아웃 구현**
2.  **논문 업로드 기능 구현**
3.  **PDF 뷰어 구현**

### 3단계: 메타데이터 추출 및 정리 (Phase 3: Metadata Extraction & Organization)
- **복잡도**: 높음
1.  **PDF 텍스트 추출 백엔드 로직**
2.  **LLM 기반 메타데이터 추출**
3.  **폴더 및 태그 기능 구현**

### 4단계: 페르소나 및 번역 엔진 구현 (Phase 4: Persona & Translation Engine)
- **복잡도**: 중간
1.  **페르소나 관리 UI/CRUD**
2.  **텍스트 선택 및 번역 요청 UI**
3.  **번역 서버 액션 구현**

### 5단계: 최종 통합 및 UI 개선 (Phase 5: Final Integration & UI Polish)
- **복잡도**: 중간
1.  **Side-by-Side 뷰 구현**
2.  **스트리밍 응답 처리**
3.  **전체 테스트 및 최적화**

## 테스트 전략 (Testing Strategy)
- **단위 테스트 (Unit Tests):** `Jest`, `React Testing Library` 사용.
- **통합 테스트 (Integration Tests):** 논문 업로드/번역 흐름 테스트.
- **E2E 테스트 (End-to-End Tests):** `Playwright` 사용.

## 위험 및 완화 (Risks & Mitigations)
- **위험**: LLM API 비용 증가 -> **완화**: Rate Limiting, 캐싱.
- **위험**: PDF 파싱 실패 -> **완화**: 오류 처리 및 수동 입력 제공.
- **위험**: 부정확한 AI 결과 -> **완화**: 사용자 수정 가능 UI 및 안내 문구.

## 성공 기준 (Success Criteria)
- [ ] 사용자 인증 성공.
- [ ] PDF 논문 업로드 및 Storage 저장 완료.
- [ ] 메타데이터 자동 추출 및 표시.
- [ ] 웹 PDF 뷰어 정상 작동.
- [ ] 폴더/태그 관리 가능.
- [ ] 커스텀 페르소나 생성 및 적용.
- [ ] 페르소나 기반 번역 결과 Side-by-side 표시.
