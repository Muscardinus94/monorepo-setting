## 파일구조
```
- app
    - [page name]
        - layout.tsx
        - page.tsx
        - components (해당 패이지에서만 사용하는 component)
    - page.tsx
    - layout.tsx
- assets (svg, image, fonts ...)
- components (공통 component)
- libs
    - axios
    - react-query
- stores
    - [store name]
        - store.ts
        - utils.ts
- hooks (custom hooks 저장)
    - [useCustomHook.(tsx|ts)]
- apis
    - [service(서비스 이름)]
        - index.ts (각 instance 취합)
```
