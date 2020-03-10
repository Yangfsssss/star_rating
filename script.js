// 第一步 初始评分
const ratings = {
    vue: 4.7,
    node: 3.4,
    jQuery: 2.3,
    Djingo: 3.6,
    Flutter: 4.1
}

// 第二部 设置总分变量
const starsTotal = 5

document.addEventListener('DOMContentLoaded', getRatings)
// 第三步 设置评分函数
function getRatings() {
    for (let rating in ratings) {
        // 获得分数的百分比
        const starPercentage = (ratings[rating] / starsTotal) * 100

        // 获得四舍五入到十位的分数百分比
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`

        // 点亮星标宽度等于分数百分比
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded

        // 插入分数更新节点
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating]
    }
}

// 第四步 获取form-group节点
const productSelect = document.getElementById('produce-select')
const ratingControl = document.getElementById('rating-control')

let product

// 第五步 下拉框的事件监听

productSelect.addEventListener('change', e => {
    product = e.target.value

    // 启动input输入框设置分数
    ratingControl.disabled = false
    ratingControl.value = ratings[product]
})

// 更改分数
ratingControl.addEventListener('blur', e => {
    const rating = e.target.value

    // 设置分数界限
    if (rating > 5) {
        alert('请注意评分在0-5之间')
        return
    }

    // 设置分数
    ratings[product] = rating
    getRatings()
})