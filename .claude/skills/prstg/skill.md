---
name: prstg
description: dev → stg PR 생성
disable-model-invocation: true
allowed-tools: Bash(git *), Bash(gh *)
---

# /prstg 명령

dev 브랜치에서 stg 브랜치로 PR을 생성합니다.

## 필수 규칙
1. **Co-Authored-By 절대 금지** — PR 본문, 커밋 메시지에 `Co-Authored-By`, `Claude`, `Anthropic` 등 AI 관련 문구를 절대 포함하지 않는다
2. PR 제목과 본문은 **한국어**로 작성

## 흐름
1. 현재 브랜치가 `dev`인지 확인. 아니면 "dev 브랜치에서만 실행할 수 있습니다. 현재 브랜치: <브랜치명>" 출력 후 종료
2. 커밋되지 않은 변경사항이 있으면 "커밋되지 않은 변경사항이 있습니다. 먼저 커밋해주세요." 출력 후 종료
3. `git push -u origin dev` 실행
4. `git log stg..HEAD --oneline`으로 포함된 커밋 목록 수집
5. PR 제목: `타입(스코프): 설명` 형식 + 한국어 (70자 이내)
   - 타입은 풀네임: `feature`, `fix`, `chore`, `docs`, `refactor`, `style`, `test`
   - 스코프는 핵심 주제를 괄호 안에: `feature(firestore):`, `fix(auth):`, `chore(deploy):` 등
   - 커밋이 1개면 해당 커밋 메시지를 풀네임+스코프 형식으로 변환
   - 여러 개면 대표 타입과 스코프로 변경사항 요약
6. `git diff stg..HEAD --stat`과 커밋 메시지를 분석하여 실제 변경된 기능에 맞는 테스트 항목 작성
   - 예: Firestore 연동 커밋 → "로그인 후 데이터 저장/조회 확인", "비로그인 시 localStorage 동작 확인"
   - 예: UI 변경 커밋 → "다크/라이트 모드 전환 확인", "모바일 반응형 레이아웃 확인"
   - 예: 관리자 페이지 커밋 → "관리자 계정 /admin 접근 확인", "일반 유저 /admin 접근 차단 확인"
7. `gh pr create`로 PR 생성. 본문은 HEREDOC 형식으로 아래 템플릿 사용:
   ```
   gh pr create --base stg --title "PR 제목" --body "$(cat <<'EOF'
   ## 변경 사항
   - 주요 변경 내용 1
   - 주요 변경 내용 2
   - ...

   ## 포함된 커밋
   - `해시` 커밋 메시지
   - `해시` 커밋 메시지
   - ...

   ## 테스트 계획
   - [ ] (커밋 내용 기반 구체적 테스트 항목)
   - [ ] (커밋 내용 기반 구체적 테스트 항목)
   - [ ] ...
   EOF
   )"
   ```
8. 생성된 PR URL 출력
