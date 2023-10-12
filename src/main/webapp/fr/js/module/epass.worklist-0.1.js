/**
 * worklist drawer
 * author: riix@epasscni.com
 * version: 0.1
 */

$.params = (typeof $.params !== 'undefined') ? $.params : []; // 전역 변수 선언

$(function() {

    var $document = $(document),
        $window = $(window),
        $html = $('html'),
        $skyscraper = $('.skyscraper');

    // get json data
    var _getJsonData = function(_json) {

        if (_json === undefined) return false;

        var _totalDepth = 1, // 표시할 전체 depth 셀
            _result = '';

        var _getEmptyCell = function(_depth, _total, _bool) {
            var _spacer = '',
                _class = '';
            _depth = (_bool === true) ? _depth : _total - _depth;
            for (var i = 0; i < _depth; i++) {
                _class = 'depth';
                _class = (_bool === true) ? _class + i : _class + ((_total - _depth) + i + 1);
                _spacer += '<td class="' + _class + '">&nbsp;</td>';
            }
            return _spacer;
        };

        var _getChildItems = function(_arr, _depth) {

            var val = function(val) {
                _return = (val !== undefined) ? val : '';
                return _return;
            };

            $.each(_arr, function(i) {

                var _this = this,
                    _classNoProgress = '';

                var _filename = _this.src.split('/');

                _filename = _filename[_filename.length - 1];

                if (_this.src === '') {
                    _this.src = 'javascript:;';
                    _filename = 'untitled';
                }

                if (_this.percent === null) {
                    _this.percent = '';
                    _this.day = '';
                    _this.nwax = '';
                    _this.kwah = '';
                    _filename = '';
                    _classNoProgress = 'no-progress';
                }

                if (val(_this.percent) === 100) {
                    _result += '<tr class="complete">';
                } else {
                    _result += '<tr>';
                }
                _result += '<td class="code">' + val(_this.code) + '</td>';
                _result += _getEmptyCell(_depth, _totalDepth, true);
                _result += '<td class="depth' + _depth + '">' + _this.name + '</td>';

                _result += _getEmptyCell(_depth, _totalDepth, false);

                // filename
                _result += '<td class="filename">';
                if (_filename !== 'untitled' && val(_this.src) !== 'javascript:;') {

                    if (_filename.match('pop')) {

                        //_result += '<a href="' + val(_this.src) + '" data-size="' + _this.size + '" data-title="' + _this.name + '" data-text="' + val(_this.src) + '" class="js-modal-ajax">' + _filename + '</span></a>';
                        //_result += '<a href="' + val(_this.src) + '" data-width="' + _this.sizeW + '" data-height="' + _this.sizeH + '" data-scroll="' + _this.scroll + '" data-title="' + _this.name + '" data-text="' + val(_this.src) + '" class="js-modal-window">' + _filename + '</span></a>';

                        _result += '<a href="' + val(_this.src) + '">' + _filename + '</a>';
                        _result += '<a href="' + val(_this.src) + '" class="external" target="_blank"><em></em></span></a>';

                    } else {
                        _result += '<a href="' + val(_this.src) + '">' + _filename + '</a>';
                        _result += '<a href="' + val(_this.src) + '" class="external" target="_blank"><em></em></span></a>';
                    }


                }
                _result += '</td>';

                // 작업공수
                _result += '<td class="day">' + val(this.start) + ' ~ ' + val(this.end) + '</td>';

                _result += '<td class="progress ' + _classNoProgress + '">' + val(_this.percent) + '</td>';

                if (val(_this.nwax) == 100) {
                    _result += '<td class="nwax ok">' + val(_this.nwax) + '</td>';
                } else {
                    _result += '<td class="nwax">' + val(_this.nwax) + '</td>';
                }

                _result += '<td class="kwah">' + val(_this.kwah) + '</td>';

                _result += '</tr>';

                if (_this.child !== undefined && _this.child !== null) {
                    _getChildItems(_this.child, _depth + 1);
                }

            });

        };

        _getChildItems(_json.child, 0);

        return _result;

    };

    // set data
    $('.table-a table tbody').eq(0).append(_getJsonData($.json.pc));
    // $('.table-a table tbody').eq(1).append(_getJsonData($.json.mobile));
    // $('.table-a table tbody').eq(2).append(_getJsonData($.json.module));

});
