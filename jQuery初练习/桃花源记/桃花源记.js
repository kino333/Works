$(".div:even").css({ 'color': '#E9967A', "fontStyle": "oblique" });
$(".div:first").css({ 'fontSize': ' 20px', 'fontFamily': ' 宋体', 'color': 'pink' });
$(".div:odd").css({ 'color': '#6495ED', "fontStyle": "italic" });
$(".div:eq(2)").css({ 'color': '#FFD700', "fontWeight": "bold" });
$(".div:eq(4)").css({ 'color': '#ADFF2F', "fontWeight": "bold" });
$(".div:eq(4)").css({ 'textDecoration': 'underline', 'color': '#F08080', "fontWeight": "bold" });
$(".div:gt(4):lt(3)").css({ 'lineHeight': '0.5em', 'color': '#90EE90', "border": "1px dashed #D3D3D3" });
//gt(4)以后，索引为0,1,2,3,4的已经被排除了，那么剩下的有重新计数，下标又从0开始。
$(".div:eq(7)").css({ 'textDecoration': 'line-through', "textDecorationColor": "black" });
$(".div:gt(8):lt(5)").css({ 'color': '#B0C4DE', "fontWeight": "bold", 'borderBottom': '1px dashed red' });
$(".div:eq(8)").css({ 'fontVariant': 'small-caps', 'color': '#DA70D6' });
$(".div:eq(9)").css({ 'textDecoration': 'overline', 'color': '#ADFF2F' });
$(".div:last").css({ 'fontSize': ' 25px', 'fontFamily': ' 黑体', 'color': '#FF8C00', "border": "2px dotted #2F4F4F" });