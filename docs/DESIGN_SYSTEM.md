# 디자인 시스템 규칙 및 컨텍스트

## 1. 토큰 정의 (Token Definitions)
디자인 토큰은 Figma에서 추출한 **Hex 코드**를 Tailwind CSS v4 변수에 매핑하여 구현되었습니다. 원시 색상 값(예: `gray-500`)이 기능적 역할(예: `primary`, `background`)에 매핑되는 시맨틱 네이밍 규칙을 사용합니다.

-   **위치**: `frontend/src/app/globals.css`
-   **형식**: Tailwind 테마 변수에 매핑된 CSS 변수 (`--variable-name`).
-   **테마**: `.dark` 클래스를 통한 네이티브 CSS 변수 오버라이딩으로 다크 모드를 지원합니다.

### 1.1 색상 팔레트 (Figma 추출)

다음 원시 색상 토큰들은 CSS 변수 및 Tailwind 유틸리티(예: `bg-green-500`, `text-gray-700`)로 사용할 수 있습니다.

| 토큰 이름 | Hex 값 | 사용 설명 |
| :--- | :--- | :--- |
| **White** | `#FFFFFF` | 기본 배경, 다크 모드 텍스트 |
| **Gray Scale** | | |
| `gray-50` | `#F9F9F9` | *보간됨(Interpolated)* |
| `gray-100` | `#F3F3F3` | 배경, Muted |
| `gray-200` | `#E8E8E8` | 테두리, 입력창 |
| `gray-300` | `#BBBBBB` | |
| `gray-400` | `#787878` | Muted 텍스트 |
| `gray-500` | `#1E1E1E` | 어두운 배경, 카드 (다크 모드) |
| `gray-600` | `#1A1A1A` | *보간됨(Interpolated)* |
| `gray-700` | `#150F10` | 메인 텍스트, 배경 (다크 모드) |
| **Green Scale** | | 브랜드 주요 색상 |
| `green-100` | `#FBFFCC` | 강조(Accent) |
| `green-200` | `#F6FF99` | |
| `green-300` | `#EFFF66` | |
| `green-400` | `#E9FF3F` | |
| `green-500` | `#DFFF00` | **브랜드 기본 색상 (Primary)** |
| `green-600` | `#BCDB00` | |
| **Functional** | | |
| `red-500` | `#FF4A4A` | 파괴적 액션 / 오류 |
| `blue-500` | `#3681FE` | 정보 / 링크 |

### 1.2 시맨틱 매핑 (Semantic Mapping)

시맨틱 변수는 원시 색상을 추상화하여 테마 변경 및 다크 모드 지원을 용이하게 합니다.

| 시맨틱 토큰 | 라이트 모드 값 | 다크 모드 값 | 용도 |
| :--- | :--- | :--- | :--- |
| `background` | `white` | `gray-700` | 페이지 배경 |
| `foreground` | `gray-700` | `white` | 기본 텍스트 색상 |
| `primary` | `green-500` | `green-500` | 주요 액션, 핵심 요소 |
| `primary-foreground` | `gray-700` | `gray-700` | 주요 요소 위의 텍스트 |
| `card` | `white` | `gray-500` | 카드 배경 |
| `popover` | `white` | `gray-500` | 팝업, 다이얼로그, 드롭다운 |
| `muted` | `gray-100` | `gray-500` | 보조 배경 |
| `muted-foreground` | `gray-400` | `gray-300` | 보조 텍스트 |
| `border` | `gray-200` | `gray-500` | 컴포넌트 테두리 |
| `input` | `gray-200` | `gray-500` | 입력 필드 테두리 |
| `destructive` | `red-500` | `red-500` | 파괴적 액션 |

**구현 예시 (`globals.css`):**
```css
@import "tailwindcss";
@import "tw-animate-css";

@theme inline {
  --color-background: var(--background);
  /* ... 테마에 추가된 원시 색상 ... */
  --color-green-500: var(--green-500);
  /* ... */
}

:root {
  /* 원시 토큰 */
  --white: #FFFFFF;
  --gray-700: #150F10;
  --green-500: #DFFF00;
  
  /* 시맨틱 맵 */
  --background: var(--white);
  --foreground: var(--gray-700);
  --primary: var(--green-500);
}

.dark {
  /* 다크 모드 맵 */
  --background: var(--gray-700);
  --foreground: var(--white);
}
```

## 2. 컴포넌트 라이브러리 (Component Library)
이 프로젝트는 **shadcn/ui** 아키텍처를 사용하도록 설정되었습니다.

-   **위치**: `frontend/src/components/ui/`
-   **설정**: `frontend/components.json`
-   **아키텍처**:
    -   **Headless**: 접근성이 고려된 기본 요소 (Radix UI 등).
    -   **스타일링**: `className`을 통한 Tailwind CSS 적용.
    -   **변형(Variants)**: `class-variance-authority` (cva)를 사용하여 컴포넌트 상태 및 크기 관리.
    -   **유틸리티**: `frontend/src/lib/utils.ts`에 정의된 `cn()` 헬퍼 (`clsx`와 `tailwind-merge` 결합).

**예상 컴포넌트 패턴 (예: Button):**
```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // ...
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

## 3. 프레임워크 및 라이브러리 (Frameworks & Libraries)
-   **핵심 프레임워크**: Next.js 16.1.6 (App Router)
-   **UI 라이브러리**: React 19.2.3
-   **스타일링 엔진**: Tailwind CSS v4 (네이티브 `@import "tailwindcss"`, 별도 JS 설정 파일 불필요).
-   **애니메이션**: `tw-animate-css`.
-   **PDF 처리**: `react-pdf`, `pdf-parse`.

## 4. 자산 관리 (Asset Management)
-   **저장소**: 정적 자산(이미지, SVG)은 `frontend/public/`에 위치합니다.
-   **참조**:
    -   래스터 이미지 및 정적 SVG의 자동 최적화를 위해 `next/image`를 사용합니다.
    -   경로는 루트 상대 경로를 사용합니다 (예: `/file.svg`).
-   **최적화**: Next.js 자동 이미지 최적화.

**사용 패턴:**
```tsx
import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/next.svg"
      alt="Next.js Logo"
      width={100}
      height={20}
      priority
    />
  );
}
```

## 5. 아이콘 시스템 (Icon System)
-   **라이브러리**: `lucide-react` v0.563.0.
-   **통합**: 개별 아이콘을 React 컴포넌트로 가져옵니다.
-   **스타일링**: Tailwind 클래스를 통해 제어합니다 (`w-4 h-4`, `text-muted-foreground` 등).

**사용 패턴:**
```tsx
import { ArrowRight, Mail } from "lucide-react";

export function IconExample() {
  return (
    <div className="flex gap-2">
      <Mail className="h-4 w-4" />
      <ArrowRight className="h-4 w-4 text-primary" />
    </div>
  );
}
```

## 6. 스타일링 접근 방식 (Styling Approach)
-   **방법론**: 유틸리티 우선 (Tailwind CSS).
-   **전역 스타일**: `frontend/src/app/globals.css`에 정의 (리셋 및 기본 토큰만 포함).
-   **폰트 처리**: `layout.tsx`에서 `next/font/google` 사용.
    -   **Sans**: Geist Sans (`var(--font-geist-sans)`)
    -   **Mono**: Geist Mono (`var(--font-geist-mono)`)
    -   **참고**: Figma 디자인은 **Pretendard**를 명시하고 있으나, 현재 프로젝트는 **Geist**로 설정되어 있습니다. 추후 Pretendard로 변경이 필요할 수 있습니다.
-   **반응형**: 표준 Tailwind 모바일 우선 접두사 사용 (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`).

## 7. 프로젝트 구조 (Project Structure)
이 프로젝트는 기능 기반 분리가 적용된 표준 Next.js App Router 구조를 따릅니다.

-   `frontend/src/app/`: App Router 페이지 및 레이아웃.
    -   `(auth)/`: 인증 페이지용 라우트 그룹.
    -   `(dashboard)/`: 대시보드 기능(papers, personas)용 라우트 그룹.
-   `frontend/src/components/ui/`: 재사용 가능한 범용 디자인 시스템 컴포넌트.
-   `frontend/src/lib/`: 유틸리티, 서버 액션, 라이브러리 설정.
    -   `actions/`: Server Actions.
    -   `llm/`: LLM 관련 로직.
    -   `supabase/`: 데이터베이스 클라이언트 (클라이언트/서버).

**파일 경로 규칙:**
-   **컴포넌트**: `src/components/ui/[kebab-case-name].tsx`
-   **페이지**: `src/app/[route]/page.tsx`
-   **레이아웃**: `src/app/[route]/layout.tsx`
-   **유틸리티**: `src/lib/utils.ts`
