# NARA-CRM

"CRM 분석화면" 블록 — 와인 CRM 내부 분석 대시보드. 고객 세그먼트·등급 변화·재방문·판매
현황·캠페인 성과를 한곳에서 본다. 기획서(`doc/260601_웹포스_CRM 대시보드.pptx`, 9슬라이드)
기반으로 화면을 구현하고 있다.

- Nblocks 허브 블록: **s7 (서비스 레이어)**
- 접근 권한: 임원
- **현재 단계: 프론트엔드 구현 중 — 개발서버 미배포, 데이터는 샘플 하드코딩**

## 화면

| 경로 | 내용 |
|---|---|
| `/dashboard` | CRM 종합현황 — KPI 6종, 등급 도넛, 매장별/등급별 매출, 회원 추이 |
| `/segments` | 고객 세그먼트 — 등급별 회원수·매출, VVIP 랭킹 |
| `/retention` | 재방문 현황 — 30/60/90일 퍼널, 재방문 고객 리스트 |
| `/sales` | 판매 현황 — TOP 20, 전년 비교, 상품 검색 |
| `/campaigns` | 캠페인 성과 — TOP 10, 신규 구매 고객수 |
| `/winepicks` | 자사몰 연동 — 상품군별 구매 현황 |
| `/customers`, `/consultations` | 고객 관리, 상담 이력 |
| `/patterns`, `/products`, `/targeting` | 구매 패턴·상품·타게팅 분석 |

등급 변화·재방문 화면에는 MMS 발송 버튼(모달)이 붙는다.

## 구성

```
dashboard/   Next.js 16 + React 19 + TypeScript + Tailwind 4 + recharts
doc/         원본 기획서(PPT)
PLAN.md      화면 구조 맵 / 컴포넌트 맵 / Phase 1~3 작업 계획
```

## 실행

```bash
cd dashboard
npm install
npm run dev     # http://localhost:3000
```

## 로드맵 (`PLAN.md`)

1. **Phase 1** — 핵심 CRM 화면(슬라이드 1~7): 사이드바 재구성, 공통 UI 컴포넌트
   (Tabs/StatCard/DataTable/MmsButton/Badge/SearchInput), 세그먼트·판매 화면
2. **Phase 2** — 캠페인 + 자사몰 연동(슬라이드 8~9)
3. **Phase 3** — 실DB 연결 (별도 계획, 현재 샘플 데이터 교체)

## 참고

- 허브 구조: [`NARA-AI-Playground/docs/ARCHITECTURE.md`](https://github.com/1kmwine/NARA-AI-Playground/blob/main/docs/ARCHITECTURE.md)
- 디자인 시스템: 색상 하드코딩 금지 — 허브 `design-system/design-system.css`의 토큰을
  Tailwind `@theme`에 매핑해서 쓴다(`dashboard/CLAUDE.md` 참고)
