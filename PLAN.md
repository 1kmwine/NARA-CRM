# NARA CRM 대시보드 — 전체 개발 계획

> **목표:** PPT 기획서(9슬라이드) 기반의 와인 CRM 내부 대시보드를 완성한다.
> **스택:** Next.js 15 · TypeScript · Tailwind CSS · recharts
> **데이터:** 샘플 하드코딩 (Phase 3에서 실DB 교체)

---

## 화면 구조 맵

```
사이드바 메뉴
├── CRM 종합현황        /dashboard              (슬라이드 1)
├── 고객 세그먼트       /segments               (슬라이드 2)
│   ├── 등급 변화      /segments/grade-changes  (슬라이드 3)
│   └── 재방문 현황    /segments/retention      (슬라이드 4)
├── 판매 현황          /sales                   (슬라이드 5)
│   ├── 월별 매출      /sales/monthly           (슬라이드 5-1)
│   └── 고객별 분석    /sales/customer          (슬라이드 5-2)
├── 캠페인 성과        /campaigns               (슬라이드 8)
├── 자사몰 연동        /winepicks               (슬라이드 9)
├── 고객 관리         /customers               (기존)
└── 상담 이력         /consultations           (기존)
```

---

## 컴포넌트 맵

| 화면 | 차트/컴포넌트 | 차트 종류 |
|------|------------|---------|
| 종합현황 | KPI 6종, 등급 도넛, 매장별 바, 회원추이 라인, 등급매출 수평바 | Donut, Bar(dual axis), Line, HorizontalBar |
| 고객 세그먼트 | 등급별 회원수 바, 등급별 매출 바, 전월 대비 변화 수치, VVIP RANK 테이블 | Bar × 2, Table |
| 등급 변화 | 상향/하향 요약 카드, 등급변화 바차트, 고객 리스트 테이블, MMS 발송 버튼 | Bar, Table |
| 재방문 현황 | 30/60/90일 퍼널 바, 재방문 고객 리스트, MMS 발송 | Bar, Table |
| 판매 현황 | TOP 20 테이블, 전년비교 바, 상품 검색 | Bar(yoy), Table |
| 월별 매출 | 매출액 ComposedChart, 수량 ComposedChart | ComposedChart × 2 |
| 고객별 분석 | 고객 검색, 연구매 스탯, 구매병수 라인, 월별 금액 라인 | Line × 2, StatCard |
| 캠페인 성과 | 캠페인 TOP 10 테이블, 신규 구매 고객수 바, 전년비교 | Bar, Table |
| 자사몰 연동 | 상품군별 도넛, 구매 현황 바 | Donut, Bar |

---

## Phase 1 — 핵심 CRM 화면 (슬라이드 1~7)

### Task 1: 사이드바 메뉴 재구성

- [ ] **Step 1: Sidebar.tsx 메뉴 항목 업데이트**

```
CRM 종합현황    /dashboard
고객 세그먼트   /segments  (하위 탭: 등급변화, 재방문)
판매 현황       /sales     (하위 탭: 월별, 고객별)
캠페인          /campaigns
자사몰 연동     /winepicks
고객 관리       /customers
상담 이력       /consultations
```

- [ ] **Step 2: 중첩 사이드바 or 탭 구조 결정**
  - 세그먼트/판매는 서브메뉴(아코디언) or 상단 탭
  - 추천: 페이지 내 상단 탭(Tab) 컴포넌트

---

### Task 2: 공통 UI 컴포넌트

**Files:**
- `src/components/ui/Tabs.tsx` — 상단 탭 네비게이션
- `src/components/ui/StatCard.tsx` — 숫자 요약 카드 (MMS 버튼 포함)
- `src/components/ui/DataTable.tsx` — 범용 테이블 (정렬, 검색, 페이지네이션)
- `src/components/ui/MmsButton.tsx` — MMS 발송 버튼 (모달 포함)
- `src/components/ui/Badge.tsx` — 등급 배지 (VVIP/VIP/일반/임직원)
- `src/components/ui/SearchInput.tsx` — 고객 검색 입력

---

### Task 3: 고객 세그먼트 페이지 완성 (/segments)

**슬라이드 2 구현**

차트 구성 (2열 그리드):
```
[등급별 회원수 + 비중 도넛] [전월 누적 대비 변화 수치 카드]
[VVIP 전 매장 RANK 테이블] [신규/누적 회원수 추이 라인]
```

하단:
- 비회원/일반/VIP/VVIP/임직원 고객 리스트 바로가기 버튼
- MMS 발송 버튼

**Files:**
- `src/app/segments/page.tsx` — 탭 포함 메인
- `src/components/customers/GradeShareChart.tsx` — 등급 비중 도넛
- `src/components/customers/MemberChangeStats.tsx` — 전월 변화 수치
- `src/components/customers/VvipRankTable.tsx` — VVIP 매장별 랭킹
- `src/components/customers/MemberTrendLine.tsx` — 신규/누적 라인

---

### Task 4: 등급 변화 페이지 (/segments/grade-changes)

**슬라이드 3 구현**

```
[등급 상향 요약 카드] [등급 하향 요약 카드]
[등급 변화 흐름 바차트]
[상향/하향 고객 리스트 테이블]
[MMS 발송 버튼]
```

**Files:**
- `src/app/segments/grade-changes/page.tsx`
- `src/components/customers/GradeChangeChart.tsx`
- `src/components/customers/GradeChangeTable.tsx`

---

### Task 5: 재방문 현황 페이지 (/segments/retention)

**슬라이드 4 구현**

```
[30일 이내 고객 카드]  [60일 이내 고객 카드]  [90일 이내 고객 카드]
[재방문 퍼널 바차트 (30/60/90일 누적)]
[고객 리스트 테이블 (탭: 30일/60일/90일)]
[MMS 발송 버튼]
```

**Files:**
- `src/app/segments/retention/page.tsx`
- `src/components/customers/RetentionFunnelChart.tsx`
- `src/components/customers/RetentionCustomerTable.tsx`

---

### Task 6: 판매 현황 메인 (/sales)

**슬라이드 5 구현**

```
[전년 동기 대비 TOP 5 카드]
[TOP 20 판매 상품 테이블 (전년비교 컬럼 포함)]
[전체 보기 / 필터 기능]
```

**Files:**
- `src/app/sales/page.tsx` — 탭 (TOP 20 / 월별 / 고객별)
- `src/components/sales/SalesRankTable.tsx` — TOP 20 테이블 (yoy %)
- `src/components/sales/YoyCompareBar.tsx` — 전년대비 바

---

### Task 7: 월별 매출 (/sales/monthly)

**슬라이드 5-1 구현**

```
[월별 매출액 ComposedChart (바+전년선)]  [월별 판매수량 ComposedChart (바+전년선)]
[월별 데이터 요약 테이블]
```

(현재 부분 구현됨 — 개선 필요)

---

### Task 8: 고객별 구매 분석 (/sales/customer)

**슬라이드 5-2 구현**

```
[고객 검색 인풋]
[연 구매 횟수 스탯]  [구매 병수 스탯]  [평균 구매 금액 스탯]
[월별 구매 수량 라인차트]  [월별 구매 금액 라인차트]
[구매 상품 목록 테이블 (구매액 높은 순 기본)]
```

**Files:**
- `src/app/sales/customer/page.tsx`
- `src/components/sales/CustomerSearchPanel.tsx`
- `src/components/sales/CustomerMonthlyQtyChart.tsx`
- `src/components/sales/CustomerMonthlyAmtChart.tsx`
- `src/components/sales/CustomerProductTable.tsx`

---

## Phase 2 — 캠페인 + 자사몰 (슬라이드 8~9)

### Task 9: 캠페인 성과 (/campaigns)

**슬라이드 8 구현**

```
[캠페인 기간 선택 (전년 동기 비교)]
[신규 구매 고객수 바차트]  [캠페인 효과 라인]
[캠페인 TOP 10 성과 테이블]
```

**Files:**
- `src/app/campaigns/page.tsx`
- `src/app/campaigns/layout.tsx`
- `src/components/campaigns/CampaignRankTable.tsx`
- `src/components/campaigns/NewCustomerChart.tsx`

---

### Task 10: 자사몰 연동 (/winepicks)

**슬라이드 9 구현**

```
[와인픽스 앱 연동 상태 배너]
[구매 상품군별 도넛차트]  [월별 앱 구매 바차트]
[앱 구매 고객 목록 테이블]
```

**Files:**
- `src/app/winepicks/page.tsx`
- `src/app/winepicks/layout.tsx`
- `src/components/winepicks/ProductCategoryChart.tsx`
- `src/components/winepicks/AppSalesChart.tsx`

---

## Phase 3 — 실DB 연결 (별도 계획)

Plan A/B/C 방식 참고:
- Prisma + SQLite → PostgreSQL 스키마 설계
- API 라우트 (`/api/crm/*`) 구현
- 샘플 데이터 → 실데이터 교체

---

## 완료 기준

### Phase 1
- [ ] 사이드바 전체 메뉴 + 서브 탭 작동
- [ ] 고객 세그먼트 전 차트 렌더링
- [ ] 등급 변화 페이지 + MMS 버튼 UI
- [ ] 재방문 현황 페이지 + 30/60/90일 탭
- [ ] 판매 현황 TOP 20 테이블 (전년비교)
- [ ] 고객별 구매 분석 검색 + 차트 2개
- [ ] `npm run build` 오류 없음

### Phase 2
- [ ] 캠페인 성과 TOP 10 + 신규고객 차트
- [ ] 자사몰 연동 화면 기본 구조
