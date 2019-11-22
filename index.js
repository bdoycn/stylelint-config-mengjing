module.exports = {
  plugins: [
    'stylelint-order'
  ],
  extends: 'stylelint-config-recommended-scss',
  rules: {
    /*********************************** 风格 ***********************************/
    // 十六进制颜色必须使用小写
    'color-hex-case': 'lower',
    // 十六进制颜色必须使用 6 位的数字长度
    'color-hex-length': 'long',
    // 字体名称周围最好不要加上引号
    // 函数中引用网址需要添加引号
    'function-url-quotes': 'always',
    // 函数名必须小写
    'function-name-case': 'lower',
    // 禁止在数字中尾随 0
    'number-no-trailing-zeros': true,
    // 字符串周围必须使用单引号
    'string-quotes': 'single',
    // 单位名必须小写
    'unit-case': 'lower',
    // 关键字必须小写
    'value-keyword-case': 'lower',
    // 值列表的逗号后必须有空格
    'value-list-comma-space-after': 'always-single-line',
    // 值列表的逗号前不能有空格
    'value-list-comma-space-before': 'never',
    // 值列表中的不能有空行
    'value-list-max-empty-lines': 0,
    // 属性名必须小写
    'property-case': 'lower',
    // 声明的爆炸后不允许出现空格
    'declaration-bang-space-after': 'never',
    // 声明的爆炸前必须有空格
    'declaration-bang-space-before': 'always',
    // 声明的冒号后如果有多行属性 则必须换行
    'declaration-colon-newline-after': 'always-multi-line',
    // 声明的冒号后必须有一个空格
    'declaration-colon-space-after': 'always',
    // 声明的冒号前不能有空格
    'declaration-colon-space-before': 'never',
    // 声明块的分号后必须换行
    'declaration-block-semicolon-newline-after': 'always',
    // 声明快的分号前不能换行
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    // 声明块的分号后只允许在单行下有一个空格
    'declaration-block-semicolon-space-after': 'always-single-line',
    // 声明块的分号前不允许有空格
    'declaration-block-semicolon-space-before': 'never',
    // 声明块的末尾必须有分号
    'declaration-block-trailing-semicolon': 'always',
    // 块关闭前不允许有空行
    'block-closing-brace-empty-line-before':  'never',
    // 块的右括号后必须有换行符
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else'],
    }],
    // 块的右括号前必须有换行符
    'block-closing-brace-newline-before': 'always',
    // 块的右括号前不能有空格
    // 暂无属性支持
    // 多行块的右括号前不能有空格
    'block-closing-brace-space-before': 'always-single-line',
    // 块的左括号后必须有换行符
    'block-opening-brace-newline-after': 'always',
    // 块的左括号前必须有一个空格
    'block-opening-brace-space-before': 'always',
    // 属性选择器的方括号内不能有空格
    'selector-attribute-brackets-space-inside': 'never',
    // 属性选择器的运算符后不能有空格
    'selector-attribute-operator-space-after': 'never',
    // 属性选择器的运算符前不能有空格
    'selector-attribute-operator-space-before': 'never',
    // 属性选择器的属性值不能加引号
    'selector-attribute-quotes': 'never',
    // 组合选择器后必须有空格
    'selector-combinator-space-after': 'always',
    // 组合选择器前必须有空格
    'selector-combinator-space-before': 'always',
    // 后代选择器之间只能有一个空格
    'selector-descendant-combinator-no-non-space': true,
    // 伪类选择器必须小写
    'selector-pseudo-class-case': 'lower',
    // 伪类选择器的括号中不能有空格
    'selector-pseudo-class-parentheses-space-inside': 'never',
    // 伪元素选择器必须小写
    'selector-pseudo-element-case': 'lower',
    // 伪元素选择器必须使用双冒号
    'selector-pseudo-element-colon-notation': 'double',
    // 类型选择器必须使用小写
    'selector-type-case': 'lower',
    // 选择器列表的逗号后必须有空格
    'selector-list-comma-space-after': 'always-single-line',
    // 选择器列表的逗号前不能有空格
    'selector-list-comma-space-before': 'never',
    // 媒体函数中的冒号后需要有空格
    'media-feature-colon-space-after': 'always',
    // 媒体函数中的冒号前不能有空格
    'media-feature-colon-space-before': 'never',
    // 媒体函数中的特征名称必须小写
    'media-feature-name-case': 'lower',
    // 媒体函数的括号内不能有空格
    'media-feature-parentheses-space-inside': 'never',
    // 媒体函数中的范围运算符后必须有空格
    'media-feature-range-operator-space-after': 'always',
    // 媒体函数中的范围运算符前必须有空格
    'media-feature-range-operator-space-before': 'always',
    // AT 规则名必须使用小写
    'at-rule-name-case': 'lower',
    // AT 规则名后必须有一个空格
    'at-rule-name-space-after': 'always',
    // AT 规则的分号后必须有换行符
    'at-rule-semicolon-newline-after': 'always',
    // AT 规则的分号前不能有空格
    'at-rule-semicolon-space-before': 'never',
    // 星号注释的前后必须有空格
    'comment-whitespace-inside': 'always',
    // 缩进为 2 个空格
    'indentation': 2,
    // 指定 unix 风格的换行符
    'linebreaks': 'unix',
    // 限制最大空行数为 2
    'max-empty-lines': 2,
    // 限制一行最大的长度为 100
    'max-line-length': 100,
    // 禁止行尾空格
    'no-eol-whitespace': true,
    // 禁止第一行为空
    'no-empty-first-line': true,



    /*********************************** 排序 ***********************************/
    'order/order': [
      'custom-properties', // 自定义属性
      'dollar-variables', // 美元变量
      'at-variables', // at 变量(less)
      {
        type: 'rule',
        selector: /^%[\w-]+$/,
      }, // 声明占位符
      {
        type: 'at-rule',
        name: 'mixin',
      }, // 声明 @mixin
      {
        type: 'at-rule',
        name: 'extend',
      }, // 继承 @extend
      {
        type: 'at-rule',
        name: 'include',
      }, // 引用 mixin
      'declarations', // css 声明
      'rules', // 嵌套的规则
      'at-rules', // atKeyword 嵌套的规则
    ],
    'order/properties-order': [
        [
          "display",
          "visibility",
          "float",
          "clear",
          "overflow",
          "overflow-x",
          "overflow-y",
          "clip",
          "zoom",

          "table-layout",
          "empty-cells",
          "caption-side",
          "border-spacing",
          "border-collapse",
          "list-style",
          "list-style-position",
          "list-style-type",
          "list-style-image",

          "-webkit-box-orient",
          "-webkit-box-direction",
          "-webkit-box-decoration-break",
          "-webkit-box-pack",
          "-webkit-box-align",
          "-webkit-box-flex",

          "position",
          "top",
          "right",
          "bottom",
          "left",
          "z-index",

          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left",
          "-webkit-box-sizing",
          "-moz-box-sizing",
          "box-sizing",
          "border",
          "border-width",
          "border-style",
          "border-color",
          "border-top",
          "border-top-width",
          "border-top-style",
          "border-top-color",
          "border-right",
          "border-right-width",
          "border-right-style",
          "border-right-color",
          "border-bottom",
          "border-bottom-width",
          "border-bottom-style",
          "border-bottom-color",
          "border-left",
          "border-left-width",
          "border-left-style",
          "border-left-color",
          "-webkit-border-radius",
          "-moz-border-radius",
          "border-radius",
          "-webkit-border-top-left-radius",
          "-moz-border-radius-topleft",
          "border-top-left-radius",
          "-webkit-border-top-right-radius",
          "-moz-border-radius-topright",
          "border-top-right-radius",
          "-webkit-border-bottom-right-radius",
          "-moz-border-radius-bottomright",
          "border-bottom-right-radius",
          "-webkit-border-bottom-left-radius",
          "-moz-border-radius-bottomleft",
          "border-bottom-left-radius",
          "-webkit-border-image",
          "-moz-border-image",
          "-o-border-image",
          "border-image",
          "-webkit-border-image-source",
          "-moz-border-image-source",
          "-o-border-image-source",
          "border-image-source",
          "-webkit-border-image-slice",
          "-moz-border-image-slice",
          "-o-border-image-slice",
          "border-image-slice",
          "-webkit-border-image-width",
          "-moz-border-image-width",
          "-o-border-image-width",
          "border-image-width",
          "-webkit-border-image-outset",
          "-moz-border-image-outset",
          "-o-border-image-outset",
          "border-image-outset",
          "-webkit-border-image-repeat",
          "-moz-border-image-repeat",
          "-o-border-image-repeat",
          "border-image-repeat",
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",

          "font",
          "font-family",
          "font-size",
          "font-weight",
          "font-style",
          "font-variant",
          "font-size-adjust",
          "font-stretch",
          "font-effect",
          "font-emphasize",
          "font-emphasize-position",
          "font-emphasize-style",
          "font-smooth",
          "line-height",
          "text-align",
          "-webkit-text-align-last",
          "-moz-text-align-last",
          "-ms-text-align-last",
          "text-align-last",
          "vertical-align",
          "white-space",
          "text-decoration",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-style",
          "text-emphasis-position",
          "text-indent",
          "-ms-text-justify",
          "text-justify",
          "letter-spacing",
          "word-spacing",
          "-ms-writing-mode",
          "text-outline",
          "text-transform",
          "text-wrap",
          "-ms-text-overflow",
          "text-overflow",
          "text-overflow-ellipsis",
          "text-overflow-mode",
          "-ms-word-wrap",
          "word-wrap",
          "-ms-word-break",
          "word-break",

          "color",
          "background",
          "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
          "background-color",
          "background-image",
          "background-repeat",
          "background-attachment",
          "background-position",
          "-ms-background-position-x",
          "background-position-x",
          "-ms-background-position-y",
          "background-position-y",
          "-webkit-background-clip",
          "-moz-background-clip",
          "background-clip",
          "background-origin",
          "-webkit-background-size",
          "-moz-background-size",
          "-o-background-size",
          "background-size",

          "outline",
          "outline-width",
          "outline-style",
          "outline-color",
          "outline-offset",
          "opacity",
          "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
          "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
          "-ms-interpolation-mode",
          "-webkit-box-shadow",
          "-moz-box-shadow",
          "box-shadow",
          "filter:progid:DXImageTransform.Microsoft.gradient",
          "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
          "text-shadow",

          "-webkit-transition",
          "-moz-transition",
          "-ms-transition",
          "-o-transition",
          "transition",
          "-webkit-transition-delay",
          "-moz-transition-delay",
          "-ms-transition-delay",
          "-o-transition-delay",
          "transition-delay",
          "-webkit-transition-timing-function",
          "-moz-transition-timing-function",
          "-ms-transition-timing-function",
          "-o-transition-timing-function",
          "transition-timing-function",
          "-webkit-transition-duration",
          "-moz-transition-duration",
          "-ms-transition-duration",
          "-o-transition-duration",
          "transition-duration",
          "-webkit-transition-property",
          "-moz-transition-property",
          "-ms-transition-property",
          "-o-transition-property",
          "transition-property",
          "-webkit-transform",
          "-moz-transform",
          "-ms-transform",
          "-o-transform",
          "transform",
          "-webkit-transform-origin",
          "-moz-transform-origin",
          "-ms-transform-origin",
          "-o-transform-origin",
          "transform-origin",
          "-webkit-animation",
          "-moz-animation",
          "-ms-animation",
          "-o-animation",
          "animation",
          "-webkit-animation-name",
          "-moz-animation-name",
          "-ms-animation-name",
          "-o-animation-name",
          "animation-name",
          "-webkit-animation-duration",
          "-moz-animation-duration",
          "-ms-animation-duration",
          "-o-animation-duration",
          "animation-duration",
          "-webkit-animation-play-state",
          "-moz-animation-play-state",
          "-ms-animation-play-state",
          "-o-animation-play-state",
          "animation-play-state",
          "-webkit-animation-timing-function",
          "-moz-animation-timing-function",
          "-ms-animation-timing-function",
          "-o-animation-timing-function",
          "animation-timing-function",
          "-webkit-animation-delay",
          "-moz-animation-delay",
          "-ms-animation-delay",
          "-o-animation-delay",
          "animation-delay",
          "-webkit-animation-iteration-count",
          "-moz-animation-iteration-count",
          "-ms-animation-iteration-count",
          "-o-animation-iteration-count",
          "animation-iteration-count",
          "-webkit-animation-direction",
          "-moz-animation-direction",
          "-ms-animation-direction",
          "-o-animation-direction",
          "animation-direction",

          "content",
          "quotes",
          "counter-reset",
          "counter-increment",
          "resize",
          "cursor",
          "-webkit-user-select",
          "-moz-user-select",
          "-ms-user-select",
          "user-select",
          "nav-index",
          "nav-up",
          "nav-right",
          "nav-down",
          "nav-left",
          "-moz-tab-size",
          "-o-tab-size",
          "tab-size",
          "-webkit-hyphens",
          "-moz-hyphens",
          "hyphens",
          "pointer-events"
      ]
    ],
  }
};
