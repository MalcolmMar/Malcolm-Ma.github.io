/**
 * @Title ej-search
 * @Description The search function
 *
 */

let searchData = null
$(document).ready(function () {
    $.ajax({
        url: 'data/search.json',
        async: false,
        success: function (data) {
            searchData = data;
        }
    });
});

const searchListContainer = document.getElementById('DATALIST')
const searchInput = document.getElementById('ej-search-input');
let onSearch = false

searchInput.oninput = function (e) {
    if (searchInput.value !== '' && !onSearch) {
        for (let key in searchData) {
            const text = document.createTextNode(key);
            const ele = document.createElement("option");//创建一个html标签
            ele.appendChild(text);//在标签内添加文字
            searchListContainer.appendChild(ele);//将标签添加到页面中
        }
        onSearch = true
    }
}
searchInput.onkeyup = function (e) {
    if (e.key === 'Enter') {
        handleSearch()
    }
}
searchInput.onblur = function (e) {
    onSearch = false
}

function handleSearch() {
    if (searchInput.value !== '') {
        for (let key in searchData) {
            console.log(key.search(searchInput.value))
            if (key.search(searchInput.value) !== -1) {
                window.location.href = searchData[key]
                searchInput.value = ''
                break
            }
        }
    }
}

function handleSearchClick() {
    console.log('click')
    handleSearch()
}