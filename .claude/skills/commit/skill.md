---
name: commit
description: 커밋 규칙에 맞춰 커밋 생성
disable-model-invocation: true
allowed-tools: Bash(git *)
---

# /commit 명령

현재 변경사항을 확인하고 커밋을 생성합니다.

## 필수 규칙
1. **Co-Authored-By 절대 금지** — 커밋 메시지에 `Co-Authored-By`, `Claude`, `Anthropic`, `noreply@anthropic.com` 등 AI 관련 문구를 절대 포함하지 않는다
2. 커밋 메시지는 **한국어**로 작성
3. `타입(스코프): 설명` 형식. 타입은 풀네임: `feature`, `fix`, `chore`, `docs`, `refactor`, `style`, `test`. 스코프는 핵심 주제를 괄호 안에 (예: `feature(auth): 구글 로그인 추가`, `fix(sidebar): 모바일 메뉴 닫힘 버그 수정`)
4. `.env`, `.env.local`, credentials 등 민감한 파일은 커밋하지 않음

## 흐름
1. `git diff --staged`로 스테이징된 파일 확인
2. 스테이징된 파일이 없으면 "스테이징된 변경사항이 없습니다. `git add`로 파일을 먼저 스테이징해주세요." 출력 후 종료
3. 스테이징된 변경 내용 분석 → 적절한 커밋 메시지 생성 (인자가 있으면 `$ARGUMENTS` 사용)
4. HEREDOC 형식으로 `git commit` 실행
5. 커밋 완료 후 결과 요약을 아래 형식으로 출력:
   ```
   <커밋 해시> <커밋 메시지 첫 줄>

   변경 내용:
   - 파일명: 어떤 부분이 어떻게 수정되었는지 한 줄 설명
   - 파일명: 어떤 부분이 어떻게 수정되었는지 한 줄 설명
   ...

   N개 파일, +추가 / -삭제 라인
   ```

## 주의
- **스테이징된 파일만 커밋한다** — 자동으로 `git add`를 하지 않는다
- 유저가 직접 `git add`로 원하는 파일을 스테이징한 후 `/commit`을 실행해야 한다
