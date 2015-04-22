$(document).ready(function () {
    var $bar            = $('#bar')

    var scopeList = {
        $list : $('ul', $bar),
        buffer: new Buffer(),
        position: 0
    }

    var scopeButton = {
        $button    : $('#overflow'),
        switchValue: ['hidden', 'visible'],
        value      : 0
    }

    append(scopeList)
    console.log($(window).outerWidth())
    console.log($(scopeList.$list).outerWidth())

    scopeButton.$button.on('click', function () {
        var oldValue = scopeButton.switchValue[scopeButton.value]
        scopeButton.value = scopeButton.value ? 0 : 1
        var newValue = scopeButton.switchValue[scopeButton.value]
        $(this).text(newValue)
        $bar.css('overflow', oldValue)
    })

    $(window).on('resize', function () {
        console.log($(window).outerWidth())
    })
    $bar.on('click', '.left', function () {
        var windowWidth = $(window).outerWidth()
        var listWidth   = scopeList.$list.outerWidth()
        var incrWidth   = windowWidth - 150
        if (scopeList.position - incrWidth < 0) {
            scopeList.position = 0
        } else {
            scopeList.position -= incrWidth
        }
        scopeList.$list.animate({
            left: -scopeList.position
        }, 1000)
    })
    $bar.on('click', '.right', function () {
        var windowWidth = $(window).outerWidth()
        var listWidth   = scopeList.$list.outerWidth()
        var incrWidth   = windowWidth - 150
        if (scopeList.position + 2 * windowWidth >= listWidth) {
            append(scopeList)
            listWidth = scopeList.$list.outerWidth()
        }
        
        scopeList.position += incrWidth
        scopeList.$list.animate({
            left: -scopeList.position
        }, 1000)
        console.log(listWidth - scopeList.position)
    })
})

function append(scopeList) {
	//console.log(this)
    scopeList.$list.append.apply(scopeList.$list, scopeList.buffer.get().map(function (e) {
    	return '<li><a>' + e + '</a></li>'
    }))	
}

