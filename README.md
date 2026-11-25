# 꾸비 모바일 랜딩

꾸비 개인 브랜딩용 모바일 퍼스트 랜딩 페이지입니다.  
슬로건: **꾸준함이 비범함을 만든다**

AI 활용이 막막한 직장인에게 실무에 바로 적용 가능한 AI 협업 방법을 소개하고, 커피챗으로 연결합니다.

## 실행

빌드 없이 정적 HTML로 동작합니다.

```bash
# 프로젝트 루트에서
python -m http.server 5500
```

브라우저에서 [http://127.0.0.1:5500/](http://127.0.0.1:5500/) 을 엽니다.  
또는 `index.html`을 브라우저에서 직접 열어도 됩니다.

## 구조

```
.
├── index.html      # 페이지 마크업
├── css/styles.css  # 스타일 (밝은 톤, 모바일 기준)
├── js/main.js      # 커피챗 URL, 스크롤 페이드인
└── README.md
```

## 콘텐츠

| 구역 | 내용 |
|------|------|
| Hero | 브랜드명, 슬로건, 가치 문장, 커피챗 CTA |
| Topics | AI 워크 스마트 / AI 동료 만들기 / 데이터 인사이트 |
| Closing | 커피챗 재유도 + 푸터 |

## 커피챗 URL 변경

[`js/main.js`](js/main.js)의 `COFFEECHAT_URL`만 수정하면 페이지의 모든 커피챗 버튼에 반영됩니다.

```js
const COFFEECHAT_URL = "https://forms.gle/NUop5RaC8kJzx8fY8";
```

빈 문자열이면 클로징 섹션 앵커(`#coffeechat`)로 이동합니다.
