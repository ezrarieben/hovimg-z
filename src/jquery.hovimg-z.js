/*
  MIT License

	Copyright (c) 2018 Ezra Rieben
  https://github.com/ezrarieben/

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;
(function($) {
  $.fn.extend({
    hovimgz: function(options) {
      this.defaultOptions = {
        elements: {
          selectors: {
            image: '.hovimg-z',
          }
        },
        fadeTime: 125
      };


      var settings = $.extend({}, this.defaultOptions, options);
      var functions = {
        showImage(hovimgz) {
          if ($(hovimgz).data('hovimgz') != "" && $(hovimgz).data('old-hovimgz') == null) {
            $(hovimgz).fadeOut(settings.fadeTime, function() {
              $(hovimgz).data('old-hovimgz', $(hovimgz).attr('src'));
              $(hovimgz).attr('src', $(hovimgz).data('hovimgz'));
            });

            $(hovimgz).fadeIn(settings.fadeTime);
          }
        },
        hideImage(hovimgz) {
          if ($(hovimgz).data('old-hovimgz') != null) {
            $(hovimgz).fadeOut(settings.fadeTime, function() {
              $(hovimgz).attr('src', $(hovimgz).data('old-hovimgz'));
              $(hovimgz).data('old-hovimgz', null)
            });

            $(hovimgz).fadeIn(settings.fadeTime);
          }
        }
      }

      return this.each(function() {
        var _this = $(this);

        // hovimgz elements used
        var elements = {
          images: _this.find(settings.elements.selectors.image)
        };

        /**
         * Add event handler for image hover
         */
        $(elements.images).on('mouseenter', function() {
          functions.showImage(this);
        });

        /**
         * Add event handler for image mouse leave (hover off)
         */
        $(elements.images).on('mouseleave', function() {
          functions.hideImage(this);
        });
      });
    }
  });
})(jQuery)
