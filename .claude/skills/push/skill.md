---
name: push
description: 현재 브랜치를 원격에 푸시
disable-model-invocation: true
allowed-tools: Bash(git *)
---

# /push 명령

현재 브랜치의 변경사항을 원격에 푸시합니다.

## 필수 규칙
1. **main에 직접 푸시 절대 금지** (PR만 허용)

## 브랜치 전략
```
dev (개발) → PR → stg (스테이징) → PR → main (프로덕션)
```

## 흐름
1. 현재 브랜치 확인
2. 현재 브랜치가 `main`이면 "main 브랜치에 직접 푸시할 수 없습니다." 출력 후 종료
3. 커밋되지 않은 변경사항이 있으면 "커밋되지 않은 변경사항이 있습니다. 먼저 커밋해주세요." 출력 후 종료
4. `git push -u origin <브랜치>` 실행
5. 푸시된 커밋 목록 출력
