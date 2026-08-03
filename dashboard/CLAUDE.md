@AGENTS.md

## 디자인 시스템

UI를 새로 만들거나 색상을 정할 때 색상 하드코딩(임의 hex) 금지. 이 프로젝트는 Tailwind를 쓰기 때문에 나라셀라 공유 디자인 시스템을 `design-system.css` 링크 대신 `src/app/globals.css`의 `@theme`에서 토큰값으로 매핑하는 방식으로 적용돼 있다 — `zinc-50~950` 스케일 자체가 무채색 그레이 값으로, `accent-*` 스케일이 블루 `#2383E2` 기반으로 이미 덮어써져 있으니 기존 `bg-zinc-*`/`text-zinc-*`/`accent-*` 클래스를 그대로 쓰면 된다. 등급뱃지(VVIP 등)·랭킹뱃지·차트 시리즈 색처럼 의미가 다른 색은 accent로 바꾸지 말 것(구분이 목적인 색이라 별개). 원칙 설명: `NARA-Information-Digest`의 `design-system/design.md`. 비주얼 참고: `NARA-Design-System` 저장소의 `docs/preview.html`.
