# 2018

## 8.24(Fri)
- 브라우저의 랜더링 단계
  - HTML마크업을 파싱해서 DOM 생성
  - CSS를 파싱해서 CSSOM 생서
  - DOM 과 CSSOM을 결합하여 **랜더링 트리 형성** (단 html요소는 있으나 css에서 display: none; 이된 요소는 제외)
  - 랜더링 트리에서 레이아웃을 실행하여 각 노드의 형태를 계산
  - 개별 노드를 화면에 페인팅

- reflow
  - geometry를 계산하는 과정(width, height, position)

- repaint
  - fragment fill
  - fragment(픽셀)
  - background

- normal flow
  - bfc(block formatting context)에서는 박스들이 수직으로 배치
  - ifc(inline formatting context)에서는 수평으로 배치

css position이 static 또는 relative 일경우 float이 none으로 되었을 경우 발생

- bfc (block formatting context) 
  - 특정 조건에 해당하는 요소로 부터 형성
    - 루트 또는 이를 포함하는 요소(body)
    - float (none이 아닌 요소)
    - position (absolute 또는 fixed)
    - inline-block
    - table cell (display: table-cell인 요소 html table cell 기본값)
    - table caption (display: table-caption인 요소 html table caption 기본값)
    - overflow가 visible이 아닌 요소
    - flex box(display: flex | inline-flex)

bfc내의 생성된 요소들 중 새로 생성되는 bfc요소의 하위 요소는 포함 하지 않는다.