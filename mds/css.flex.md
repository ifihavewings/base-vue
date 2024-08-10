# flex 的赋值
Flex 布局中的缩写属性，它分别设置了三个属性：flex-grow、flex-shrink 和 flex-basis。

## flex: none;

快捷属性缩写， 和 flex: 0 0 auto; 效果相同。

## flex: auto   

快捷属性缩写， 和 flex: 1 1 auto; 效果相同。

## flex: 0 0 auto;

## flex-grow：

该属性定义了项目的放大比例，默认值为 0。
如果所有项目的 flex-grow 都为 0，则它们将等分剩余空间，不会放大。
如果一个项目的 flex-grow 值为 2，而其他项目都为 1，则前者占据的剩余空间将是后者的两倍。
## flex-shrink：

该属性定义了项目的缩小比例，默认值为 1。
如果所有项目的 flex-shrink 都为 1，当空间不足时，它们将等比例缩小。
如果一个项目的 flex-shrink 值为 0，而其他项目都为 1，则空间不足时，前者不缩小。
## flex-basis：

该属性定义了在分配多余空间之前，项目占据的主轴空间，默认值为 auto。
它可以取值为一个长度单位或一个百分比，或者设为 auto，表示由项目的内容决定。
auto 时，项目的大小由其内容撑开。
在 flex: 0 0 auto; 中：

flex-grow: 0; 表示项目在分配剩余空间时不进行放大。
flex-shrink: 0; 表示项目在空间不足时不进行缩小。
flex-basis: auto; 表示项目的大小由其内容决定，也就是由项目内部的内容来撑开。